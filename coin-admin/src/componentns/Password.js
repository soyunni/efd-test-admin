import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Password() {
    return(
        <div className='login-area'>
            <div className='login-box'>
                <h3>비밀번호찾기</h3>
                <div>
                    <div>
                        <label htmlFor='input_id'>ID : </label>
                        <input type='text' name='input_id' placeholder='e-mail' value="" />
                    </div>
                    <div>
                        <label htmlFor='input_pw'>PW : </label>
                        <input type='password' name='input_pw' value=""  placeholder="password" />
                    </div>
                    <div>
                        <label htmlFor='input_pw'>PW : </label>
                        <input type='password' name='input_pw' value=""  placeholder="password" />
                    </div>
                    <div>
                        <label htmlFor='input_pw'>PW : </label>
                        <input type='password' name='input_pw' value=""  placeholder="password" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password;