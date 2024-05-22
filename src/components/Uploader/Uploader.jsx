import { useState } from "react";
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
    }
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
          <MdCloudUpload color="#1475cf" size={60} />
        )}
      </form>
    </div>
  );
};
