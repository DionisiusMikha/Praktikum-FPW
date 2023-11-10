import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loading from '../assets/load.gif';
import "./home.css";
import ndaklove from '../assets/ndaklove.svg';
import lovebanget from '../assets/lovebanget.svg';

export default function Home({ wishlist, setWishlist }) {
  const [isLoading, setIsLoading] = useState(false);
  const [idNewRelease, setIdNewRelease] = useState(0)

  const [bestData, setBestData] = useState();
  const [newReleaseData, setNewReleaseData] = useState();
  const [metacriticData, setMetacriticData] = useState();
  const [dataNotFound, setDataNotFound] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const best = await axios.get(`https://www.cheapshark.com/api/1.0/deals`, {
        params: {
          storeID: 1,
          pageSize: 5
        }
      });
      const newRelease = await axios.get(`https://www.cheapshark.com/api/1.0/deals`, {
        params: {
          storeID: 1,
          sortBy: "Release",
          pageSize: 5
        }
      });
      const metacritic = await axios.get(`https://www.cheapshark.com/api/1.0/deals`, {
        params: {
          storeID: 1,
          sortBy: "Metacritic",
          pageSize: 5
        }
      });

      setBestData(best.data);
      setNewReleaseData(newRelease.data);
      setMetacriticData(metacritic.data);
      setDataNotFound(
        best.data.length === 0 && newRelease.data.length === 0 && metacritic.data.length === 0
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const dateToString = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }

  const findId = (idToFind) => {
    const temp = wishlist.find(id => id === idToFind);
    return temp !== undefined;
  }

  const removeFromWishlist = (idToRemove) => {
    const newData = wishlist.filter(id => id !== idToRemove);
    setWishlist([...newData]);
  }

  const addToWishlist = (id) => {
    setWishlist([...wishlist, id])
  }

  const next = () => {
    if (idNewRelease === 4) {
      setIdNewRelease(0);
    } else {
      setIdNewRelease(idNewRelease + 1);
    }
  }

  const previous = () => {
    if (idNewRelease === 0) {
      setIdNewRelease(4);
    } else {
      setIdNewRelease(idNewRelease - 1);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

    return (
        <>
        {isLoading && 
        <div className="w-full h-full flex justify-center mt-64 loader">
            <img src={Loading} alt="" srcset="" />
        </div>}
        {!isLoading &&
            <div className="home">
                <div className="div">
                    {newReleaseData &&
                    <div className="new-relase">
                        <img className="w-full bg-indigo-500 opacity-75 rounded-xl" src={newReleaseData[idNewRelease].thumb}/>
                        <div className="overlap" >
                        <button onClick={previous} className="h-full flex justify-start items-center">
                            <svg className="w-full h-full rounded-l-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <h1></h1>
                            </svg>
                        </button>
                        <div onClick={next} className="r cursor-pointer ">
                            <div className="group">
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group">
                                <div className="text-wrapper">
                                    <button onClick={next}>
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">${newReleaseData[idNewRelease].normalPrice}</div>
                        </div>
                        <div className="overlap-2">
                            <div className="text-wrapper-3">{newReleaseData[idNewRelease].title}</div>
                            <div className="text-wrapper-4">Relase On {dateToString(newReleaseData[idNewRelease].releaseDate)}</div>
                        </div>
                        <div className="text-wrapper-5">Now Available</div>
                        <div className="text-wrapper-6">
                        {findId(newReleaseData[idNewRelease].dealID) == true ? (
                                    <button onClick={() => {
                                        removeFromWishlist(newReleaseData[idNewRelease].dealID);
                                    }} className="text-red-400 text-xl hover:underline">- Remove From Wishlist</button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(newReleaseData[idNewRelease].dealID);
                                    }} className="text-blue-400 text-xl hover:underline">+ Add to Wishlist</button>
                                )}
                        </div>
                        </div>
                    </div>
                    }
                    {bestData &&
                    <div className="best-offers">
                        <div className="overlap-3">
                        <div className="price">
                            <div className="price-wrapper">
                            <div className="price-2">${bestData[0].salePrice}</div>
                            </div>
                        </div>
                        <div className="add-on-wrapper">
                            <p className="add-on">release on {dateToString(newReleaseData[idNewRelease].releaseDate)}</p>
                        </div>
                        <div className="text">
                            <div className="title">{bestData[0].title}</div>
                        </div>
                        <div className="title-wrapper">
                            <div className="title">

                            {findId(bestData[0].dealID) == true ? (
                                <button onClick={() => {
                                    removeFromWishlist(bestData[0].dealID);
                                }} className="text-red-400 text-xs hover:underline">- Remove Wishlist</button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(bestData[0].dealID);
                                    }} className="text-blue-400 text-xs hover:underline">+ Add to Wishlist</button>
                                    )}
                            </div>

                        </div>
                        <div className="text-2">
                            <div className="title-2">Limited Time offers</div>
                        </div>
                        <img className="game-image rounded-xl" alt="Game image" src={bestData[0].thumb} />
                        </div>

                        <div className="cyberpunk">
                            <img src={bestData[1].thumb} className="item-game rounded-xl" alt="" />
                        <div className="price-3">
                            <div className="overlap-group-2">
                            <div className="price-4">${bestData[1].salePrice}</div>
                            </div>
                        </div>
                        <div className="title-3">{bestData[1].title}</div>
                        <div className={`discount-wrapper bg-[url('{bestData[0].thumb}')]`}>
                            <div className="discount">
                            <div className="overlap-4">
                                <div className="text-wrapper-8 line-through">${bestData[1].normalPrice}</div>
                            </div>
                            </div>
                        </div>
                        {findId(bestData[1].dealID) == true ? (
                                <button onClick={() => {
                                    removeFromWishlist(bestData[1].dealID);
                                }} className="">
                                    <img
                                        className="streamline-interface"
                                        alt="Streamline interface"
                                        src={lovebanget}
                                    />
                                </button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(bestData[1].dealID);
                                    }} className="">
                                        <img
                                            className="streamline-interface text-white"
                                            alt="Streamline interface"
                                            src={ndaklove}
                                        />
                                </button>
                        )}
                        
                        </div>
                        <div className="cyberpunk-2">
                        <img src={bestData[2].thumb} className="item-game rounded-xl" alt="" />
                        <div className="price-3">
                            <div className="overlap-group-2">
                            <div className="price-4">${bestData[2].salePrice}</div>
                            </div>
                        </div>
                        <div className="title-3">{bestData[2].title}</div>
                        <div className="overlap-5">
                            <div className="discount">
                            <div className="overlap-4">
                                <div className="text-wrapper-8 line-through">${bestData[2].normalPrice}</div>
                            </div>
                            </div>
                        </div>
                        <button>
                            {findId(bestData[2].dealID) == true ? (
                                <button onClick={() => {
                                    removeFromWishlist(bestData[2].dealID);
                                }} className="">
                                    <img
                                        className="streamline-interface"
                                        alt="Streamline interface"
                                        src={lovebanget}
                                    />
                                </button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(bestData[2].dealID);
                                    }} className="">
                                        <img
                                            className="streamline-interface text-white"
                                            alt="Streamline interface"
                                            src={ndaklove}
                                        />
                                </button>
                        )}
                        </button>
                        </div>
                        <div className="cyberpunk-3">
                        <img src={bestData[3].thumb} className="item-game rounded-xl" alt="" />
                        <div className="price-3">
                            <div className="overlap-group-2">
                            <div className="price-4">${bestData[3].salePrice}</div>
                            </div>
                        </div>
                        <div className="title-3">{bestData[3].title}</div>
                        <div className="overlap-6">
                            <div className="discount">
                            <div className="overlap-4">
                                <div className="text-wrapper-8 line-through">${bestData[3].normalPrice}</div>
                            </div>
                            </div>
                        </div>
                        <button>
                            {findId(bestData[3].dealID) == true ? (
                                <button onClick={() => {
                                    removeFromWishlist(bestData[3].dealID);
                                }} className="">
                                    <img
                                        className="streamline-interface"
                                        alt="Streamline interface"
                                        src={lovebanget}
                                    />
                                </button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(bestData[3].dealID);
                                    }} className="">
                                        <img
                                            className="streamline-interface text-white"
                                            alt="Streamline interface"
                                            src={ndaklove}
                                        />
                                </button>
                        )}
                        </button>
                        </div>
                        <div className="cyberpunk-4">
                        <img src={bestData[4].thumb} className="item-game rounded-xl" alt="" />
                        <div className="price-3">
                            <div className="overlap-group-2">
                            <div className="price-4">${bestData[4].salePrice}</div>
                            </div>
                        </div>
                        <div className="title-3">{bestData[4].title}</div>
                        <div className="overlap-7">
                            <div className="discount">
                            <div className="overlap-4">
                                <div className="text-wrapper-8 line-through">${bestData[4].normalPrice}</div>
                            </div>
                            </div>
                        </div>
                        <button>
                            {findId(bestData[4].dealID) == true ? (
                                <button onClick={() => {
                                    removeFromWishlist(bestData[4].dealID);
                                }} className="">
                                    <img
                                        className="streamline-interface"
                                        alt="Streamline interface"
                                        src={lovebanget}
                                    />
                                </button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(bestData[4].dealID);
                                    }} className="">
                                        <img
                                            className="streamline-interface text-white"
                                            alt="Streamline interface"
                                            src={ndaklove}
                                        />
                                </button>
                        )}
                        </button>
                        </div>
                        
                        <div className="text-wrapper-7">Best Offers</div>
                    </div>
                    }
                    {metacriticData &&
                    <div className="best-metacritic">
                        <div className="overlap-8">
                        <div className="price">
                            <div className="price-wrapper">
                            <div className="price-2">${metacriticData[0].normalPrice}</div>
                            </div>
                        </div>
                        <div className="text-3">
                            <div className="title">{metacriticData[0].title}</div>
                        </div>
                        <div className="title-wrapper">
                            <div className="title">
                            {findId(metacriticData[0].dealID) == true ? (
                                    <button onClick={() => {
                                        removeFromWishlist(metacriticData[0].dealID);
                                    }} className="text-red-400 text-xs hover:underline">- Remove Wishlist</button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(metacriticData[0].dealID);
                                    }} className="text-blue-400 text-xs hover:underline">+ Add to Wishlist</button>
                            )}
                            </div>
                        </div>
                        <div className="text-4">
                            <div className="title-2">Score : {metacriticData[0].metacriticScore}</div>
                        </div>
                        <img className="game-image rounded-xl" alt="Game image" src={metacriticData[0].thumb} />
                        </div>

                        
                        <div className="cyberpunk-5">
                        <img src={metacriticData[3].thumb} className="item-game rounded-xl" alt="" />
                        <div className="price-3">
                            <div className="overlap-group-2">
                            <div className="price-4">${metacriticData[3].salePrice}</div>
                            </div>
                        </div>
                        <div className="title-3">{metacriticData[3].title}</div>
                        <div className="overlap-9">
                            <div className="discount">
                            </div>
                        </div>
                        <button>
                            {findId(metacriticData[3].dealID) == true ? (
                                <button onClick={() => {
                                    removeFromWishlist(metacriticData[3].dealID);
                                }} className="">
                                    <img
                                        className="streamline-interface"
                                        alt="Streamline interface"
                                        src={lovebanget}
                                    />
                                </button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(metacriticData[3].dealID);
                                    }} className="">
                                        <img
                                            className="streamline-interface text-white"
                                            alt="Streamline interface"
                                            src={ndaklove}
                                        />
                                </button>
                        )}
                        </button>
                        </div>
                        <div className="cyberpunk-6">
                        <img src={metacriticData[2].thumb} className="item-game rounded-xl" alt="" />
                        <div className="price-3">
                            <div className="overlap-group-2">
                            <div className="price-4">${metacriticData[2].normalPrice}</div>
                            </div>
                        </div>
                        <div className="title-3">{metacriticData[2].title}</div>
                        <div className="overlap-10">
                            <div className="discount">
                            </div>
                        </div>
                        <button>
                            {findId(metacriticData[2].dealID) == true ? (
                                <button onClick={() => {
                                    removeFromWishlist(metacriticData[2].dealID);
                                }} className="">
                                    <img
                                        className="streamline-interface"
                                        alt="Streamline interface"
                                        src={lovebanget}
                                    />
                                </button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(metacriticData[2].dealID);
                                    }} className="">
                                        <img
                                            className="streamline-interface text-white"
                                            alt="Streamline interface"
                                            src={ndaklove}
                                        />
                                </button>
                        )}
                        </button>
                        </div>                           
                        <div className="cyberpunk-7">
                        <img src={metacriticData[1].thumb} className="item-game rounded-xl" alt="" />
                        <div className="price-3">
                            <div className="overlap-group-2">
                            <div className="price-4">${metacriticData[1].normalPrice}</div>
                            </div>
                        </div>
                        <div className="title-3">{metacriticData[1].title}</div>
                        <div className="overlap-11">
                            <div className="discount">
                            </div>
                        </div>
                        <button>
                            {findId(metacriticData[1].dealID) == true ? (
                                <button onClick={() => {
                                    removeFromWishlist(metacriticData[1].dealID);
                                }} className="">
                                    <img
                                        className="streamline-interface"
                                        alt="Streamline interface"
                                        src={lovebanget}
                                    />
                                </button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(metacriticData[1].dealID);
                                    }} className="">
                                        <img
                                            className="streamline-interface text-white"
                                            alt="Streamline interface"
                                            src={ndaklove}
                                        />
                                </button>
                        )}
                        </button>
                        </div>
                        <div className="cyberpunk-8">
                        <img src={metacriticData[4].thumb} className="item-game rounded-xl" alt="" />
                        <div className="price-3">
                            <div className="overlap-group-2">
                            <div className="price-4">${metacriticData[4].normalPrice}</div>
                            </div>
                        </div>
                        <div className="title-3">{metacriticData[4].title}</div>
                        <div className="overlap-12">
                            <div className="discount">
                            </div>
                        </div>
                        <button>
                            {findId(metacriticData[4].dealID) == true ? (
                                <button onClick={() => {
                                    removeFromWishlist(metacriticData[4].dealID);
                                }} className="">
                                    <img
                                        className="streamline-interface"
                                        alt="Streamline interface"
                                        src={lovebanget}
                                    />
                                </button>
                                ) : (
                                    <button onClick={() => {
                                        addToWishlist(metacriticData[4].dealID);
                                    }} className="">
                                        <img
                                            className="streamline-interface text-white"
                                            alt="Streamline interface"
                                            src={ndaklove}
                                        />
                                </button>
                        )}
                        </button>
                        </div>
                        <div className="text-wrapper-7">Best Metacritic Score</div>
                    </div>
                    }
                    {dataNotFound &&
                        <div className="text-red-500">Data not found.</div>
                    }
                </div>
            </div>
        }
        </>
    )
}