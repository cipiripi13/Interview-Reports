import React, { useEffect, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdEmail, MdSchool } from 'react-icons/md';
import { useParams } from 'react-router';
import './CandidateReports.css';

export default function DetailsCandidateReport() {
  // hook: useState candidate from url
  const [candidate, setCandidate] = useState(null);
  // hook: useParams id from url
  const params = useParams();
  // fetch data from server and set to state candidate
  useEffect(() => {
    fetch(`http://localhost:3333/api/candidates/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCandidate(data));
  }, [params.id]);
  // if candidate is null, return null
  if (!candidate) {
    return null;
  }
  //  formating date of birth with ... and set to state
  const date = new Date(candidate.birthday);
  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  // return candidate details
  return (
    <div className="data">
      <div className="data-img">
        <img className="img" src={candidate.avatar} alt="img" />
      </div>

      <div className="name-email">
        <p className="name">
          {' '}
          <small>
            <BsFillPersonFill />
          </small>
          Name:
        </p>
        <p>{candidate.name}</p>
        <p className="email">
          {' '}
          <small>
            <MdEmail />
          </small>
          Email:
        </p>
        <p>{candidate.email}</p>
      </div>
      <div className="birth-education">
        <p className="birthday">
          {' '}
          <small>
            <FaBirthdayCake />
          </small>
          Date of birth:
        </p>
        <p>{formattedDate}</p>
        <p className="education">
          {' '}
          <small>
            <MdSchool />
          </small>
          Education:
        </p>
        <p>{candidate.education}</p>
      </div>
    </div>
  );
}
