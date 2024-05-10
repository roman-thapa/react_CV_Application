import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import EducationInfo from './components/EducationInfo'
import PracticalInfo from './components/PracticalInfo' 

function App() {

  return (
    <>
      <h1>CV</h1>
      <GeneralInfo />
      <EducationInfo />
      <PracticalInfo />
    </>
  )
}

export default App
