import React from "react"
import male from "../../public/Male.svg"
import female from "../../public/female.svg"
import intersex from "../../public/intersex.svg"


const CardItem = (props) => {
    let genderImage = null;
    let difficultyClassName = "";

    if (props.Workout.gender === "male") {
      genderImage = male;
    } else if (props.Workout.gender === "female") {
      genderImage = female;
    } else if (props.Workout.gender === "intersex") {
      genderImage = intersex;
    }

    if (props.Workout.kesulitan === "hard") {
        difficultyClassName = "div-wrapper";
      } else if (props.Workout.kesulitan === "beginner") {
        difficultyClassName = "kesuliatan-wrapper";
      } else if (props.Workout.kesulitan === "intermediate") {
        difficultyClassName = "kesuliatan";
      }
      
    return(
        <>
            <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="nama">{props.Workout.title}</div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                    {<div className={difficultyClassName}>{props.Workout.kesulitan}</div>}
                    </div>
                  </div>
                  <div className="waktu-menit">{props.Workout.waktu} Menit</div>
                  <img className="durasi" alt="Durasi" src="durasi.png" />
                  {genderImage && <img className={props.Workout.gender} alt={props.Workout.gender} src={genderImage} />}
                </div>
            </div>

            {/* ntah lah bang kalo misalkan tak generate kek gini tampilan e normal tapi nek tak auto iso nde kiri, nek mau nyoba silahkan */}

            {/* hard */}
            {/* <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="nama">{props.Workout.title}</div>
                  <div className="overlap-group-wrapper">
                    <div className="div-wrapper">
                      <div className="kesuliatan">{props.Workout.kesulitan}</div>
                    </div>
                  </div>
                  <div className="waktu-menit">{props.Workout.waktu} Menit</div>
                  <img className="durasi" alt="Durasi" src="durasi.png" />
                  <img className="intersex" alt="Intersex" src="intersex.svg" />
                </div>
              </div> */}

              {/* beginner */}
              {/* <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="nama">&lt;nama&gt;</div>
                  <div className="overlap-group-wrapper">
                    <div className="kesuliatan-wrapper">
                      <div className="kesuliatan">&lt;kesuliatan&gt;</div>
                    </div>
                  </div>
                  <div className="waktu-menit">&lt;waktu&gt; Menit</div>
                  <img className="durasi" alt="Durasi" src="durasi.png" />
                  <img className="female" alt="Female" src="female.svg" />
                </div>
              </div> */}
            
        </>
    )
}

export default CardItem