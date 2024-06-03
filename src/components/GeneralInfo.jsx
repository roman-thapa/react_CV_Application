import { useState } from "react";
import {
  P,
  ManuDiv,
  StyledInput,
  StyledButton,
} from "./StyledComponents";

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
  };

  return (
    <>
      <div>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div>
            <label>
              Name :
              <StyledInput
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </label>
            </div>
            <div>
            <label>
              Email:
              <StyledInput
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </label>
            </div>
            <div>
            <label>
              Phone No:
              <StyledInput
                type="tel"
                name="phone"
                value={formState.phone}
                placeholder="+XX XXXXXXXXXX"
                pattern="\+[0-9]{1,3} [0-9]{9,14}"
                onChange={handleChange}
                required
              />
            </label>
            </div>
            <StyledButton type="submit">Add</StyledButton>
          </form>
        ) : (
          <div>
            <P>Name: {formState.name}</P>
            <P>Email: {formState.email}</P>
            <P>Phone: {formState.phone}</P>
            <StyledButton onClick={handleEdit}>Edit</StyledButton>
          </div>
        )}
      </div>
    </>
  );
}

export default GeneralInfo;
