import {useState} from 'react'
import {
  P,
  StyledInput,
  StyledButton,
} from './StyledComponents';

function EducationInfo({educationInfo, setEducationInfo}) {
  const [isEditing, setIsEditing] = useState(true);
  const [formState, setFormState] = useState(educationInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing((prev) => !prev);
    setEducationInfo(formState)
  };

  const handleEdit = () =>{
    setIsEditing(prev=>!prev)   
    console.log(educationInfo)
  }
  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
          <StyledInput
            type="text"
            name="school"
            value={formState.school}
            onChange={handleChange}
            placeholder="School"
            required
          />
          </div>
          <div>
          <StyledInput
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          </div>
          <div>
          <StyledInput
            type="date"
            name="date"
            value={formState.date}
            onChange={handleChange}
            placeholder="Date"
            required
          />
          </div>
          <StyledButton type="submit">Save</StyledButton>
        </form>
      ) : (
        <div>
          <P>School: {formState.school}</P>
          <P>Title: {formState.title}</P>
          <P>Date: {formState.date}</P>
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </div>
      )}
    </div>
  )
}

export default EducationInfo