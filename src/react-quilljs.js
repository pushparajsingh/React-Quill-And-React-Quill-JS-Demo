import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function Editorjs() {
  const { quill, quillRef } = useQuill();
  const [data,setData]=React.useState();

  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log('Text change!');
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        setData(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  return (<>
    <div style={{display:"flex",justifyContent:"center"}}>
        <div style={{width:"800px"}}>
          <h1 style={{textAlign:"center"}}>React Quill Js TextBox</h1>
      <div ref={quillRef} />
    </div>
    <div>
    </div>
    
    </div>
    <div className="ql-editor" dangerouslySetInnerHTML={{ __html:data }}></div>
  </>);
}
