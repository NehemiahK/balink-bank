import React, { useContext } from 'react'
import { translate } from '../../translations'
import { LanguageContext } from '../../App'

const FormStage1a = (props) => {

    const errorFieldClass = (field) => {
        return props.errors.includes(field) ? 'errorField' : ''
    }

    const language = useContext(LanguageContext);

    return (<>
        <input type='text' placeholder={translate('Business Name', language)} name='businessName'
            className={errorFieldClass('businessName')}
            onChange={props.handleChange} value={props.formData.businessName} />
        <input type='text' placeholder={translate('Email', language)} name='email' className={errorFieldClass('email')}
            onChange={props.handleChange} value={props.formData.email} />
        <input type='text' placeholder={translate('Phone Number', language)} name='phoneNumber' className={errorFieldClass('phoneNumber')}
            onChange={props.handleChange} value={props.formData.phoneNumber} />
    </>)
}

export default FormStage1a