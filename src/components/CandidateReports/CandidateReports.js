import './CandidateReports.css';
import { useEffect, useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { useParams } from 'react-router';
import { ModalReport } from '../ModalReport/ModalReport';
import DetailsCandidateReport from './DetailsCandidateReport';

export const CandidateReports = () => {
  const { id } = useParams();


  const [candidateReports, setCandidateReports] = useState([]); //Data for table
  const [modalOpened, setModalOpened] = useState(false);
  const [choosenReport, setChoosenReport] = useState(null);

  // second fetch, table data

  const singleCandidateReportFetch = (id) => {
    const url = 'http://localhost:3333/api/reports?candidateId=' + id;
    fetch(url)
      .then(response => response.json())
      .then((data => {
        setCandidateReports(data)
      }))
  };


  useEffect(() => {
    singleCandidateReportFetch(id);
  }, [id]);

  const handleClickReport = (report) => {
    setModalOpened(true);
    setChoosenReport(report);
  }
  const closeModal = () => {
    setModalOpened(false)
    setChoosenReport(null)
  }


  return (
    <div className="candidate-reports">
      <h3>Candidate Reports - Candidate Id No-{id}</h3>
      {/* display details data */}
      <DetailsCandidateReport />
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
              const formattedDate = date.toDateString();

              return (
                <tr key={item.id}>
                  <td> {item.companyName} </td>
                  <td> {formattedDate} </td>
                  <td> {item.status} </td>
                  <td> <span className='eye' onClick={(e) => { handleClickReport(item) }}> <AiOutlineEye /> </span> </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {
        modalOpened && (<ModalReport closeModal={closeModal} report={choosenReport} />)
      }
    </div>
  )
}