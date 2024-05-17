import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import PracticalInfo from "./components/PracticalInfo";
import CV from "./components/CV";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: null,
    email: null,
    phone: null,
  });

  const [educationInfo, setEducationInfo] = useState({
    school: null,
    title: null,
    date: null,
  });

  const [practicalInfo, setPracticalInfo] = useState({
    company: null,
    position: null,
    responsibilities: null,
    working: null,
    dateFrom: null,
    dateUntil: null,
  });

  return (
    <>
      <h1>CV</h1>
      <GeneralInfo 
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />
      <EducationInfo 
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
      />
      <PracticalInfo 
        practicalInfo={practicalInfo}
        setPracticalInfo={setPracticalInfo}
      />
      <CV 
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
      />
    </>
  );
}

export default App;
