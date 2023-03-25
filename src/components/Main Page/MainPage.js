import './MainPage.css';
import { CardPlaceholder } from '../CardPlaceholder/CardPlaceholder';
import { Card } from '../Card/Card';


export const MainPage = (props) => {
  const mainPage = props.mainPage;

  let placeholderArr = [];
  for (let index = 0; index <= 6; index++) {
    placeholderArr.push(index);
  }
  return (
    <div className='main'>

      <div className='candidates'>
        <h2>Candidates</h2>
        <input type='text' placeholder='Search...'></input>
      </div>
      <div className="candidate-list">
        {
          mainPage.length === 0 &&
          placeholderArr.map((item, index) => {
            return (<CardPlaceholder key={index} />);
          })
        }
        {
          mainPage.length > 0 &&
          mainPage.map((item, index) => {
            return (
              
              <Card key={item.id} item={item} />

            );
          })
        }
      </div>



    </div>
  )
}