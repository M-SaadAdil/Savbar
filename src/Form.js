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
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
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

    // const emptytexting = () => {
    //     if(text==="" || text===" "){ return 0 }
    //     else {
    //     return text.split(' ').length;  
    //   }
    // }
    // const emptyReadTime = () => {
    //     if(text==="" || text===" "){ return 0 }
    //     else {
    //     return 0.008*text.split(' ').length.toFixed(2);  
    //   }
    // }

  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#0d1117'}}>
            <h2 className='my-3'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#131414':'white', color: props.mode==='dark'?'white':'#0d1117'}} id="myBox" rows="7"></ textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleOnClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleInverseClick}>Inverse Text</button>
            <button type="submit" onClick={speak} disabled={text.length===0} className="btn btn-warning mx-2 my-2 my-2">Speak</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#0d1117'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(' ').filter((element)=>{return element.length!==0}).length.toFixed(2)} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to Preview'}</p>
        </div>
    </>
  )
}
