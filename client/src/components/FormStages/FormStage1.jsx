import React, { useContext } from 'react'
import { translate } from '../../translations'
import { LanguageContext } from '../../App'

const FormStage1 = (props) => {

    const errorFieldClass = (field) => {
        return props.errors.includes(field) ? 'errorField' : ''
    }

    const language = useContext(LanguageContext);

    return (<>
        <input type='text' placeholder={translate('First Name', language)} name='firstName' className={errorFieldClass('firstName')}
            onChange={props.handleChange} value={props.formData.firstName} />
        <input type='text' placeholder={translate('Last Name', language)} name='lastName' className={errorFieldClass('lastName')}
            onChange={props.handleChange} value={props.formData.lastName} />
        <input type='text' placeholder={translate('Email', language)} name='email' className={errorFieldClass('email')}
            onChange={props.handleChange} value={props.formData.email} />
        <input type='text' placeholder={translate('Phone Number', language)} name='phoneNumber' className={errorFieldClass('phoneNumber')}
            onChange={props.handleChange} value={props.formData.phoneNumber} />
    </>)
}

export default FormStage1