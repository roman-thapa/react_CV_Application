import { useState } from "react";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formState, setFormState] = useState(generalInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing((prev) => !prev);
    setGeneralInfo(formState);
    
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
    console.log(generalInfo)
  };

  return (
    <>
      <div>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name :
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone No:
              <input
                type="tel"
                name="phone"
                value={formState.phone}
                placeholder="+XX XXXXXXXXXX"
                pattern="\+[0-9]{1,3} [0-9]{9,14}"
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Add</button>
          </form>
        ) : (
          <div>
            <p>Name: {formState.name}</p>
            <p>Email: {formState.email}</p>
            <p>Phone: {formState.phone}</p>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    </>
  );
}

export default GeneralInfo;
