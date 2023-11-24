import { useForm } from 'react-hook-form'
import { joiResolver } from "@hookform/resolvers/joi"
import { Link } from "react-router-dom";
import { useState } from 'react';
import Joi from 'joi';

import handler from '../handler';

export default function Login() {
    const [isError, setIsError] = useState(false);
    const [response, setResponse] = useState();

    const schema = Joi.object({
        email: Joi.string().required().messages({
            "string.empty":"Email tidak boleh kosong",
        }),
        password: Joi.string().required().messages({
            "string.empty":"Password tidak boleh kosong",
        }),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: joiResolver(schema)
    });

    const submit = async data => {
        const res = await handler.login(data);
        setResponse({...res});
        if(res.status >= 400 && res.status < 500){
            setIsError(true);
        }
    }

    return (
        <>
            {isError && response && 
            <div className='w-screen h-screen absolute flex justify-center items-center'>
                <div className='w-3/12 h-1/6 bg-white rounded-lg flex flex-col items-center'>
                    <button onClick={() => {
                        setIsError(false);
                    }} className='w-full text-lg text-end pe-2 pt-1'>✖️</button>
                    <p className='text-xl font-bold pt-3'>{response.status}</p>
                    <p className='text-red-500'>{response.message}</p>
                </div>
            </div>}
            <div className="bg-[#0571e133] flex flex-row justify-center w-full">
            <div className="bg-[#0571e133] w-[1920px] h-[1080px] relative">
            <div className="relative w-[1328px] h-[756px] left-[240px] top-[180px] bg-[#ffffff] rounded-[20px] overflow-hidden">
            <div className="absolute w-[860px] h-[756px] top-0 left-0">
                <div className="relative w-[1067px] h-[1203px] left-[-207px]">
                <div className="relative h-[1203px]">
                    <div className="absolute w-[860px] h-[900px] top-0 left-[207px] [background:linear-gradient(180deg,rgb(5,117,230)_0%,rgb(2.46,40.69,137.58)_84.79%,rgb(2,27,121)_100%)]" />
                    <div className="absolute w-[638px] h-[583px] top-[620px] left-0">
                    <div className="relative h-[583px]">
                        <div className="top-[26px] left-[81px] absolute w-[557px] h-[557px] rounded-[278.5px] border border-solid border-[#0575e6]" />
                        <div className="top-0 left-0 absolute w-[557px] h-[557px] rounded-[278.5px] border border-solid border-[#0575e6]" />
                    </div>
                    </div>
                    <div className="absolute w-[362px] h-[147px] top-[371px] left-[364px]">
                    <div className="inline-flex flex-col items-start gap-[23px] relative">
                        <div className="relative w-[366px] h-[87px] mr-[-4.00px]">
                        <div className="absolute top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
                            Story.io
                        </div>
                        <p className="absolute top-[60px] left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
                            Share your story and keep for yourself :)
                        </p>
                        </div>
                        <div className="inline-flex items-center justify-center gap-[10px] px-[30px] py-[8px] relative flex-[0_0_auto] bg-[#0575e6] rounded-[30px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-[14px] tracking-[0] leading-[normal]">
                        <Link className='hover:opacity-50 text-sm' to={`/register`}>Don't have an account? Register Now</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="absolute w-[307px] h-[318px] top-[272px] left-[898px]">
                <div className="absolute w-[167px] h-[69px] top-0 left-0">
                <div className="absolute top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#333333] text-[26px] tracking-[0] leading-[normal]">
                    Hello Again!
                </div>
                <div className="absolute top-[42px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#333333] text-[18px] tracking-[0] leading-[normal]">
                    Welcome Back
                </div>
                </div>

                <form onSubmit={handleSubmit(submit)}>
                    <button className="flex flex-col w-[307px] items-center justify-center gap-[10px] px-[26px] py-[18px] absolute top-[261px] left-0 bg-[#0575e6] rounded-[30px] all-[unset] box-border">
                    <div className="relative w-[39px] h-[21px]">
                        <button type='submit' className="absolute top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-[14px] tracking-[0] leading-[normal]">Login</button>
                    </div>
                    </button>
                    <div className="flex flex-col w-[307px] items-start justify-center gap-[10px] px-[26px] py-[18px] absolute top-[185px] left-0 bg-[#ffffff] rounded-[30px] border border-solid border-[#eeeeee]">
                    <div className="relative w-[133px] h-[24px]">
                        <input type="password" placeholder={`${errors.password ? errors?.password?.message : "Password" }`} className={`${errors.password ? "placeholder-red-500" : ""}`} {...register("password")}/>
                    </div>
                    </div>
                    <div className="flex flex-col w-[307px] items-start justify-center gap-[10px] px-[26px] py-[18px] absolute top-[109px] left-0 bg-[#ffffff] rounded-[30px] border border-solid border-[#eeeeee]">
                    <div className="relative w-[133px] h-[24px]">
                        <input type="email" placeholder={`${errors.email ? errors?.email?.message : "Email" }`} className={` ${errors.email ? "placeholder-red-500" : ""}`} {...register("email")}/>
                    </div>
                    </div>
                </form>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}