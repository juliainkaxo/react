import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export default function App() {
  const [respons, setRespons] = useState("");
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {

    axios.get(URL)
      .then((response) => {
        console.log("haloja sisäl ollaan")
        setRespons(response.data.drinks[0])
      }).catch(error => {
        alert(error)
        console.log('erroriiiiiiiiiiiiiiiii')
      })
  }, [])

  return (
    <div>
      <h1>Coctail search</h1>
      <p className='juomaotsikko'>{respons.strDrink}</p>
      <p>{respons.strMeasure1} {respons.strIngredient1}</p>
      <p>{respons.strMeasure2} {respons.strIngredient2}</p>
      <p>{respons.strMeasure3} {respons.strIngredient3}</p>
      <p>{respons.strMeasure4} {respons.strIngredient4}</p>
      <p>{respons.strMeasure5} {respons.strIngredient5}</p>
      <p>{respons.strMeasure6} {respons.strIngredient6}</p>
      <p>{respons.strMeasure7} {respons.strIngredient7}</p>
      <p>{respons.strMeasure8} {respons.strIngredient8}</p>
      <p>{respons.strMeasure9} {respons.strIngredient9}</p>
      <p>{respons.strMeasure10} {respons.strIngredient10}</p>
      <p>{respons.strMeasure11} {respons.strIngrediens11}</p>
      <p>{respons.strMeasure12} {respons.strIngredient12}</p>
      <p>{respons.strMeasure13} {respons.strIngredient13}</p>
      <p>{respons.strMeasure14} {respons.strIngredient14}</p>
      <p>{respons.strMeasure15} {respons.strIngredient15}</p>
      <p className='selitys'>{respons.strInstructions}</p>
      <form>
        <button>Change recipe</button>
      </form>

      <ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
        </>
      </ThemeProvider>
    </div>
  );
}