import './App.css';
import { useState, useEffect } from 'react';

const URL = 'https://api.jokes.one/jod'

function App() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(
        (response) => {
         const joke = response.contents.jokes[0].joke; 
          setTitle(joke.title);
          setText(joke.text);
        }, (error) => {
          alert(error);
        }
      )

  }, []);

  return (
    <div style={{ margin: 50 }}>
      <h1>Joke of the day</h1>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;
