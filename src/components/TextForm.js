import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    props.showAlert("Your text has been converted to upper case.", "success")
    setText(newText)
    
  };
  const lowerUppercase = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Your text has been converted to lower case.", "success")

  };
  const removeExtraSpaces = ()=>{
    let newText = text.replace(/\s+/g,' ').trim();
    setText(newText);
    props.showAlert("Extra spaces from text has been removed.", "success")
  }
  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied on clipboard.", "success")
  }
  const clearText = ()=>{
    setText('')
    props.showAlert("Text has been cleared", "success")
  }

  const onChangeHandle = (event) => {
    setText(event.target.value)
  };

  return (
    <>
    <div className="mb-3" style = {{color: props.mode === "light"? "black" : "grey"}}>
      <h1>{props.heading}</h1>
      <textarea
        value={text}
        onChange={onChangeHandle}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        placeholder="Enter your text here."
      ></textarea>
      <button className="btn btn-primary my-3 mx-1" onClick={handleUppercase}>Convert to UpperCase</button>
      <button className="btn btn-danger my-3 mx-1" onClick={lowerUppercase}>Convert to LowerCase</button>
      <button className="btn btn-warning my-3 mx-1" onClick={removeExtraSpaces}>Remove extra Spaces</button>
      <button className="btn btn-success my-3 mx-1" onClick={copyToClipboard}>Copy to clipboard</button>
      <button className="btn btn-info my-3 mx-1" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-3 " style = {{color: props.mode === "light"? "black" : "grey"}}>
    <h1>Text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes takes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Enter text in the above textbox to preview here"}</p>
    </div>
    </>
  );
}
