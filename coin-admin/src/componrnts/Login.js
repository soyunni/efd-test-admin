import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        axios.get('/api/login')
        .then(res => console.log(res))
        .catch()
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('/api/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
 
    return(
        <div className='login-area'>
            <div className='login-box'>
                <img src="img/efd_logo.png" alt='login'/>
                <div>
                    <div>
                        <label htmlFor='input_id'>ID : </label>
                        <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
                    </div>
                    <div>
                        <label htmlFor='input_pw'>PW : </label>
                        <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
                    </div>
                </div>
                <div>
                    <button type='button' onClick={onClickLogin}>Login</button>
                    <button type='button' onClick={onClickLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}
 
export default Login;