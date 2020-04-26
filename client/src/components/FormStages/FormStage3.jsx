import React, { useContext } from 'react'
import { translate } from '../../translations'
import { LanguageContext } from '../../App'

const FormStage3 = (props) => {

    const language = useContext(LanguageContext);

    return (<>
        <div className='label' style={{ marginBottom: -30 }}>{translate('Country', language)}</div>
        <input type='text' value={props.country} disabled />
        <input type='text' placeholder='State' name='state' onChange={props.handleChange} value={props.formData.state} />
        <input type='text' placeholder={translate('City', language)} name='city' onChange={props.handleChange} value={props.formData.city} />
        <input type='text' placeholder={translate('Post Code', language)} name='postCode' onChange={props.handleChange} value={props.formData.postCode} />
        <input type='text' placeholder={translate('Address', language)} name='address' onChange={props.handleChange} value={props.formData.address} />
    </>)
}

export default FormStage3