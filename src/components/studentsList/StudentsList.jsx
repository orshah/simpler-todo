import "./studentList.style.css";
import React from "react";
import { students } from "./studentsData";
import Card from "../card/Card";

function StudentsList() {
  const showStudentsList = students.map((el, index) => {
    return <Card cardData={el} key={index} />;
  });

  return <div className="container-main">{showStudentsList}</div>;
}

export default StudentsList;
