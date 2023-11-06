import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import BlankForm from './blankform';
import ViewForm from './viewForm';

export default function Form({ inputStatus, setInputStatus, data, setData, setState }) {
  const [experiences, setExperiences] = useState(data ? data.experiences : [{ id: 0, title: "", place: "", description: "", start: "", end: "" }]);

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const generate = data => {
    const generate_data = {
      nama: data.nama,
      title: data.title,
      phone_number: data.phone_number,
      email: data.email,
      domicile: data.domicile,
      linkedin: data.linkedin,
      photo_url: data.photo_url,
      about: data.about,
    };

    const education = [];
    for (let i = 0; i < inputStatus.length; i++) {
      if (inputStatus[i] === true) {
        let degree;
        if (i === 0) {
          degree = "High School";
        } else if (i === 1) {
          degree = "Diploma Degree";
        } else if (i === 2) {
          degree = "Bachelor Degree";
        } else if (i === 3) {
          degree = "Master Degree";
        } else {
          degree = "Unknown";
        }

        const temp_edu = {
          edu: degree,
          place: data[`place_${i}`],
          start: data[`start_${i}`],
          end: data[`end_${i}`]
        };

        education.push(temp_edu);
      }
    }

    generate_data.education = education;

    const temp = [];
    for (let i = 0; i < experiences.length; i++) {
      const temp_exp = {
        title: data.experiences[`${experiences[i].id}`].title,
        place: data.experiences[`${experiences[i].id}`].place,
        desc: data.experiences[`${experiences[i].id}`].desc,
        start: data.experiences[`${experiences[i].id}`].start,
        end: data.experiences[`${experiences[i].id}`].end
      };
      temp.push(temp_exp)
    }
    generate_data.experiences = temp;
    // console.log(temp);
    setData(generate_data);
    setState("view");
  };

  const statusChange = (field) => {
    const updatedInputStatus = [...inputStatus];
    updatedInputStatus[field] = !updatedInputStatus[field];
    setInputStatus(updatedInputStatus);
  };

  const addField = () => {
    const newExperience = {
      id: experiences.length,
      title: "",
      place: "",
      description: "",
      start: "",
      end: ""
    };
    setExperiences([...experiences, newExperience]);
  };

  const deleteField = (idx) => {
    const updatedData = experiences.filter((item) => item.id !== idx);
    setExperiences(updatedData);
  };

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  return (
    <>
      {data ? (
        <ViewForm
          reset={reset}
          data={data}
          setData={setData}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          inputStatus={inputStatus}
          setInputStatus={setInputStatus}
          experiences={experiences}
          setExperiences={setExperiences}
          generate={generate}
          statusChange={statusChange}
          addField={addField}
          deleteField={deleteField}
          handleChange={handleChange}
        />
      ) : (
        <BlankForm
          reset={reset}
          setData={setData}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          inputStatus={inputStatus}
          setInputStatus={setInputStatus}
          experiences={experiences}
          setExperiences={setExperiences}
          generate={generate}
          statusChange={statusChange}
          addField={addField}
          deleteField={deleteField}
          handleChange={handleChange}
        />
      )}
    </>
  );
}
