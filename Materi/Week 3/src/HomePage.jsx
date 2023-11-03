import { useEffect, useState } from "react";
import HomePage from './HomePage'
import Catalog from './catalog'

import axios from "axios";

function App() {
  const [isHome, setIsHome] = useState(true)

  const handleNavbarClick = (page) => {
    page == 'home' ? setIsHome(true) : setIsHome(false)
  }
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

  async function getQuote() {
    const result = await axios.get(
      "https://quote-garden.onrender.com/api/v3/quotes",
      {
        params: {
          limit: 50,
        },
      }
    );
    setQuote(result.data.data);
    console.log(result.data.data);
  }

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

  const handlefav = async (id) => {
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
      <div className="container">
        <h1>Quote garden</h1>
        <navbar>
          <span onClick={ () => {setIsHome(true)} }> Home </span>
          <span onClick={ () => handleNavbarClick('second') }> Catalog </span>
        </navbar>
        <br />
        <br />
        <h2>Random Quotes For You</h2>
        <div className="quote">
          <p>{quote.quoteText}</p>
          <p>{quote.quoteAuthor}</p>
        </div>
        <button onClick={getQuotes}>Get Random Quote</button>
      </div>
      {/* table */}
      <table border={1}>
        <tbody>
          {quote.map((item) => (
            <tr key={item._id}>
                <i>{item.quoteText}</i>
                <br />
                <br />
                {item.quoteAuthor}
                <br />
                <br />
                <a onClick={() => {
                    handlefav(item._id);
                  }}><u>add to favorite</u></a>
            </tr>
            
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <h1>Catalog</h1>
      <table border={1}>
        <tbody>
          {quote.map((item) => (
            <tr key={item._id}>
                <i>{item.quoteText}</i>
                <br />
                <br />
                {item.quoteAuthor}
                <br />
                <br />
                <a onClick={() => {
                    handlefav(item._id);
                  }}><u>add to favorite</u></a>
            </tr>
            
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
