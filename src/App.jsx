import { useState } from "react";
import { nanoid } from 'nanoid';
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

  const handleRemoveEducation = (id) => {
    const updatedEducationInfos = [...educationInfo];
    updatedEducationInfos.splice(id, 1);
    setEducationInfo(updatedEducationInfos);
  };

  const handleEducationChange = (id, updatedInfo) => {
    const updatedEducationInfos = [...educationInfo];
    updatedEducationInfos[id] = updatedInfo;
    setEducationInfo(updatedEducationInfos);
  };

  return (
    <>
      <h1>CV</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <button onClick={handleAddEducation}>Add Education</button>
      {educationInfo.map((info) => (
        <div key={info.id}>
          <EducationInfo
            educationInfo={info}
            onChange={(updatedInfo) =>
              handleEducationChange(info.id, updatedInfo)
            }
          />
          <button onClick={() => handleRemoveEducation(info.id)}>Remove</button>
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
