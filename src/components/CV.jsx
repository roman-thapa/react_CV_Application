import styled, { createGlobalStyle } from "styled-components";
import { StyledButton } from "./StyledComponents";

const CVContainer = styled.div`
  margin: 20px;
`;

const GeneralSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  width: 48%;
`;

const PrintStyles = createGlobalStyle`
  @media print {
    .no-print {
      display: none;
    }
  }
`;

const CV = ({ generalInfo, educationInfo, practicalInfo, setShowCV }) => {
  return (
    <>
      <PrintStyles />
      <CVContainer>
        <GeneralSection>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
        </GeneralSection>

        <ColumnsContainer>
          <Column>
            <h2>Educational Background</h2>
            {educationInfo.map((edu) => (
              <div key={edu.id}>
                <p>School: {edu.school}</p>
                <p>Title: {edu.title}</p>
                <p>Date: {edu.date}</p>
                <hr />
              </div>
            ))}
          </Column>

          <Column>
            <h2>Practical Experience</h2>
            {practicalInfo.map((prac) => (
              <div key={prac.id}>
                <p>Company: {prac.company}</p>
                <p>Position: {prac.position}</p>
                <p>Responsibilities: {prac.responsibilities}</p>
                <p>Working: {prac.working ? "Yes" : "No"}</p>
                <p>Date From: {prac.dateFrom}</p>
                {prac.dateUntil && <p>Date Until: {prac.dateUntil}</p>}
                <hr />
              </div>
            ))}
          </Column>
        </ColumnsContainer>
      </CVContainer>
      <StyledButton className="no-print" onClick={() => window.print()}>Print CV</StyledButton>
      <StyledButton className="no-print" onClick={() => setShowCV()}>Edit CV</StyledButton>
    </>
  );
};

export default CV;