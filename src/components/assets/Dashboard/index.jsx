import React from "react";
import Session from "../../../session";
import styles from "./index.module.css";

const Dashboard = () => {
  const name = Session.getItem("name");
  const entry_year = Session.getItem("entry_year");
  const gender = Session.getItem("gender");
  const telephone_number = Session.getItem("telephone_number");
  const job = Session.getItem("job");
  return (
    <div className={styles.dashboard}>
      <h1>السلام عليكم, {name}</h1>
      <h1>Biodata Singkat</h1>
      <h2>Nama : {name}</h2>
      <h2>No. Tlp : {telephone_number}</h2>
      <h2>Jenis Kelamin : {gender}</h2>
      <h2>Tahun Masuk : {entry_year}</h2>
      <h2>Job : {job}</h2>
    </div>
  );
};

export default Dashboard;
