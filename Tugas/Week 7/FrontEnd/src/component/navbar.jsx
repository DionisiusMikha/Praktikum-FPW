import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
        <div className="w-[1920px] h-[98px] bg-white">
        <div className="absolute top-[18px] left-[53px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
            bolasepak
        </div>
        <div className="flex w-[514px] items-center justify-center gap-[47.59px] absolute top-[29px] left-[1351px]">
            <div className="relative w-[62px] h-[31px]">
            <div className="absolute h-[31px] top-0 left-0 [font-family:'Cabin-Bold',Helvetica] font-bold text-neutral-700 text-[25.4px] tracking-[0] leading-[normal] underline">
                <NavLink>Home</NavLink>
            </div>
            </div>
            <div className="relative w-fit mt-[-0.79px] [font-family:'Cabin-Medium',Helvetica] font-medium text-neutral-700 text-[25.4px] tracking-[0] leading-[normal]">
                <NavLink>Player</NavLink>
            </div>
            <div className="relative w-fit mt-[-0.79px] [font-family:'Cabin-Medium',Helvetica] font-medium text-neutral-700 text-[25.4px] text-center tracking-[0] leading-[normal]">
                <NavLink>Match</NavLink>
            </div>
        </div>
        </div>
        </>
    )
}