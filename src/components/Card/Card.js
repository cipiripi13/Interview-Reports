import { useNavigate } from 'react-router';
import './card.css'
export const Card = (props) => {
  //uvodimo ovaj hook da bismo lakse navigirali tj.kretali se kroz nase rute
  const navigate = useNavigate();
  const item = props.item;
  //i ovde smo procitali id
  const id = item.id;
  const avatar = item.avatar;
  const email = item.email;
  // console.log(avatar);
  console.log(item);
  // u ovoj f-ji samo kazemo gde hocemo na klik da nas vodi ta f-ja
  //u nasem slucaju mi cemo samo menjati rutu i hocemo da se prebacimo na rutu koju imamo u kompon. CandidateReports.js
  //zato kada kliknemo na karticu on ce uhvatiti taj id i ubaciti ga u rutu i povuci podatke sa servera
  const handleClick = (e)=>{
    navigate("/candidate/" + id);
  }
  return (
    <div className="card" onClick={handleClick}>
      <img src={avatar} alt='img' />
      <br />
      <p>{item.name}</p>
      <p>{email}</p>
    </div>
  )
}