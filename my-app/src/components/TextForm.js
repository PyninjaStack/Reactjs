import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("UpperCase was Clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = () =>{
        //console.log("LowerCase was Clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const Cleartext = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Have been Cleared","danger");
    }
    const handleonchange = (event) =>{
       //console.log("on change");
        setText(event.target.value)
    }
    const handleTitleCase = () => {
        let newText = text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
        setText(newText);
        props.showAlert("Converted to titlecase!","success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        alert('Text copied to clipboard!');
        props.showAlert("Text copied to clipboard!","success");
    }
    const SpeakClick = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Started Speaking","success");
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!","success");
    }
    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText("new text"); // correct way to change the state 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button className= "btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperClass</button>
        <button className= "btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerClass</button>
        <button className= "btn btn-primary mx-1" onClick={Cleartext}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleTitleCase}>Convert to TitleCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={SpeakClick}>Speak</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
