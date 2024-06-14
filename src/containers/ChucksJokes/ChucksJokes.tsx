import {useEffect, useState} from "react";
import './ChuckJokes.css';
import ChucksJokesCard from "../../components/ChucksJokesCard/ChucksJokesCard";

const url = 'https://api.chucknorris.io/jokes/random';

const ChucksJokes = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (response.ok) {
        const joke = await response.json();
        setJokes(joke);
      }
    };

    void fetchData();
  }, [])

  return (
    <>
      <div className='main-chuck'>
          <ChucksJokesCard value='Hello World' />
        <button>Generate new joke of Chuck Norris</button>
      </div>
    </>
  );
};

export default ChucksJokes;