import { useNavigate } from 'react-router';
import './card.css'
export const Card = (props) => {

  const navigate = useNavigate();
  const item = props.item;
  const id = item.id;
  const avatar = item.avatar;
  const email = item.email;

  console.log(item);

  const handleClick = (e) => {
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