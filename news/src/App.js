import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import Detail from './Detail';

const URL = 'https://newsapi.org/v2';
const APIKEY = 'd825eb8ee4b045b5885cb0be96f7e232';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const criteria = 'top-headlines?country=us&category=business';
    const address = URL + '/' + criteria + '&apikey=' + APIKEY;

    axios.get(address)
    .then((response) => {
      setError(null);
      setIsLoaded(true);
      setItems(response.data.articles);
    }).catch(error => {
      alert(error);
    })

}, []);

function close() {
  setSelectedItem(null);
}
  if (selectedItem != null) {
    return <Detail
    title={selectedItem.title}
    image={selectedItem.urlToImage}
    description={selectedItem.description}
    close={close}
    />;
  }
  else if (error) {
    return <p>{error.message}</p>;
  }
  else if (!isLoaded) {
    return <p>Loading...</p>;
  }
  else {
    return (
      <div>
        {items.map(item => (
          <div key={item.title} onClick={e => setSelectedItem(item)}>
            <h3>{item.title}</h3>
            <img src={item.urlToImage}></img>
            <p>{item.description}</p>
            </div>
        ))}
      </div>
    );
  }
}
export default App;
