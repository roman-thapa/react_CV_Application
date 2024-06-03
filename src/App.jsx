import { useState } from "react";
import { nanoid } from "nanoid";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import PracticalInfo from "./components/PracticalInfo";
// import CV from "./components/CV";
import { ManuDiv, StyledButton } from "./components/StyledComponents";

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
  const addInfo = (setInfo, newInfo) => {
    setInfo((prevInfo) => [...prevInfo, newInfo]);
  };

  const removeInfo = (setInfo, index) => {
    setInfo((prevInfo) => prevInfo.filter((_, i) => i !== index));
  };

  const handleChange = (setInfo, index, updatedInfo) => {
    setInfo((prevInfo) =>
      prevInfo.map((info, i) => (i === index ? updatedInfo : info))
    );
  };

  return (
    <>
      <h1>CV</h1>
      <div style={{ marginBottom: "20px" }}>
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <hr />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <ManuDiv>Educational Background</ManuDiv>
        <StyledButton
          onClick={() =>
            addInfo(setEducationInfo, {
              id: nanoid(),
              school: null,
              title: null,
              date: null,
            })
          }
        >
          Add Education
        </StyledButton>
        {educationInfo.map((info, index) => (
          <div key={info.id}>
            <EducationInfo
              educationInfo={info}
              onChange={(updatedInfo) =>
                handleChange(setEducationInfo, index, updatedInfo)
              }
            />
            <StyledButton onClick={() => removeInfo(setEducationInfo, index)}>
              Remove
            </StyledButton>
            <hr />
          </div>
        ))}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <ManuDiv>Practical Experience</ManuDiv>
        <StyledButton
          onClick={() =>
            addInfo(setPracticalInfo, {
              id: nanoid(),
              company: "",
              position: "",
              responsibilities: "",
              working: false,
              dateFrom: "",
              dateUntil: "",
            })
          }
        >
          Add Practical Experience
        </StyledButton>
        {practicalInfo.map((info, index) => (
          <div key={info.id}>
            <PracticalInfo
              practicalInfo={info}
              onChange={(updatedInfo) =>
                handleChange(setPracticalInfo, index, updatedInfo)
              }
            />
            <StyledButton onClick={() => removeInfo(setPracticalInfo, index)}>
              Remove
            </StyledButton>
            <hr />
          </div>
        ))}
      </div>

      {/* <CV 
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        practicalInfo={practicalInfo}
      /> */}
    </>
  );
}

export default App;
