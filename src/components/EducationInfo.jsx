import {useState} from 'react'

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
  };

  const handleEdit = () =>{
    setIsEditing(prev=>!prev)
  }
  return (
    <>
      <div>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <label>
              School :
              <input
                type="text"
                name="school"
                value={formState.school}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Title :
              <input
                type="text"
                name="title"
                value={formState.title}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={formState.date}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" >
              Add
            </button>
          </form>
        ) : (
          <div>
            <p>School: {formState.name}</p>
            <p>Title: {formState.email}</p>
            <p>Date: {formState.phone}</p>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    </>
  )
}

export default EducationInfo