import React, {useState} from 'react'

export default function TextForm(props) {
    //for click handling to change it in Upper Case
    const Clicked = () => {
        let newText=text.toUpperCase();
        setText(newText);
        
    }
    //for click handling to change it in Upper Case
    const LowClicked = () => {
        let newText=text.toLowerCase();
        setText(newText);
    }
    //for click to clear the text
    const ClearText = () => {
        let newText='';
        setText(newText);
    }
    //for changing in text feild
    const OnChange = (event) => {
          setText(event.target.value);
      }
    //for click to Paste the text
    const Paste = () => {
    
    }
    //for click to copy the text
    const Copy = () => {
        const text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value); 
    }
    //for remove extra space
    const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
         
    }
    
    const[text, setText]=useState('Enter your text');
    return (
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.title}</h2>
         <div className="form-group my-3" >
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={OnChange} id="mybox"  rows="6"></textarea>
            <input type="button" className="btn btn-success my-3 mx-1" value="Change to Upper Case" onClick={Clicked} />
            <input type="button" className="btn btn-success my-3 mx-1" value="Change to Lower Case" onClick={LowClicked} />
            <input type="button" className="btn btn-success my-3 mx-1" value="Paste" onClick={Paste} />
            <input type="button" className="btn btn-success my-3 mx-1" value="Copy to Clipbord" onClick={Copy} />
            <input type="button" className="btn btn-success my-3 mx-1" value="Remove extra Spaces" onClick={handleExtraSpaces} />
            <input type="button" className="btn btn-danger my-3 mx-1" value="Clear Text" onClick={ClearText} />
        </div>
        <h4 className='my-2'>Analysis by Text Master</h4>
        <p><b>{text.split(" ").length} </b> words and <b>{text.length} </b> characters</p>
        <p>It will take <b>{0.005 * text.split(" ").length} </b> minute to read.</p>
        <h2 className='my-2'>Preview</h2>
        <p>{text.length>0?text : "Enter text to see Preview"}</p>
        
        </div>
    )
}
