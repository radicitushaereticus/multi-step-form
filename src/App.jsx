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


  const {step, nextStep,previousStep, isStepValid, setStepValid, goToStep} = useMultistep(steps)

  return (
    <div className='flex md:items-center md:justify-center md:min-h-screen'>
        <div className='flex md:flex-row md:rounded-xl md:bg-white md:shadow-sm md:p-4 md:w-[950px] gap-x-4 flex-col '>
          <Sidebar steps={steps} currentStep={step} /> 
          <Main 
            step={step}
            nextStep = {nextStep}
            previousStep = {previousStep}
            goToStep = {goToStep}
          />
        </div>
    </div>
  )
}

export default App
