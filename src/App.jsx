import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import PracticalInfo from "./components/PracticalInfo";
// import CV from "./components/CV";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: null,
    email: null,
    phone: null,
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      school: null,
      title: null,
      date: null,
    },
  ]);

  const [practicalInfo, setPracticalInfo] = useState([
    {
      company: null,
      position: null,
      responsibilities: null,
      working: null,
      dateFrom: null,
      dateUntil: null,
    },
  ]);

  const handleAddEducation = () => {
    setEducationInfo([...educationInfo, { school: "", title: "", date: "" }]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducationInfos = [...educationInfo];
    updatedEducationInfos.splice(index, 1);
    setEducationInfo(updatedEducationInfos);
  };

  const handleEducationChange = (index, updatedInfo) => {
    const updatedEducationInfos = [...educationInfo];
    updatedEducationInfos[index] = updatedInfo;
    setEducationInfo(updatedEducationInfos);
  };

  return (
    <>
      <h1>CV</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <button onClick={handleAddEducation}>Add Education</button>
      {educationInfo.map((info, index) => (
        <div key={index}>
          <EducationInfo
            educationInfo={info}
            onChange={(updatedInfo) =>
              handleEducationChange(index, updatedInfo)
            }
          />
          <button onClick={() => handleRemoveEducation(index)}>Remove</button>
        </div>
      ))}
      <PracticalInfo
        practicalInfo={practicalInfo}
        setPracticalInfo={setPracticalInfo}
      />
      {/* <CV 
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
      /> */}
    </>
  );
}

export default App;
