import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "./Uploader.css";

export const Uploader = () => {
  return (
    <div className="uploader_body">
      <form
        action=""
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input type="file" accept="image/*" className="input-field" hidden />
      </form>
    </div>
  );
};
