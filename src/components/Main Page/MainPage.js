import './MainPage.css';
import { CardPlaceholder } from '../CardPlaceholder/CardPlaceholder';
import { Card } from '../Card/Card';
import { useState } from 'react';


export const MainPage = (props) => {
  const mainPage = props.mainPage;
  const [search, setSearch] = useState('');

  let placeholderArr = [];
  for (let index = 0; index <= 6; index++) {
    placeholderArr.push(index);
  }
  const filterCandidate = mainPage.filter((item) => {
    if (search.trim() === '') {
      return true;
    } else {
      if (item.name.toUpperCase().includes(search.trim().toUpperCase())) {
        return true;
      }
      return false;
    }
  });

  return (
    <div className="main">
      <div className="candidates">
        <h2>Candidates</h2>
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="candidate-list">
        {mainPage.length === 0 &&
          placeholderArr.map((item, index) => {
            return <CardPlaceholder key={index} />;
          })}
        {mainPage.length > 0 &&
          filterCandidate.map((item, index) => {
            return <Card key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};
