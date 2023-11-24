import { useLoaderData,NavLink,  Form } from "react-router-dom";
import { useForm } from 'react-hook-form';
export default function Overview() {
    const data = useLoaderData();

    const { register } = useForm({
        values: {
            judul: data?.judul
        }
    });

    return (
        <>
        <div className="bg-[#0571e133] flex flex-row justify-center w-full overflow-y-hidden">
        <div className="bg-[#0571e133] w-[1920px] h-[1080px]">
            <div className="relative w-[1029px] h-[656px] top-[147px] left-[445px] bg-white rounded-[20px] overflow-hidden">

            <Form action={`/home/stories/${data.id}/overview`} method="PATCH">
                <div className="w-[325px] items-start top-[21px] left-[361px] flex flex-col justify-center gap-[10px] px-[26px] py-[18px] absolute bg-white rounded-[30px] border border-solid border-[#eeeeee]">
                    <div className="w-full mr-[-8.00px] relative h-[35px]">
                    <div className="absolute w-[261px] h-[35px] top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-bold text-black text-[14px] text-center tracking-[0] leading-[normal]">
                        <input
                        className="h-[35px] border-[none] [background:none] [font-family:'Poppins-Regular',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal] p-0 pl-0"
                        placeholder={data.judul}
                        type="text"
                        {...register("judul")}
                        />
                    </div>
                    </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[30px] py-[8px] absolute top-[55px] left-[135px] bg-[#0575e6] rounded-[30px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
                    <button type="submit">Edit</button>
                    </div>
                </div>
            </Form>
            <div className="absolute w-[760px] h-[315px] top-[103px] left-[135px] rounded-[10px]" >
                <img className="w-full h-full" src={data.thumb} alt="" />
            </div>
            <Form action={`/home/stories/${data.id}/overview`} method="PUT">
                <div className="w-[760px] items-center top-[450px] left-[135px] flex flex-col justify-center gap-[10px] px-[26px] py-[18px] absolute bg-white rounded-[30px] border border-solid border-[#eeeeee]">
                    <input
                    className="w-[701.5px] relative h-[35px] border-[none] [background:none] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[14px] text-center tracking-[0] leading-[normal] p-0 pl-0"
                    placeholder="url Image"
                    type="text"
                    {...register("thumb")}
                    />
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[30px] py-[8px] absolute top-[540px] left-[432px] bg-[#0575e6] rounded-[30px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-[normal]">
                        <button>Change Image</button>
                    </div>
                </div>
            </Form>
            <div className="inline-flex items-center justify-center gap-[10px] px-[30px] py-[8px] absolute top-[603px] left-[847px] bg-[#c93939] rounded-[30px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
                    <Form action={`/home/stories/${data.id}/overview`} method="DELETE">
                        <button>Delete</button>
                    </Form>                 
                </div>
            </div>               
            <div className="inline-flex items-center justify-center gap-[10px] px-[30px] py-[8px] absolute top-[603px] left-[130px] bg-[#39c93e] rounded-[30px]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
                    <NavLink to='/home/stories'>Cancel</NavLink>             
                </div>
            </div>               
            </div>
        </div>
        </div>
        </>
    )
}