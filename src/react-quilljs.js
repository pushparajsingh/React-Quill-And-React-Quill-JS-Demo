import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function Editorjs() {
  const { quill, quillRef } = useQuill();
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <div style={{width:"800px"}}>
          <h1 style={{textAlign:"center"}}>React Quill Js TextBox</h1>
      <div ref={quillRef} />
    </div>
    </div>
  );
}
