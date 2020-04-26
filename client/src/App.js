import React, { useState, useEffect } from 'react';
import FormWrapper from './components/FormStages/FormWrapper'
import StepsCounter from './components/StepCounter/StepsCounter'
import Stage1Switcher from './components/FormStages/Stage1Switcher'
import LanguageSelect from './components/LanguageSelect/LanguageSelect';
import './App.css'


const LanguageContext = React.createContext();

export { LanguageContext }

const App = () => {

  const [step, setStep] = useState(0);
  const [stage1Form, setStage1Form] = useState('personal')
  const [language, setLanguage] = useState('EN')

  return (
    <div className="App">
      <LanguageSelect language={language} setLanguage={setLanguage} />
      <LanguageContext.Provider value={language}>
        <StepsCounter setStep={setStep} currentStep={step} />
        {step === 0 &&
          <Stage1Switcher stage1Form={stage1Form} setStage1Form={setStage1Form} />
        }

        <FormWrapper setStep={setStep} step={step} stage1Form={stage1Form} />
      </LanguageContext.Provider>

    </div>
  );
}


export default App;
