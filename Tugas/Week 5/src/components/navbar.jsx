import logo from '../assets/logo.png';

export default function Navbar({route, setRoute}) {

  const home = () => {
    setRoute("home")
  }

  const catalog = () => {
      setRoute("catalog")
  }

  const wishlist = () => {
      setRoute("wishlist")
  }

  return(
    <>
    <div className="relative w-[1920px] h-[168px] bg-white rounded-[0px_0px_20px_20px]">
      <button onClick={home}>
      <img 
        className="absolute w-[336px] h-[168px] top-0 left-[85px] object-cover mouse-pointer"
        alt="Logo lebar"
        src={logo}
      />
      </button>
      <div className="inline-flex items-center gap-[47.59px] absolute top-[64px] left-[471px]">
        <div className="relative w-[73px] h-[34px]">
          <div className="absolute h-[px] top-0 left-0 [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutral-700 text-[25.4px] tracking-[0] leading-[normal]">
            <button onClick={home} className='hover:underline'>Home</button>
          </div>
        </div>
        <div className="relative w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutral-700 text-[25.4px] tracking-[0] leading-[normal]">
          <button onClick={catalog} className='hover:underline'>Catalog</button>
        </div>
        <div className="relative w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-neutral-700 text-[25.4px] tracking-[0] leading-[normal]">
          <button onClick={wishlist} className='hover:underline'>Wishlist</button>
        </div>
      </div>
    </div>
    </>
  )
}