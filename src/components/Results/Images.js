import React, { useState, useEffect } from "react";
import "./images.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Modal from "react-modal";
import Loader from "../Loaders/Loader";
import { FaRegWindowClose } from "react-icons/fa";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    with: "75%",
  },
};

const Pics = ({ images, loading, type }) => {
  const [photos, setPhotos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const showModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  function afterOpenModal() {}

  function closeModal() {
    setModalOpen(false);
  }

  useEffect(() => {
    if (type === "default") {
      setPhotos(images);
    } else {
      setPhotos([]);
      setPhotos(images);
    }
  }, [images]);

  return (
    <>
      <div className="container">
        <div className="row">
          {loading && <Loader />}
          {photos &&
            photos.map((pic, index) => {
              const url = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
              return (
                <div className="col images" key={index}>
                  <img
                    src={url}
                    className="img-fluid"
                    onClick={() => showModal(url)}
                  />
                </div>
              );
            })}
        </div>
      </div>
      {modalData && (
        <Modal
          isOpen={modalOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="close_btn">
                <button onClick={closeModal}>
                  <FaRegWindowClose />
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 modal_image">
                <img src={modalData} />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Pics;
