import {useEffect, useState} from "react";
import './ChuckJokes.css';
import ChucksJokesCard from "../../components/ChucksJokesCard/ChucksJokesCard";

const url = 'https://api.chucknorris.io/jokes/random';

const ChucksJokes = () => {
  const [jokes, setJokes] = useState('');

  useEffect(() => {
    void fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const joke = await response.json();
      setJokes(joke.value);
    }
  };

  return (
    <>
      <div className='main-chuck'>
        <ChucksJokesCard value={jokes}/>
        <button onClick={fetchData}>Generate a new joke of Chuck Norris</button>
      </div>
    </>
  );
};

export default ChucksJokes;