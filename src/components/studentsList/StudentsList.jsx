import "./studentList.style.css";
import React from "react";
import { students } from "./studentsData";

function StudentsList() {
  const showStudentsList = students.map((el, index) => {
    return (
      <div key={index} className="name-list">
        <img src={el.picture} alt="" />
        <div className="text">
          <h1>{el.name}</h1>
          <p>loves</p>
          <h2>{el.hobby}</h2>
        </div>
      </div>
    );
  });

  return <div className="container">{showStudentsList}</div>;
}

export default StudentsList;
