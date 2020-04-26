import React, { useContext } from 'react'
import { translate } from '../../translations'
import { LanguageContext } from '../../App'

const Stage1Switcher = (props) => {

    const getCurrentClass = (value) => {
        return props.stage1Form === value ? 'stage-1 active' : 'stage-1'
    }

    const language = useContext(LanguageContext);

    return (<div className='stage-switcher'>
        <span onClick={() => props.setStage1Form('personal')} className={getCurrentClass('personal')}>
            {translate('Personal', language)}</span>
        <span onClick={() => props.setStage1Form('business')} className={getCurrentClass('business')}>
            {translate('Business', language)}</span>
    </div>)
}

export default Stage1Switcher