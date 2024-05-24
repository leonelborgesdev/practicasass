import React, { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "./Uploader.css";

export const Uploader = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const handleChangeImage = (e) => {
    const { files } = e.target;
    if (files) {
      setImage(URL.createObjectURL(files[0]));
      if (files[0]) {
        setFileName(files[0].name);
      }
    }
  };
  const handleClearImageSelct = () => {
    setFileName("No selected File");
    setImage(null);
  };
  return (
    <div className="uploader_body">
      <form
        action=""
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={handleChangeImage}
        />

        {image ? (
          <img src={image} width={120} alt={fileName} />
        ) : (
          <React.Fragment>
            <MdCloudUpload color="#1475cf" size={60} />
            <p>Browse Files to upload</p>
          </React.Fragment>
        )}
      </form>
      <section className="container_delete_image">
        <AiFillFileImage size={20} color="#1475cf" />
        <div>
          <span>{fileName}</span>
        </div>
        <MdDelete size={20} onClick={handleClearImageSelct} />
      </section>
    </div>
  );
};
