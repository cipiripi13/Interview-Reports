import './card.css'

export const CardUser = (props) => {
  const item = props.item;
  const avatar = item.avatar;
  const email = item.email;
  // console.log(avatar);
  console.log(item);
  return (
    <div className="card">

      <img src={avatar} alt='img' />
      <br />
      <p>{item.name}</p>
      <p>{email}</p>

    </div>
  )
}