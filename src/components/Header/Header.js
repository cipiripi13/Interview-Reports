import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {

  return(
    <div className="header">
      <Link to="/" style={{color:'black', textDecoration: 'none'}}><h1>Interview Reports</h1></Link>
      {/* ubacujemo odmah gotovu komp iz react routera kako bi nas navigirala na pocetnu stranu
      --- potrebno je i gore import-ovati LINK */}
      {/* to ='/' nas navigira na pocetnu stranu--- mainPage */}
      <Link to="/"><button className="btn">Candidates</button></Link>
    </div>
    
  )
}