import { useState } from "react";
import {
  P,
  StyledInput,
  StyledButton,
  StyledCheckbox,
} from "./StyledComponents";

const PracticalInfo = ({ practicalInfo, setPracticalInfo, isEditing, setIsEditing }) => {
  const [formState, setFormState] = useState(practicalInfo);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formState.working &&
      new Date(formState.dateFrom) > new Date(formState.dateUntil)
    ) {
      setError("Start date cannot be later than end date");
      return;
    }
    setError(null);
    setIsEditing(false);
    setPracticalInfo(formState);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
          <StyledInput
            type="text"
            name="company"
            value={formState.company}
            onChange={handleChange}
            placeholder="Company"
            tag="Company"
            required
          />
          </div>
          <div>
          <StyledInput
            type="text"
            name="position"
            value={formState.position}
            onChange={handleChange}
            placeholder="Position"
            tag="Position"
            required
          />
          </div>
          <div>
          <StyledInput
            type="text"
            name="responsibilities"
            value={formState.responsibilities}
            onChange={handleChange}
            placeholder="Responsibilities"
            tag="Responsibilities"
            required
          />
          </div>
          <div>
          <label>
          <StyledCheckbox
            type="checkbox"
            name="working"
            checked={formState.working}
            onChange={(e) => handleChange({ target: { name: 'working', value: e.target.checked } })}
            tag="Working"
          />
          Currently Working</label>
          </div>
          <div>
          <label>Date From: 
          <StyledInput
            type="date"
            name="dateFrom"
            value={formState.dateFrom}
            onChange={handleChange}
            placeholder="Date From"
            tag="Date From"
            required
          />
          </label>
          </div>
          <div>
          <label>Date Until: 
          <StyledInput
            type="date"
            name="dateUntil"
            value={formState.dateUntil}
            onChange={handleChange}
            placeholder="Date Until"
            tag="Date Until"
            disabled={formState.working}
            required
          />
          </label>
          </div>
          {error && <P tag="Error">{error}</P>}
          <StyledButton type="submit">Save</StyledButton>
        </form>
      ) : (
        <div>
          <P tag="Company">Company: {formState.company}</P>
          <P tag="Position">Position: {formState.position}</P>
          <P tag="Responsibilities">
            Responsibilities: {formState.responsibilities}
          </P>
          <P tag="Working">Working: {formState.working ? "Yes" : "No"}</P>
          <P tag="Date From">Date From: {formState.dateFrom}</P>
          {!formState.working ? (
            <P tag="Date Until">Date Until: {formState.dateUntil}</P>
          ) : null}
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </div>
      )}
    </div>
  );
};

export default PracticalInfo;
