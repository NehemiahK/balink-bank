import React, { useState, useEffect, useContext } from 'react'
import { translate } from '../../translations'
import { LanguageContext } from '../../App'

import FormStage1 from './FormStage1'
import FormStage1a from './FormStage1a'
import FormStage2 from './FormStage2'
import FormStage3 from './FormStage3'
import Modal from '../Modal/Modal';
import './formstages.css'

const LAST_STEP_INDEX = 2;

const FormStage = (props) => {
    switch (props.step) {
        case 0:
            return props.stage1Form === 'personal' ?
                <FormStage1 formData={props.formData} handleChange={props.handleChange} errors={props.errors} /> :
                <FormStage1a formData={props.formData} handleChange={props.handleChange} errors={props.errors} />
        case 1:
            return <FormStage2 formData={props.formData} handleChange={props.handleChange}
                handleCountryChange={props.handleCountryChange}
                countries={props.countries} currentCountry={props.currentCountry} />
        case 2:
            return <FormStage3 formData={props.formData} handleChange={props.handleChange} country={props.currentCountry.countryCode} />
        default:
            return <FormStage1 formData={props.formData} handleChange={props.handleChange} errors={props.errors} />
    }
}

const inputValidations = [
    {
        requiredFields: ['firstName', 'lastName', 'email'],
        customValidation: ['email', 'phoneNumber']
    }
]

const inputValidationsBusiness = [
    {
        requiredFields: ['businessName', 'email'],
        customValidation: ['email', 'phoneNumber']
    }
]

const checkRequiredFields = (value, formData) => {
    let missingFields = []
    if (value.requiredFields && value.requiredFields.length > 0) {
        value.requiredFields.forEach((field) =>
            formData[field] || missingFields.push(field))
    }
    return missingFields;
}

const checkCustomValidations = (value, formData) => {
    let errors = []
    if (value.customValidation && value.customValidation.length > 0) {
        value.customValidation.forEach((val) => {
            let valid;
            if (formData[val]) {
                switch (val) {
                    case 'phoneNumber':
                        valid = phoneNumberIsValid(formData.phoneNumber)
                        if (!valid) {
                            errors.push(val)
                        }
                        break;

                    case 'email':
                        valid = emailIsValid(formData.email)
                        if (!valid) {
                            errors.push(val)
                        }
                        break;
                }
            }
        })
    }
    return errors;
}

const emailIsValid = (email) => {
    const regex = /\S+@\S+\.\S+/; //basic check to validate an email format 
    return regex.test(email);

}

const phoneNumberIsValid = (phoneNumber) => {
    /*https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript*/
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(phoneNumber);
}

const FormWrapper = (props) => {
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState([])
    const [countries, setCountries] = useState([])
    const [currentCountry, setCurrentCountry] = useState(null)
    const [displayModal, setDisplayModal] = useState(false)


    const language = useContext(LanguageContext);

    useEffect(() => {
        fetch("/api/countries/", {
            method: "GET",
        }).then(response => response.json())
            .then(data => {
                setCountries(data)
                setCurrentCountry(data[0])
            }
            )
    }, []);

    const updateCountryValue = (value) => {
        const country = countries.find(country => country.country === value);
        setCurrentCountry(country)
    }


    useEffect(() => {
        if (currentCountry) {
            setFormData({
                ...formData,
                bankFormat: currentCountry.bankFormats[0]
            })
        }
    }, [currentCountry]);

    const handleCountryChange = (event) => {
        const value = event.target.value;
        updateCountryValue(value)
        handleChange(event);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        //remove red underline if user is filling out the field - better UX
        let newErrors = errors.filter((error) => error !== name)
        setErrors(newErrors)

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleNextClick = () => {

        let checkValid
        if (props.step === 0) {
            checkValid = props.stage1Form === 'personal' ? inputValidations[props.step] : inputValidationsBusiness[props.step]
        }

        if (checkValid) {
            let missingFields = checkRequiredFields(checkValid, formData);
            let improperFormatting = checkCustomValidations(checkValid, formData)
            setErrors(missingFields.concat(improperFormatting))

            if (missingFields.length > 0 || improperFormatting.length > 0) {
                return;
            }
        }

        if (props.step < LAST_STEP_INDEX) {
            props.setStep(props.step + 1)
        } else {
            submitForm();
        }
    }

    const getTranslatedNextButton = () => {
        const word = props.step < LAST_STEP_INDEX ? 'Next' : 'Submit'
        return translate(word, language)
    }

    const submitForm = () => {
        fetch("/api/customer/", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache': 'no-cache'
            },
            credentials: 'same-origin',
        }).then(response => console.log(response))

        setDisplayModal(true)
        setFormData({})
        props.setStep(0)

        setTimeout(() => {
            setDisplayModal(false)
        }, 3000)
    }

    return (<div className='form-wrapper'>
        <FormStage step={props.step} formData={formData} handleChange={handleChange} errors={errors}
            countries={countries} currentCountry={currentCountry}
            handleCountryChange={handleCountryChange} stage1Form={props.stage1Form} />
        <div>
            {props.step !== 0 &&
                <button className='btn prev-button' onClick={() => props.setStep(props.step - 1)}>
                    {translate('Previous', language)} </button>
            }
            <button className='btn next-button' onClick={handleNextClick}>{
                getTranslatedNextButton()
            }</button>
        </div>

        {displayModal && <Modal mainText='Successfully submitted your bank details.' secondText='Thank you!' />}

    </div>)

}
export default FormWrapper