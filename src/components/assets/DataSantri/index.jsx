import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { santri_menu } from "../../../assets";
import { SantriGet } from "../../../api";
import ModalContent from "../ModalContent";

const DataSantri = () => {
  const [isSelected, setSelected] = useState(-1);
  const [dataSantri, setDataSantri] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      await SantriGet((response) => {
        console.log(response);
        if (response.message == "Status OK") {
          const san = response.data;
          setDataSantri(san);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.btnContainer}>
        <div className={styles.btn} onClick={openModal}>
          <img src={santri_menu} alt="Tambah Data Santri" />
          <h5>{isSelected != -1 ? "Tambah" : "Ubah"} Data Santri</h5>
        </div>
        {isSelected > -1 ? (
          <>
            <div className={styles.btn}>
              <img src={santri_menu} alt="Hapus Data Santri" />
              <h5>Hapus Data Santri</h5>
            </div>
            <div className={styles.btn} onClick={() => setSelected(-1)}>
              <img src={santri_menu} alt="Batal" />
              <h5>Batal</h5>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <h5 className={styles.title}>Tabel Data Santri</h5>
      <div className={styles.table}>
        <div className={styles.header}>
          <h4>Nama</h4>
          <h4>Alamat</h4>
          <h4>Tempat Lahir</h4>
          <h4>Tanggal Lahir</h4>
          <h4>Tahun Masuk</h4>
          <h4>Jenis Kelamin</h4>
          <h4>Orang Tua</h4>
          <h4>No. Tlp</h4>
        </div>
        {dataSantri.map((item, index) => (
          <div
            className={`${styles.row} ${
              isSelected === index ? styles.click : ""
            }`}
            key={index}
            onClick={() => setSelected(index)}
          >
            <h5>{item.name}</h5>
            <h5>{item.address}</h5>
            <h5>{item.place_of_birth}</h5>
            <h5>{item.date_of_birth}</h5>
            <h5>{item.entry_year}</h5>
            <h5>{item.gender}</h5>
            <h5>{item.parent_name}</h5>
            <h5>{item.telephone_number}</h5>
          </div>
        ))}
      </div>
      {isModalOpen && <ModalContent closeModal={closeModal} />}
    </div>
  );
};

export default DataSantri;
