import React, { useState } from "react";

const Login =() => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')    
    

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const onClickLogin = () => {
        console.log('click login')
        if (inputId==='testid' && inputPw==='testpw'){
            window.location.href='/main'
        } else {alert('❎일치하는 정보가 없습니다.❎') }
    }
    

    return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ width:'100%',background:'black', position:'absolute'}}>
            <img src='/images/white-board.svg' style={{ width: '500px', height: '500px', marginTop:'700px',marginLeft:'400px' }} />
        </div>
        <div style={{position:'absolute', marginTop:'500px'}}>
            <h2 style = {{marginLeft : '65px'}}>login</h2>
            <div style={{display:'flex'}} >
                <div style={{display:'flex', flexDirection:'column'}}>
                    <label htmlFor='input_id'>ID: </label>
                    <label htmlFor='input_pw'>PW: </label>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
                    <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
                </div>
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div> 
    </div>
    )
}

export default Login;
