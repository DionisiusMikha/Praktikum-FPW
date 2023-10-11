function navbar() {
    return(
        <>
      <nav className='navbar bg-light text-white'>
        <div className='container'>
          <a href="#" className='navbar-brand'>
            <img src="logo.png" alt="" />
          </a>
          <ul className='navbar-nav'>
              <li className='nav-item'>
                <a href="#" aria-current="page" className='nav-link'>Home</a>
              </li>
              <li className='nav-item'>
                <a href="#" className='nav-link'>Brand</a>
              </li>
              <li className='nav-item'>
                <a href="#" className='nav-link'>Product</a>
              </li>
              <li className='nav-item'>
                <a href="#" className='nav-link'>news</a>
              </li>
              <li className='nav-item'>
                <a href="#" className='nav-link'>franchise</a>
              </li>
              <li className='nav-item'>
                <a href="#" className='nav-link'>contact</a>
              </li>
            </ul>
          <div className='collapse navbar-collapse' id='navbarNav'>
          </div>
        </div>
      </nav>
        </>
    )
}

export default navbar