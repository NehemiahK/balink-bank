import React, { useContext } from 'react'
import { translate } from '../../translations'
import { LanguageContext } from '../../App'

import './stepscounter.css';

const steps = ['Beneficiary', 'Bank details', 'Address']

const StepsCounter = (props) => {

    const getStepClass = (stepIndex) => {
        if (props.currentStep === stepIndex) {
            return 'current'
        }
        else if (stepIndex < props.currentStep) {
            return 'checked'
        }
        else {
            return ''
        }
    }

    const handleStepClick = (indx) => {
        if (indx <= props.currentStep) {
            props.setStep(indx)
        }

    }

    const displayNumber = (stepIndex) => {
        return stepIndex < props.currentStep ? '✔' : stepIndex + 1
    }

    const language = useContext(LanguageContext);

    return (<div className='steps-counter'>
        {steps.map((step, indx) => {
            return (<>
                <div>
                    <div className={`step-index ${getStepClass(indx)}`} onClick={() => handleStepClick(indx)}>
                        {displayNumber(indx)}
                    </div>

                    <span>{translate(step, language)}</span>
                </div>
                {steps.length - 1 !== indx &&
                    <div className='step-line'>_____________</div>
                }

            </>
            )
        })}
    </div>)
}

export default StepsCounter