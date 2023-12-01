import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import Navbar from "./component/navbar";

const api_url = "http://localhost:3000/api";

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(false);
    const [teamHome, setTeamHome] = useState();
    const [teamAway, setTeamAway] = useState();
    const data = useLoaderData();
    console.log(data);
    const fetch = async() => {
        setIsLoading(true);
        const home = await axios.get(`${api_url}/team/get-team-by-id`, {
            params: {
                id: data.match.team_home
            }
        })
        const away = await axios.get(`${api_url}/team/get-team-by-id`, {
            params: {
                id: data.match.team_away
            }
        })
        setTeamHome(home.data);
        setTeamAway(away.data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetch();
    }, [])

    return (
        <>
        <Navbar />
        <div className="bg-[#192f45] flex flex-row justify-center w-full">
        <div className="bg-[#192f45] w-[1920px] h-[1080px] relative ">
            <div className="w-[1132px] h-[416px] top-[165px] left-[627px] absolute rounded-[20px] overflow-hidden border border-solid border-[#d8e4e9] shadow-[0px_4px_4px_#00000040] bg-[url(https://iili.io/JzHfIG1.md.jpg)] bg-cover bg-[50%_50%]">
            <div className="top-[20px] left-[453px] [text-shadow:0px_4px_4px_#00000040] absolute [-webkit-text-stroke:1px_#ffffff] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[35px] text-center tracking-[0] leading-[52.5px] whitespace-nowrap">
                Top 3 Player
            </div>
            <div className="left-[105px] absolute w-[198px] h-[281px] top-[117px] bg-[#ffffffe6] rounded-[20px] overflow-hidden border border-solid border-[#dadada] shadow-[0px_4px_4px_#00000040]">
                <div className="absolute top-[31px] left-[38px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {data.player[2].name}
                </div>
                <div className="left-[90px] absolute top-[85px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {data.player[2].number}
                </div>
                <div className="top-[137px] left-[80px] text-[15px] leading-[22.5px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-center tracking-[0] whitespace-nowrap">
                {data.player[2].nationality}
                </div>
                <div className="absolute top-[188px] left-[75px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                Goal : {data.player[2].totalGoal}
                </div>
            </div>
            <div className="left-[467px] absolute w-[198px] h-[281px] top-[117px] bg-[#ffffffe6] rounded-[20px] overflow-hidden border border-solid border-[#dadada] shadow-[0px_4px_4px_#00000040]">
                <div className="absolute top-[31px] left-[17px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {data.player[1].name}
                </div>
                <div className="left-[89px] absolute top-[85px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {data.player[1].number}
                </div>
                <div className="top-[137px] left-[78px] text-[15px] leading-[22.5px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-center tracking-[0] whitespace-nowrap">
                {data.player[1].nationality}
                </div>
                <div className="absolute top-[188px] left-[75px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                Goal : {data.player[1].totalGoal}
                </div>
            </div>
            <div className="left-[829px] absolute w-[198px] h-[281px] top-[117px] bg-[#ffffffe6] rounded-[20px] overflow-hidden border border-solid border-[#dadada] shadow-[0px_4px_4px_#00000040]">
                <div className="absolute top-[31px] left-[25px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {data.player[0].name}
                </div>
                <div className="left-[89px] absolute top-[85px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {data.player[0].number}
                </div>
                <div className="top-[137px] left-[82px] text-[15px] leading-[22.5px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-center tracking-[0] whitespace-nowrap">
                {data.player[0].nationality}
                </div>
                <div className="absolute top-[188px] left-[75px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                Goal : {data.player[0].totalGoal}
                </div>
            </div>
            </div>
            <div className="w-[470px] h-[879px] top-[165px] left-[53px] absolute rounded-[20px] overflow-hidden border border-solid border-[#d8e4e9] shadow-[0px_4px_4px_#00000040] bg-[url(https://iili.io/JzHq9HJ.md.jpg)] bg-cover bg-[50%_50%]">
            <div className="absolute top-[91px] left-[119px] [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#ffffff] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
                Last Match
            </div>
            <div className="absolute w-[220px] h-[181px] top-[205px] left-[125px] bg-[#ffffffe6] rounded-[20px] overflow-hidden border border-solid border-[#dadada] shadow-[0px_4px_4px_#00000040]">
                <div className="top-[18px] left-[67px] text-[30px] leading-[45px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-center tracking-[0] whitespace-nowrap">
                {teamHome ? teamHome.name : ""}
                </div>
                <div className="absolute top-[79px] left-[74px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[30px]">
                Score : <br />{data.match.score_home}
                </div>
            </div>
            <div className="absolute w-[220px] h-[181px] top-[494px] left-[125px] bg-[#ffffffe6] rounded-[20px] overflow-hidden border border-solid border-[#dadada] shadow-[0px_4px_4px_#00000040]">
                <div className="top-[18px] left-[37px] text-[30px] leading-[45px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-center tracking-[0] whitespace-nowrap">
                {teamAway ? teamAway.name : ""}
                </div>
                <div className="absolute top-[79px] left-[74px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[30px]">
                Score : <br />{data.match.score_away}
                </div>
            </div>
            <div className="absolute top-[409px] left-[207px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[40px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
                VS
            </div>
            </div>
            <div className="w-[1132px] h-[440px] top-[604px] left-[627px] absolute rounded-[20px] overflow-hidden border border-solid border-[#d8e4e9] shadow-[0px_4px_4px_#00000040] bg-[url(https://iili.io/JzHqIDl.md.jpg)] bg-cover bg-[50%_50%]">
            <div className="top-[27px] left-[461px] absolute [-webkit-text-stroke:1px_#ffffff] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[35px] text-center tracking-[0] leading-[52.5px] whitespace-nowrap">
                Top 3 Team
            </div>
            <div className="left-[105px] absolute w-[198px] h-[281px] top-[117px] bg-[#ffffffe6] rounded-[20px] overflow-hidden border border-solid border-[#dadada] shadow-[0px_4px_4px_#00000040]">
                <div className="top-[31px] left-[63px] text-[15px] leading-[22.5px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-center tracking-[0] whitespace-nowrap">
                {data.team[0].name}
                </div>
                <div className="left-[39px] absolute top-[85px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {data.team[0].coach}
                </div>
                <div className="left-[65px] absolute top-[137px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                Point: {data.team[0].points}
                </div>
                <div className="absolute top-[188px] left-[72px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                Win : {data.team[0].record.win}
                </div>
            </div>
            <div className="left-[467px] absolute w-[198px] h-[281px] top-[117px] bg-[#ffffffe6] rounded-[20px] overflow-hidden border border-solid border-[#dadada] shadow-[0px_4px_4px_#00000040]">
                <div className="top-[31px] left-[64px] text-[15px] leading-[22.5px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-center tracking-[0] whitespace-nowrap">
                {data.team[1].name}
                </div>
                <div className="left-[26px] absolute top-[85px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {data.team[1].coach}
                </div>
                <div className="left-[65px] absolute top-[137px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                Point: {data.team[1].points}
                </div>
                <div className="absolute top-[188px] left-[72px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                Win : {data.team[1].record.win}
                </div>
            </div>
            <div className="left-[829px] absolute w-[198px] h-[281px] top-[117px] bg-[#ffffffe6] rounded-[20px] overflow-hidden border border-solid border-[#dadada] shadow-[0px_4px_4px_#00000040]">
                <div className="top-[31px] left-[82px] text-[15px] leading-[22.5px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-center tracking-[0] whitespace-nowrap">
                {data.team[2].name}
                </div>
                <div className="absolute top-[85px] left-[37px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {data.team[2].coach}
                </div>
                <div className="left-[67px] absolute top-[137px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                Point: {data.team[2].points}
                </div>
                <div className="absolute top-[188px] left-[72px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                Win : {data.team[2].record.win}
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}