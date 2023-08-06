import react,{ useState } from 'react'
import './App.css'
import Sidebar from "./components/sidebar.jsx"
import Main from './components/Main'
import { useMultistep } from './components/Hooks'
function App() {

  const [steps, setSteps] = useState([
    {  
      step:1,
      label:"YOUR INFO",
    },

    {  
      step:2,
      label:"SELECT PLAN",
    },

    { 
      step:3, 
      label:"ADD-ONS",
    },

    { 
      step:4,
      label:"SUMMARY",
    },
  ])

  const {step, nextStep,previousStep, isStepValid, setStepValid} = useMultistep(steps)

  return (
      <div className='container mx-auto h-10 grid grid-cols-3 p-7 min-h-[1200px]'>
        <Sidebar steps={steps} currentStep={step}/> 
        <Main 
              step={step}
              nextStep={nextStep} 
              previousStep={previousStep}
              isStepValid={isStepValid}
              setStepValid={setStepValid} 
        />
      </div>
  )
}

export default App
