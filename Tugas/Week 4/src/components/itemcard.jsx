import React from 'react';

function ItemCard({ item, formatDate, isInWishlist, removeFromWishlist, addToWishlist }) {
  return (
    <div className="item">
      <div className="frame-2">
        <div className="overlap-group">
          {isInWishlist(item.dealID) ? (
            <button onClick={() => removeFromWishlist(item.dealID)} className="text-wrapper">❤️</button>
          ) : (
            <button onClick={() => addToWishlist(item.dealID)} className="text-wrapper">🖤</button>
          )}
        </div>
        <div className="element-wrapper">
          <img className="element" alt="Element" src={item.thumb} />
        </div>
        <div className="release-on-jadwal">Release on {formatDate(item.releaseDate)}</div>
        <div className="metacriticdata">
          <p className="line-through text-gray-400">{item.normalPrice}</p>
          <p className="salePrice text-neutral-950">{item.salePrice}</p>
        </div>
        <div className="metacriticdata-title">
          {item.title} - Score: {item.metacriticScore}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
