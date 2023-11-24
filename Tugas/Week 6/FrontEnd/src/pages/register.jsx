import { useForm } from 'react-hook-form'
import { joiResolver } from "@hookform/resolvers/joi"
import { Link } from "react-router-dom";
import Joi from 'joi';

import handler from "../handler";

export default function Login() {
    const schema = Joi.object({
        email: Joi.string().required().messages({
            "string.empty":"Email tidak boleh kosong",
        }),
        first_name: Joi.string().required().messages({
            "string.empty":"First name tidak boleh kosong",
        }),
        last_name: Joi.string().required().messages({
            "string.empty":"Last name tidak boleh kosong",
        }),
        password: Joi.string().required().messages({
            "string.empty":"Password tidak boleh kosong",
        }),
        confirm_password: Joi.string().required().messages({
            "string.empty": "Confirm password tidak sama",
        }),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(schema)
    });

    if(Object.keys(errors).confirm_password){
        setError('confirm_password', {
            type: 'manual',
            message: 'Confirm password tidak sama',
        });
    }

    if(Object.keys(errors).email){
        setError('email', {
            type: 'manual',
            message: 'Email sudah ada',
        });
    }


    const submit = async data => {
        await handler.register(data);
    }

    return (
        <>
        <div className="bg-[#0571e133] flex flex-row justify-center w-full">
        <div className="bg-[#0571e133] w-[1920px] h-[1080px] relative">
        <div className="relative w-[1328px] h-[756px]  left-[240px] top-[180px] bg-[#ffffff] rounded-[20px] overflow-hidden">
            <div className="absolute w-[1328px] h-[756px] top-0 left-0">
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
                        <Link className='hover:opacity-50 text-sm' to={`/login`}>Already have account?</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="absolute w-[307px] h-[541px] top-[91px] left-[900px]">
                <div className="absolute w-[202px] h-[97px] top-0 left-0">
                <div className="absolute w-[78px] top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#333333] text-[26px] tracking-[0] leading-[normal]">
                    Hello!
                </div>
                <p className="absolute w-[198px] top-[59px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#333333] text-[18px] tracking-[0] leading-[normal]">
                    Sign Up to Get Started
                </p>
                </div>
                <form onSubmit={handleSubmit(submit)} className=''>
                <div className="inline-flex h-[402px] absolute top-[139px] left-0 flex-col items-start gap-[10px]">
                <div className="flex w-[400px] justify-center px-[26px] py-[18px] relative flex-[0_0_auto] bg-[#ffffff] rounded-[30px] border border-solid border-[#eeeeee] flex-col items-start gap-[10px]">
                    <input type="text" placeholder={`${errors.email ? errors?.email?.message : "Email" }`} className={`${errors.email ? "placeholder-red-500" : ""}`} {...register("email")}/>
                </div>
                <div className="flex w-[400px] justify-center px-[26px] py-[18px] relative flex-[0_0_auto] bg-[#ffffff] rounded-[30px] border border-solid border-[#eeeeee] flex-col items-start gap-[10px]">
                    <input type="text" placeholder={`${errors.first_name ? errors?.first_name?.message : "First Name" }`} className={`${errors.first_name ? "placeholder-red-500" : ""}`} {...register("first_name")}/>
                </div>
                <div className="flex w-[400px] justify-center px-[26px] py-[18px] relative flex-[0_0_auto] bg-[#ffffff] rounded-[30px] border border-solid border-[#eeeeee] flex-col items-start gap-[10px]">
                    <input type="text" placeholder={`${errors.last_name ? errors?.last_name?.message : "Last Name" }`} className={`${errors.last_name ? "placeholder-red-500" : ""}`} {...register("last_name")}/>
                </div>
                <div className="flex w-[400px] justify-center px-[26px] py-[18px] relative flex-[0_0_auto] bg-[#ffffff] rounded-[30px] border border-solid border-[#eeeeee] flex-col items-start gap-[10px]">
                    <input type="password" placeholder={`${errors.password ? errors?.password?.message : "Password" }`} className={`${errors.password ? "placeholder-red-500" : ""}`} {...register("password")}/>
                </div>
                <div className="flex w-[400px] justify-center px-[26px] py-[18px] relative flex-[0_0_auto] bg-[#ffffff] rounded-[30px] border border-solid border-[#eeeeee] flex-col items-start gap-[10px]">
                    <input type="password" placeholder={`${errors.confirm_password ? errors?.confirm_password?.message : "Confirm Password" }`} className={`${errors.confirm_password ? "placeholder-red-500" : ""}`} {...register("confirm_password")}/>
                </div>
                <button type='submit' className='flex flex-col w-[307px] items-center justify-center gap-[10px] px-[26px] py-[18px] relative flex-[0_0_auto] mb-[-56.82px] bg-[#0575e6] rounded-[30px] all-[unset] box-border text-[#ffffff]'>Register</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}