import { useState } from "react";
import { nanoid } from "nanoid";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import PracticalInfo from "./components/PracticalInfo";
import CV from "./components/CV";
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

  const [showCV, setShowCV] = useState(false);

  const [isEditing, setIsEditing] = useState({
    general: true,
    education: educationInfo.map(() => true),
    practical: practicalInfo.map(() => true),
  });

  const addInfo = (setInfo, newInfo) => {
    setInfo((prevInfo) => [...prevInfo, newInfo]);
    setIsEditing((prevIsEditing) => ({
      ...prevIsEditing,
      education: [...prevIsEditing.education, true],
      practical: [...prevIsEditing.practical, true],
    }));
  };

  const removeInfo = (setInfo, index) => {
    setInfo((prevInfo) => prevInfo.filter((_, i) => i !== index));
    setIsEditing((prevIsEditing) => ({
      ...prevIsEditing,
      education: prevIsEditing.education.filter((_, i) => i !== index),
      practical: prevIsEditing.practical.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (setInfo, index, updatedInfo) => {
    setInfo((prevInfo) =>
      prevInfo.map((info, i) => (i === index ? updatedInfo : info))
    );
  };

  const handleShowCV = () => {
    const allEditingFalse =
      !isEditing.general &&
      isEditing.education.every((editing) => !editing) &&
      isEditing.practical.every((editing) => !editing);
    if (allEditingFalse) {
      setShowCV(true);
    } else {
      alert("Please submit all sections before viewing the CV.");
    }
  };


  return (
    !showCV ? (
        <>
        <h1>CV</h1>
      <div style={{ marginBottom: "20px" }}>
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
          isEditing={isEditing.general}
          setIsEditing={(value) =>
            setIsEditing((prev) => ({ ...prev, general: value }))
          }
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
              setEducationInfo={(updatedInfo) =>
                handleChange(setEducationInfo, index, updatedInfo)
              }
              isEditing={isEditing.education[index]}
              setIsEditing={(value) =>
                setIsEditing((prev) => {
                  const newEditing = [...prev.education];
                  newEditing[index] = value;
                  return { ...prev, education: newEditing };
                })
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
              setPracticalInfo={(updatedInfo) =>
                handleChange(setPracticalInfo, index, updatedInfo)
              }
              isEditing={isEditing.practical[index]}
              setIsEditing={(value) =>
                setIsEditing((prev) => {
                  const newEditing = [...prev.practical];
                  newEditing[index] = value;
                  return { ...prev, practical: newEditing };
                })
              }
            />
            <StyledButton onClick={() => removeInfo(setPracticalInfo, index)}>
              Remove
            </StyledButton>
            <hr />
          </div>
        ))}
      </div>

      <StyledButton onClick={handleShowCV}>Get CV</StyledButton>
      </>): (
        <CV 
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          practicalInfo={practicalInfo}
          setShowCV={() => setShowCV(false)}
        />
      ))
}

export default App;
