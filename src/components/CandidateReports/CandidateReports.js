import './CandidateReports.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const CandidateReports = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState([]);

  const singleCandidateFetch = (id) => {
    const url = 'http://localhost:3333/api/candidates?id=' + id;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data[0] && data[0].id) {
          setCandidate(data[0]);
        }
      });
  };
  useEffect(() => {
    singleCandidateFetch(id);
   
  }, [id]);

  const dateString = `${candidate.birthday}`;
  const date = new Date(dateString);
  const formattedDateBirthday = date.toDateString();
  return(
    <div className="candidate-reports">
      <h3>Candidate Reports - Candidate Id No-{id}</h3>

      {candidate && (
        <div className="data">
          <div className="data-img">
            <img src={candidate.avatar} alt="img" />
          </div>
          <div className="data-list">
            <span>Name: {candidate.name}</span>
            <span> Date of Birth: {formattedDateBirthday} </span>
            <span>Email: {candidate.email}</span>
            <span>Education: {candidate.education}</span>
          </div>
        </div>
      )}
      </div>
  )
}