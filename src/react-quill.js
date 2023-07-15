import React, { useState,useCallback,memo } from 'react';
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import QuillMention from "quill-mention";
Quill.register("modules/mentions", QuillMention);
/* 
 * Simple editor component that takes placeholder text as a prop 
 */
 const Editor = () => {
  const [data,setData] =useState({ editorHtml: ''});
  const handleChange= (html)=> {
  	setData({ editorHtml: html });
  }
  
  const outSideItem=(e)=>{
    console.log(8989,e);
      }
    return (<div data-text-editor="name">
      <div style={{display:"flex",justifyContent:"center"}}>
        <div style={{width:"800px",marginTop:"50px"}} className='react-quill'>
          <h1 style={{textAlign:"center"}}>React Quill TextBox</h1>
        <ReactQuill 
          theme="snow"
          selection={{start:0, end:0}}
          defaultValue={data.editorHtml}
          bounds={"[data-text-editor=" + "name" + "]"}
          onChange={handleChange}
          value={data.editorHtml}
          modules={{
            mention:{
              onSelect: useCallback((item, insertItem) => {
                outSideItem(item);
                insertItem(item);
              }, []),
              allowedChars: /^[A-Za-z\s]*$/,
              mentionDenotationChars: ["@", "#"],
              isolateCharacter: true,
              linkTarget: '_self',
              spaceAfterInsert: true,
              defaultMenuOrientation: "bottom",
              source: useCallback((searchTerm, renderList, mentionChar) => {
                let values;
                if (mentionChar === "@") {
                  values = Editor.arrObj;
                }
                if(mentionChar === "#"){
                  values = Editor.arrObj;
                }
                if (searchTerm.length === 0) {
                  renderList(values, searchTerm);
                } else {
                  const matches = [];
                  for (let i = 0; i < values.length; i++)
                    if (
                      ~values[i].value
                        .toLowerCase()
                        .indexOf(searchTerm.toLowerCase())
                    )
                      matches.push(values[i]);
                  renderList(matches, searchTerm);
                }
              }, []),
            },
            toolbar: [
              [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
              [{size: []}],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, 
               {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image', 'video'],
              ['clean']
            ],
            clipboard: {
              matchVisual: false,
            },
            
          }}
          placeholder={"Enter The Text Here..."}
          height={500}
         />
         </div>
      </div>
      <div className="ql-editor" dangerouslySetInnerHTML={{ __html:data.editorHtml }}></div>
    </div> )
}

Editor.arrObj = [{id: '64a3f585cd7c681633dbeb24', value: 'Reet Sen'}, 
{id: '649e7c5fcd7c681633db343a', value: 'Ritu Admin'}, 
{id: '648aaa4da169556c9be8ca2c', value: 'Nandan Rai'}, 
{id: '64883f2753c97c410044cee3', value: 'Tushar Test'}, 
{id: '6487209bd1580c7a382b89bd', value: 'Ramesh Test'}, 
{id: '64872002d1580c7a382b899d', value: 'Test New'}, 
{id: '642ff4873ba60540d1ad3b8a', value: 'pankaj sharma'}, 
{id: '642e7b9ab972fb68bc229f7a', value: 'ratedtwelve twelve'}, 
{id: '642d2736267f146fd67a7bbb', value: 'ratedeleven test'}, 
{id: '642d26cb267f146fd67a7b95', value: 'ratedten test'}
, 
{id: '642d2658267f146fd67a7b6d', value: 'ratednine test'}
, 
{id: '642d2353267f146fd67a7b53', value: 'ratedeight eight'}
, 
{id: '642d1cc5267f146fd67a7ad5', value: 'ratedseven test'}
, 
{id: '642d1bb4267f146fd67a7aa3', value: 'Pushparaj Singh'}
, 
{id: '642d1b1c267f146fd67a7a74', value: 'ratedtwo two'}
, 
{id: '642d1a84267f146fd67a79e6', value: 'ratedone test'}
, 
{id: '642c168f267f146fd67a6ece', value: 'Dheerj patidar'}
, 
{id: '642c15dc267f146fd67a6eb2', value: 'Shayam sharma'}
, 
{id: '6426ae060892a42606417de6', value: 'Deepak patidar'}
, 
{id: '6426ad280892a42606417dc6', value: 'Ashwin sir'}
, 
{id: '63243943c7bfe8388ef8c047', value: 'Jay  Parihar'}
, 
{id: '6324386ec7bfe8388ef8c03b', value: 'Mahesh  Parihar'}
, 
{id: '63241fa3c7bfe8388ef8bf86', value: 'Super admin'}]



export default memo(Editor);