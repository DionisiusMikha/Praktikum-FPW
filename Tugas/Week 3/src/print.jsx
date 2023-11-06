import React from "react";
import "./print.css";
import Location from "/img/location.svg";
import linkedin from "/img/linkedin.svg";
import phone from "/img/phone.svg";
import mail from "/img/mail.svg";

export default function View({data, setState}) {   
  const printPage = () => {
    const element = document.getElementById("print");
    window.print();
  }

  const toForm = () => {
      setState("form")
  }
  console.log(data)
  return (
    <div className="container">
      <div className="div">
        <div className="print">
          <div className="frame">
            <div className="text-wrapper" onClick={printPage} >PRINT DISINI YA BANG</div>
          </div>
        </div>
        <p className="p">siapa disini yang cita citanya buat cv h-1? saya ✌🏻</p>
        <div className="frame-wrapper">
          <div className="frame">
            <div className="text-wrapper-2" onClick={toForm}>Balikan?</div>
          </div>
        </div>
        <div className="portofolio">
          <div className="overlap">
            <img className="rectangle" alt="Rectangle" src={data.photo_url} />
            <div className="rectangle-2" />
          </div>
          <div className="overlap-group">
            <div className="frame-2">
              <div className="text-wrapper-3">ABOUT</div>
              <div className="rectangle-3" />
              <div className="div-wrapper">
                <div className="text-wrapper-4">{data.about}</div>
              </div>
              <div className="education">
                <div className="text-wrapper-5">EDUCATION</div>
                <div className="rectangle-4" />
              </div>
              <div className="education-list">
                {data.education.map((item, idx) => (
                  <div key={idx} className='education-item'>
                    <div className="text-wrapper-8">{item.edu}</div>
                    <div className="university-of">{item.place} {item.start} - {item.end}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="overlap-2">
            <img className="material-symbols" alt="Material symbols" src={mail} />
            <img className="ic-baseline-phone" alt="Ic baseline phone" src={phone} />
            <img className="mdi-linkedin" alt="Mdi linkedin" src={linkedin} />
            <img className="mdi-location" alt="Mdi location" src={Location} />
          </div>
          <div className="overlap-3">
            <div className="experience-list">
            {data.experiences.map((item, idx) => (
              <div key={idx} className='experience-item'>
                <p className="text-wrapper-9">
                  {item.desc}
                </p>
                <div className="text-wrapper-10">{item.title}</div>
                <div className="frame-3">
                  <div className="frame-4">
                    <div className="group">
                      <div className="group-2">
                        <div className="frame-5">
                          <div className="text-wrapper-11">{item.start} - {item.end}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper-12">{item.place}</div>
                  </div>
                </div>
              </div>
          ))}
            </div>
            <div className="rectangle-5" />
            <div className="text-wrapper-13">WORK EXPERIENCE</div>
          </div>
          <div className="group-3">
            <div className="frame-6">
              <div className="text-wrapper-14">Ui/Ux Designer</div>
            </div>
          </div>
          <div className="group-4">
            <div className="frame-7">
              <div className="text-wrapper-15">{data.nama}</div>
            </div>
          </div>
          <div className="text-wrapper-16">PHONE</div>
          <div className="text-wrapper-17">Domisili</div>
          <div className="overlap-4">
            <div className="text-wrapper-18">EMAIL</div>
            <div className="text-wrapper-19">{data.email}</div>
          </div>
          <div className="text-wrapper-20">{data.phone_number}</div>
          <div className="text-wrapper-21">{data.domicile}</div>
          <div className="text-wrapper-22">{data.linkedin}</div>
        </div>
      </div>
    </div>
  );
};
