import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [quote, setQuote] = useState([]);

  const [genre, setGenre] = useState([]);
  const [author, setAuthor] = useState([]);

  const getRandomQuotes = async () => {
    try {
      // author: string(required);
      // genre: string(required);
      // count: number(required);
      const response = await axios.get(
        "https://quote-garden.onrender.com/api/v3/quotes/random"
      );
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  const getQuotes = async () => {
    try {
      const response = await axios.get(
        " https://quote-garden.onrender.com/api/v3/quotes?limit=2"
      );

      console.log(response.data.data[2]);
      setQuote(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getGenre = async () => {
    try {
      const response = await axios.get(
        " https://quote-garden.onrender.com/api/v3/genres"
      );

      console.log(response.data.data);
      setGenre(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAuthors = async () => {
    try {
      const response = await axios.get(
        " https://quote-garden.onrender.com/api/v3/authors"
      );

      console.log(response.data.data);
      setAuthor(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    // delete from state
    const newQuotes = quote.filter((item) => item._id !== id);
    setQuote(newQuotes);
  };

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      getQuotes();
      getGenre();
      getAuthors();
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
    <h1>favorite</h1>
    </>
  );
}

export default App;
