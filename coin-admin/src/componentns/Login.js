import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Login() {
    const [inputId, setInputId] = useState('testUser1')
    const [inputPw, setInputPw] = useState('testPassword')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value);
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        axios.post('/sample/access/login', { "username": inputId, "password" : inputPw }, {headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }})
        .then((res) => {
            console.log(res);
        })
        .catch()
    }

    const onClickPage = (page) => {
        document.location.href = `/${page}`;
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        /* axios.post('/sample/access/login', { "username":"testUser1", "password" : "testPassword" }, {headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }})
        .then(res => console.log(res))
        .catch() */
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
                        <input type='text' name='input_id' placeholder='e-mail' value={inputId} onChange={handleInputId} />
                    </div>
                    <div>
                        <label htmlFor='input_pw'>PW : </label>
                        <input type='password' name='input_pw' value={inputPw}  onChange={handleInputPw}  placeholder="password" />
                    </div>
                    <button type='button' onClick={onClickLogin}>로그인</button>
                </div>
                <div>
                    <button type='button' onClick={() => {
                        onClickPage('findPassword');
                    }} >비밀번호 찾기</button>
                    <button type='button' onClick={() => {
                        onClickPage('signUp');
                    }}>회원가입</button>
                </div>
            </div>
        </div>
    )
}
 
export default Login;