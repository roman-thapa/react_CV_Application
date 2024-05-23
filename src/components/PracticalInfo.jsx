import { useState } from 'react';

const PracticalInfo = ({ practicalInfo, onChange }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [formState, setFormState] = useState(practicalInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormState = { ...formState, [name]: value };
    setFormState(updatedFormState);
    onChange(updatedFormState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            value={formState.company}
            onChange={handleChange}
            placeholder="Company"
            required
          />
          <input
            type="text"
            name="position"
            value={formState.position}
            onChange={handleChange}
            placeholder="Position"
            required
          />
          <input
            type="text"
            name="responsibilities"
            value={formState.responsibilities}
            onChange={handleChange}
            placeholder="Responsibilities"
            required
          />
          <input
            type="checkbox"
            name="working"
            checked={formState.working}
            onChange={(e) => handleChange({ target: { name: 'working', value: e.target.checked } })}
            required
          />
          <label>Currently Working</label>
          <input
            type="date"
            name="dateFrom"
            value={formState.dateFrom}
            onChange={handleChange}
            placeholder="Date From"
            required
          />
          <input
            type="date"
            name="dateUntil"
            value={formState.dateUntil}
            onChange={handleChange}
            placeholder="Date Until"
            disabled={formState.working}
            required
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>Company: {formState.company}</p>
          <p>Position: {formState.position}</p>
          <p>Responsibilities: {formState.responsibilities}</p>
          <p>Working: {formState.working ? 'Yes' : 'No'}</p>
          <p>Date From: {formState.dateFrom}</p>
          {!formState.working ?(<p>Date Until: {formState.dateUntil}</p>): null}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalInfo;