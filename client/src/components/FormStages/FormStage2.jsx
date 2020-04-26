import React, { useContext } from 'react'
import { translate } from '../../translations'
import { LanguageContext } from '../../App'

const FormStage2 = (props) => {

    const getBankFormat = (bankFormat, indx) => {
        if (props.formData.bankFormat) {
            return bankFormat === props.formData.bankFormat
        }
        return indx === 0;
    }

    const getFullBankFormatName = (bankFormat) => {
        switch (bankFormat) {
            case 'swift':
                return 'SWIFT code'
            case 'local':
                return 'Local bank details'
            default:
                return ''
        }
    }

    const language = useContext(LanguageContext);

    return (<>
        {props.currentCountry && <>
            <div className='spacer10'></div>
            <div className='label'>{translate('Country', language)}</div>
            <select name='country' onChange={props.handleCountryChange} value={props.formData.country}>
                {props.countries.map((country) =>
                    <option value={country.country}>{country.country}</option>
                )}
            </select>
            <div className='label'>{translate('Currency', language)}</div>
            <div>{props.currentCountry.currency}</div>

            <div className='label'>Bank Details format</div>
            <div>

                {props.currentCountry.bankFormats.map((bankFormat, indx) =>
                    <><div><input type='radio'
                        onChange={props.handleChange}
                        name='bankFormat'
                        value={bankFormat}
                        checked={getBankFormat(bankFormat, indx)} /> {getFullBankFormatName(bankFormat)}</div>
                        <div className='spacer10'></div></>
                )}
            </div>

            <div className='spacer10'></div>
            <input type='text' placeholder={translate('Account Number', language)} name='accountNumber' onChange={props.handleChange}
                value={props.formData.accountNumber} />
            <div className='spacer'></div>
            {props.formData.bankFormat === 'local' ?
                <> <input type='text' name='routingNumber' placeholder='ACH routing number'
                    onChange={props.handleChange} value={props.formData.routingNumber} />
                    <div className='label'>Account type</div>
                    <select name='accountType' onChange={props.handleChange} onChange={props.handleChange} value={props.formData.accountType}>
                        <option value='checkingAccount'>Checking Account</option>
                        <option value='savingsAccount'>Savings Account</option>
                    </select>
                </> : <input type='text' placeholder='BIC/SWIFT Code' name='swiftCode'
                    onChange={props.handleChange}
                    value={props.formData.swiftCode} />
            }
        </>
        }
    </>)
}

export default FormStage2