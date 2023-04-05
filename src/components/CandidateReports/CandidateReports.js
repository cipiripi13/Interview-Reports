import './CandidateReports.css';
import { useEffect, useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { useParams } from 'react-router';

export const CandidateReports = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState([]);
  const [candidateReports, setCandidateReports] = useState([]); //Data for table

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

  const singleCandidateReportFetch = (id) => {
    const url = 'http://localhost:3333/api/reports?candidateId=' + id;
    fetch(url)
      .then(response => response.json())
      .then((data => {

        setCandidateReports(data)

      }))
  };


  useEffect(() => {
    singleCandidateFetch(id);
    singleCandidateReportFetch(id);

  }, [id]);

  const dateString = `${candidate.birthday}`;
  const date = new Date(dateString);
  const formattedDateBirthday = date.toDateString();
  return (
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
      {/* display table data */}
      <h2>Reports</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th>Interview Date</th>
            <th colSpan={2}>Status</th>

          </tr>
        </thead>
        <tbody>
          {


            candidateReports.map((item) => {

              const dateString = `${item.interviewDate}`;
              const date = new Date(dateString);
              const formattedDate = date.toDateString()
              return (
                <tr key={item.id}>
                  <td> {item.companyName} </td>
                  <td> {formattedDate} </td>
                  <td> {item.status} </td>
                  <td> <span > <AiOutlineEye /> </span> </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}