import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../app/WishlistSlice';
import axios from 'axios';
import logo from '../assets/logo.png';

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dateToString = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  };

  const fetch = async () => {
    setIsLoading(true);
    const temp_array = [];
    for (let i = 0; i < wishlist.length; i++) {
      try {
        const temp = await axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${wishlist[i]}`);
        const data = {
          dealID: wishlist[i],
          title: temp.data.gameInfo.name,
          thumb: temp.data.gameInfo.thumb,
          releaseDate: temp.data.gameInfo.releaseDate,
        };
        temp_array.push(data);
      } catch (error) {
        console.error(`Error fetching data for dealID ${wishlist[i]}`, error);
      }
    }
    setList([...temp_array]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [wishlist]);

  return (
    <>
      <div className="">
        {isLoading && (
          <div className="w-full h-full flex justify-center mt-64 loader">
            <img src={isLoading} alt="" />
          </div>
        )}
        {!isLoading && list.length > 0 ? (
          <div className="bg-[#f0eeee] flex flex-row justify-center w-full h-full">
            <div className="bg-[#f0eeee] w-[1920px] h-[2448px]">
              <div className="relative w-[1440px] top-[40px] left-[240px]">
                {list &&
                  list.map((item, idx) => (
                    <div className="flex flex-col w-[1440px] items-center gap-[50px] relative" key={idx}>
                      <div className="relative w-[1434px] h-[200px]">
                        <div className="relative w-[1437px] h-[174px] bg-white rounded-[20px]">
                          <div className="absolute w-[121px] h-[74px] top-[65px] left-[1275px] bg-blue-300 rounded-[82px]">
                            <div className="text-black absolute top-[21px] left-[45px] [font-family:'Inter-Bold',Helvetica] font-bold text-[24px] tracking-[0] leading-[normal]">
                              <button onClick={() => dispatch(removeFromWishlist(item.dealID))}>🖤</button>
                            </div>
                          </div>
                          <div className="absolute w-[200px] h-[132px] top-[21px] left-[24px]">
                            <img className="absolute w-[199px] h-[132px] top-0 left-0" alt="Element" src={item.thumb} />
                          </div>
                          <div className="absolute w-[513px] top-[113px] left-[254px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                            Release on {dateToString(item.releaseDate)}
                          </div>
                          <div className="top-[40px] absolute left-[254px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[25.4px] tracking-[0] leading-[normal]">
                            {item.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : !isLoading && list.length === 0 ? (
          <div className="flex flex-row justify-center w-full">
            <div className="w-[1920px] h-[2448px] relative">
              <div className="absolute top-[100px] w-full left-[780px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[30px] tracking-[0] leading-[normal]">
                Tambah Wishlist Dulu gan
              </div>
              <img
                className="absolute w-[1000px] h-[500px] top-[200px] left-[460px] object-cover"
                alt="Logo"
                src={logo}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default Wishlist;