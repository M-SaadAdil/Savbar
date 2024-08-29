import React, {useState} from 'react'

export default function Form(props) {
    const handleOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", 'info');
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", 'info');
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", 'danger');
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleInverseClick = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newtext += text[i];
        }
        setText(newtext);
        props.showAlert("Text Inversed", 'success');
    }
    const handleCopy = () => {
      let text = document.getElementById('myBox');
      text.select()
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied to Clipboard", 'info');
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert("Extra Spaces Removed", 'success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    const emptytexting = () => {
        if(text==="" || text===" "){ return 0 }
        else {
        return text.split(' ').length;  
      }
    }
    const emptyReadTime = () => {
        if(text==="" || text===" "){ return 0 }
        else {
        return 0.008*text.split(' ').length.toFixed(2);  
      }
    }

  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#0d1117'}}>
            <h2 className='my-3'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#0d1117'}} id="myBox" rows="7"></ textarea>
            </div>
            <button className='btn btn-primary mx-2 my-2' onClick={handleOnClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleInverseClick}>Inverse Text</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2 my-2">Speak</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Exrta Spaces</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#0d1117'}}>
            <h2>Your Text Summary</h2>
            <p>{emptytexting()} words and {text.length} characters</p>
            <p>{emptyReadTime()} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
