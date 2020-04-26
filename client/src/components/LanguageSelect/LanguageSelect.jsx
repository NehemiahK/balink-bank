import React from 'react'
import { languages } from '../../translations'

const LanguageSelect = (props) => {

    const updateLanguage = (e) => {
        props.setLanguage(e.target.value)
    }

    return (<div className='language-selecter'>
        <select value={props.language} onChange={updateLanguage}>
            {languages.map((lang) => <option value={lang}>{lang}</option>)}
        </select>
    </div>
    )
}

export default LanguageSelect