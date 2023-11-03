export default function Education({ data, register, inputStatus, statusChange, errors }) {
    const degreeTypes = ["High School", "Diploma Degree (D3)", "Bachelor Degree (S1)", "Master Degree (S2)"];
  
    const generateInput = (index, label, inputName) => {
      const isDisabled = !inputStatus[index];
      return (
        <div className="w-full flex justify-center items-center h-16 gap-x-6">
          <div className="h-full w-8/12 flex flex-col">
            <input
              disabled={isDisabled}
              className={`text-${index} border border-${isDisabled ? "gray-300" : "black"} rounded-xl h-12 w-full ps-4 text-2xl`}
              {...register(`place_${index}`, {
                required: {
                  value: inputStatus[index] ? true : false,
                  message: `Field ${label} wajib diisi`,
                },
              })}
              placeholder="Place"
              type="text"
            />
            <span className="text-red-600 h-4">{inputStatus[index] ? errors?.[`place_${index}`]?.message : null}</span>
          </div>
          <div className="h-full w-2/12 flex flex-col">
            <input
              disabled={isDisabled}
              className={`text-${index} border border-${isDisabled ? "gray-300" : "black"} rounded-xl h-12 w-full ps-4 text-2xl`}
              placeholder="Start"
              type="text"
              {...register(`start_${index}`, {
                required: {
                  value: inputStatus[index] ? true : false,
                  message: `Field Start wajib diisi`,
                },
              })}
            />
            <span className="text-red-600 h-4">{inputStatus[index] ? errors?.[`start_${index}`]?.message : null}</span>
          </div>
          <div className="h-full w-2/12 flex flex-col">
            <input
              disabled={isDisabled}
              className={`text-${index} border border-${isDisabled ? "gray-300" : "black"} rounded-xl h-12 w-full ps-4 text-2xl`}
              placeholder="End"
              type="text"
              {...register(`end_${index}`, {
                required: {
                  value: inputStatus[index] ? true : false,
                  message: `Field End wajib diisi`,
                },
              })}
            />
            <span className="text-red-600 h-4">{inputStatus[index] ? errors?.[`end_${index}`]?.message : null}</span>
          </div>
        </div>
      );
    };
  
    return (
      <div className="w-11/12 bg-white flex flex-col justify-center items-start rounded-lg mt-12 gap-y-2 py-10 px-12">
        <p className="text-xl font-semibold">Education</p>
        {degreeTypes.map((degree, index) => (
          <div key={index} className="w-full flex flex-col items-start gap-y-2 pb-3">
            <div className="flex items-center">
              <input
                checked={inputStatus[index]}
                onChange={() => statusChange(index)}
                className="w-4 h-4 me-3"
                type="checkbox"
                id={`degree-${index}`}
                name={`degree-${index}`}
                value={degree}
              />
              <label className="text-xl font-normal" htmlFor={`degree-${index}`}>
                {degree}
              </label>
            </div>
            {generateInput(index, degree, `degree_${index}`)}
          </div>
        ))}
      </div>
    );
  }
  