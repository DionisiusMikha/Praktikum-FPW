import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./catalog.css";
import rightArrow from "../assets/next.svg";
import leftArrow from "../assets/previous.png";
import Loading from '../assets/load.gif';
import Error from '../assets/error.gif';

import ItemCard from "./itemcard.jsx";

function Catalog({ wishlist, setWishlist }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [dataNotFound, setDataNotFound] = useState(false);

  const onSubmit = data => {
    setCurrentPage(0);
    setSearchTerm(data.search);
  }

  const isInWishlist = (idToFind) => {
    return wishlist.includes(idToFind);
  }

  const removeFromWishlist = (idToRemove) => {
    const updatedWishlist = wishlist.filter(id => id !== idToRemove);
    setWishlist(updatedWishlist);
  }

  const addToWishlist = (id) => {
    setWishlist([...wishlist, id]);
  }

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.cheapshark.com/api/1.0/deals`, {
        params: {
          pageNumber: currentPage,
          title: searchTerm,
          pageSize: 10,
          storeID: 1
        }
      });
      setItems(response.data);
      setDataNotFound(response.data.length === 0);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const goToNextPage = () => {
    if (currentPage + 1 <= 558) {
      setCurrentPage(currentPage + 1);
    }
  }

  const goToPreviousPage = () => {
    if (currentPage - 1 >= 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [searchTerm, currentPage]);

  return (
    <>
      {loading &&
        <div className="w-full h-full flex justify-center mt-64 loader">
          <img src={loading} alt="" />
        </div>}
      {!loading &&
        <div className="catalog">
          <div className="div">
            <div className="frame-wrapper">
              <div className="frame">
                {dataNotFound ? (
                  <h1>Data not found
                    <img src={Error} alt="" srcset="" />
                  </h1>
                ) : (
                  items && items.map((item, index) => (
                    <ItemCard
                      key={index}
                      item={item}
                      formatDate={formatDate}
                      isInWishlist={isInWishlist}
                      removeFromWishlist={removeFromWishlist}
                      addToWishlist={addToWishlist}
                    />
                  ))
                )}
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="search">
              <div className="search-bar">
                <input
                  type="text"
                  {...register('search')}
                  className="w-full h-full rounded-md border-0 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="    Search"
                />
              </div>
              <button className="bg-gray-900 text-white rounded-md px-2 py-1.5 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type='submit'>
                Search
              </button>
            </form>
            <div className="frame-3">
              <div className='w-full h-10 flex justify-center items-center mt-6'>
                <button onClick={goToPreviousPage} className='bg-slate-300 h-full w-8 rounded-l-lg opacity-50 hover:opacity-25'>
                  <img src={leftArrow} alt="" />
                </button>
                <h1 className='bg-slate-300 w-8 h-full text-lg text-center opacity-50'>{currentPage + 1}</h1>
                <button onClick={goToNextPage} className='bg-slate-300 h-full w-8 rounded-r-lg opacity-50 hover:opacity-25'>
                  <img src={rightArrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      } 
    </>
  )
}

export default Catalog;
