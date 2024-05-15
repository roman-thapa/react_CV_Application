import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import PracticalInfo from "./components/PracticalInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [practicalInfo, setPracticalInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
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
    </>
  );
}

export default App;
