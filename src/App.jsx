import { useState } from "react";
import { nanoid } from "nanoid";
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
      id: nanoid(),
      school: null,
      title: null,
      date: null,
    },
  ]);

  const [practicalInfo, setPracticalInfo] = useState([
    {
      id: nanoid(),
      company: null,
      position: null,
      responsibilities: null,
      working: null,
      dateFrom: null,
      dateUntil: null,
    },
  ]);

  const handleAddEducation = () => {
    setEducationInfo([
      ...educationInfo,
      { id: nanoid(), school: null, title: null, date: null },
    ]);
  };

  const handleAddPracticalInfo = () => {
    setPracticalInfo([
      ...practicalInfo,
      {
        id: nanoid(),
        company: '',
        position: '',
        responsibilities: '',
        working: false,
        dateFrom: '',
        dateUntil: '',
      },
    ]);
  };


  const handleRemoveEducation = (index) => {
    const updatedEducationInfos = [...educationInfo];
    updatedEducationInfos.splice(index, 1);
    setEducationInfo(updatedEducationInfos);
  };

  const handleRemovePracticalInfo = (index) => {
    const updatedPracticalInfo = [...practicalInfo];
    updatedPracticalInfo.splice(index, 1);
    setPracticalInfo(updatedPracticalInfo);
  };



  const handleEducationChange = (index, updatedInfo) => {
    const updatedEducationInfos = [...educationInfo];
    updatedEducationInfos[index] = updatedInfo;
    setEducationInfo(updatedEducationInfos);
  };

  const handlePracticalChange = (index, updatedInfo) => {
    const updatedPracticalInfo = [...practicalInfo];
    updatedPracticalInfo[index] = updatedInfo;
    setPracticalInfo(updatedPracticalInfo);
  };


  return (
    <>
      <h1>CV</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <button onClick={handleAddEducation}>Add Education</button>
      {educationInfo.map((info, index) => (
        <div key={info.id}>
          <EducationInfo
            educationInfo={info}
            onChange={(updatedInfo) =>
              handleEducationChange(index, updatedInfo)
            }
          />
          <button onClick={() => handleRemoveEducation(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddPracticalInfo}>Add Practical Experience</button>
      {practicalInfo.map((info, index) => (
        <div key={info.id}>
          <PracticalInfo
            practicalInfo={info}
            onChange={(updatedInfo) =>
              handlePracticalChange(index, updatedInfo)
            }
          />
          <button onClick={() => handleRemovePracticalInfo(index)}>
            Remove
          </button>
        </div>
      ))}

      {/* <CV 
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
      /> */}
    </>
  );
}

export default App;
