
import { useEffect } from 'react';
import './modal.css';

export const ModalReport = (props) => {

  // i ovde nam stize taj closeModal iz komp CandidateReport gde smo na 146 liniji koda prosledili kao props
  const closeModal = props.closeModal;
  const report = props.report;
  console.log(report);
  const item = report;

  useEffect(() => {
    // kada se modal prikaze na ekranu
    document.body.classList.add("modal-opened"); // pure js

    return () => {
      // kad se komponenta brise sa ekrana tj. kad se modal zatvori
      document.body.classList.remove("modal-opened"); // pure js
    }
  }, []);

  const dateString = `${item.interviewDate}`;
  const date = new Date(dateString);
  const formattedDate = date.toDateString()

  return (
    // crni prostor iza modal-a
    <div className="modal-overlay">
      {/* sam modal */}
      <div className="modal">
        <h1>{item.candidateName}</h1>
        <div>
          {
            report && (
              <div className='m'>

              
              <div className='general'>

                <div>
                  <span>Company:</span>
                  <h3>{item.companyName}</h3>
                </div>
                <div>
                  <span>Interview Date:</span>
                  <h3>{formattedDate}</h3>
                </div>
                <div>
                  <span>Phase</span>
                  <h3>{item.phase}</h3>
                </div>
                <div>
                  <span>Status</span>
                  <h3>{item.status}</h3>
                </div>
                
              </div>
              <div className='note'>
              <span>Note</span>
              <p>{item.note}</p>
              </div>
              </div>
            )
          }
        </div>
        <div className="close" onClick={closeModal}>&times;</div>
      </div>
      {/* close- x - kojim se zatvara modal i stavili smo ga ne da je deo modal-a vec da je deo same crne pozadine */}
      {/* i da bi modal mogao da zatvori sam sebe a ne ceo ekran dodajemo sledecu f-ju  u candidatReports*/}
      {/* i ovde dole cekamo taj closeModal iz props-a */}
      
    </div>

  )
}