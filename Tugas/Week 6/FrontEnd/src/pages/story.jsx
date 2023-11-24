import { useLoaderData, Link, Form } from "react-router-dom"
import Navbar from "./components/navbar"

export default function StoryDefault() {
    const data = useLoaderData();

    return (
        <>
        <Navbar className="fixed"/>
        <div className="bg-[#0571e133] flex flex-row justify-center w-full">
        <div className="bg-[#0571e133] w-[1920px] h-[1080px] relative">
            <div className="absolute w-[1440px] h-[740px] top-[300px] left-[240px] overflow-hidden overflow-y-scroll">
            <div className="flex flex-col w-[1440px] h-[904px] items-center gap-[10px] relative">
            {data.map(item => (
                <Link key={item.id} className="relative w-[1434px] h-[174px]" to={`${item.id}/overview`}>
                <div className="relative w-[1437px] h-[174px] bg-white rounded-[20px]">
                    <div className="absolute w-[200px] h-[132px] top-[21px] left-[24px]">
                    <img className="absolute w-[199px] h-[132px] top-0 left-0" alt="Element" src={item.thumb} />
                    </div>
                    <div className="absolute top-[69px] left-[521px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-black text-[25.4px] tracking-[0] leading-[normal]">
                        {item.judul}
                    </div>
                    <div className="absolute top-[120px] left-[1280px] [font-family:'Satoshi-Bold',Helvetica] text-black text-[25.4px] tracking-[0] leading-[normal]">
                        click to edit
                    </div>
                </div>
                </Link>
            ))}
            </div>
            </div>
            <div className="absolute w-[517px] h-[57px] gap-[10px] px-[30px] py-[8px] top-[174px] left-[701px] bg-[#0575e6] rounded-[30px]">
            <div className="relative w-fit left-1/3 [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0] leading-[normal]">
            <Form action="/home/stories" method="POST">
                <button type="submit">
                    <h1 className="text-2xl text-whte">Add New Story</h1>
                </button>
            </Form>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}