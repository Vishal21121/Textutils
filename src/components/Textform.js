import React, { useState } from 'react'
import Alert from './Alert';

const Textform = (props) => {
    
    const [val, setVal] = useState("")
    const [visiblity, setVisiblity] = useState("invisible")
    const upper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        setVal('Uppercase')
        setVisiblity('visible')
        setTimeout(()=>{
            setVisiblity('invisible')
        },3000)
    }

    const lower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        setVal('Lowercase')
        setVisiblity('visible')
        setTimeout(()=>{
            setVisiblity('invisible')
        },3000)
    }

    const clearText = ()=>{
        setText('')
    }

    const copText = ()=>{
        navigator.clipboard.writeText(text);
    }

    const grab = (e)=>{
        setText(e.target.value)
    }
    const [text,setText] = useState("")
    return (
        <>  
            <Alert visiblity={visiblity} val={val}></Alert>
            <div className="mb-3 container my-5">
                <h1 style={{color:props.mode === 'light'?'black':'white'}}>Enter your text</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={grab} value={text} style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <div className='container d-flex flex-wrap'>
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={upper}>uppercase</button>
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={lower}>lowercase</button>
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={clearText}>clear text</button>
            <button type="button" className="btn btn-primary mx-2 my-2" onClick={copText}>copy text</button>
            </div>
        </>
    )
}

export default Textform