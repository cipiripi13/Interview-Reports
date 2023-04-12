import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <h1>Interview Reports</h1>
      <button className="btn">Candidates</button>
      <Link to="/" style={{ color: 'black', textDecoration: 'none' }}><h1>Interview Reports</h1></Link>

      <Link to="/"><button className="btn">Candidates</button></Link>
    </div>
  );
};
