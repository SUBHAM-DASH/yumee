import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CkEditot = () => {
    const [editorValue,setEditorValue] = useState("");
  const handleClick = () => {
    console.log(editorValue);
    
  };
  return (
    <div className="container">
      <CKEditor
        editor={ClassicEditor}
        // onReady={(editor) => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log("Editor is ready to use!", editor);
        // }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorValue(data);
        }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
      <button
        className="btn btn-primary btn-sm my-4 text-center"
        onClick={handleClick}
      >
        Click
      </button>
    </div>
  );
};

export default CkEditot;
