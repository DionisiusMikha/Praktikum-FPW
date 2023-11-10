import { useState, useEffect } from "react";

import Navbar from './components/navbar.jsx';
import Home from './components/home';
import Catalog from './components/catalog';
import Wishlist from './components/wishlist';

export default function App() {
    const [wishlist, setWishlist] = useState([]);
    const [route, setRoute] = useState("home");

    return (
        <div>
            <Navbar route={route} setRoute={setRoute}/>
            {route === "home" && <Home wishlist={wishlist} setWishlist={setWishlist}/>}
            {route === "catalog" && <Catalog wishlist={wishlist} setWishlist={setWishlist}/>}
            {route === "wishlist" && <Wishlist wishlist={wishlist} setWishlist={setWishlist}/>}
        </div>
    );
}
