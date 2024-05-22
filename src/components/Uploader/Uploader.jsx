import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "./Uploader.css";

export const Uploader = () => {
  return (
    <div className="uploader_body">
      <form action="">
        <input type="file" accept="image/*" />
      </form>
    </div>
  );
};
