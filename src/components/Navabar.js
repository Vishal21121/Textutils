import {React, useState} from 'react'

function Navabar(props) {
    const textColor = ()=>{
        if(props.mode === 'dark'){
            setText('dark mode')
        }else{
            setText('light mode')
        }
    }
    const [text, setText] = useState("light mode")
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Text Editor</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                    </ul>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
                        <label class="form-check-label" for="flexSwitchCheckChecked" style={{color:props.mode=='light'?'black':'white'}}>{props.mode} mode</label>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navabar