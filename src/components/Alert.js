import React from 'react'

function Alert(props) {
    return (
        <>
            <div class={`alert alert-success container mt-4 ${props.visiblity}`} role="alert">
                <strong>Success:</strong> Converted to {props.val} successfully
            </div>
        </>
    )
}

export default Alert