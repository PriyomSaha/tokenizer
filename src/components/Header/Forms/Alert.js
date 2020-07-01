import React from 'react'
import 'react-bootstrap'

function Alert({color,text}) {
    const style ={
        marginTop:'-2vh',
        fontSize:'0.8rem',
        display:'block',
        width:'100%',
        textAlign:'left',
        color:color
    }
    
    return (
        <>
            <small style={style}><b>{text}</b></small>
        </>
    )
}

export default Alert
