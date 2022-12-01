import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Checkbox, Button } from 'antd';

import style from 'styled-components';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';


const ErrorMessage = style.div`
    color:red;
`;

const Signup = () => {
    const dispatch= useDispatch();
    const {signUpLoading,signUpDone,signUpError,me} = useSelector((state)=>state.user);
    useEffect(()=>{
        if(signUpDone){
            Router.replace('/');
        }
    },[signUpDone])

    useEffect(()=>{
        if(me&& me.id){
            Router.replace('/');
        }
    
    },[me&&me.id])

    useEffect(()=>{
        if(signUpError){
            alert(signUpError);
        }
    },[signUpError])
//     const [id,setId] = useState('');
//     const onChangeId=useCallback((e)=>{
// setId(e.target.value);

//     },[id])
    const [email,onChangeEmail] =useInput('');



    const [password,setPassword] = useState('');
    const onChangePassword =useCallback((e)=>{
        setPassword(e.target.value);

    },[password])


    const [nickname,setNickname] = useState('');
    const onChangeNickname =useCallback((e)=>{
        setNickname(e.target.value);

    },[nickname])




    


    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password])


    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChnageTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, [])

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }

        console.log(email,nickname,password);
        dispatch({type:SIGN_UP_REQUEST,
        data:{email,nickname,password}})

    }, [password,passwordCheck,term])


    return (
        <AppLayout>
            <Head>
                <meta charSet="utf-8" />
                <title>Sign-Up | Pick-Me</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor='user-email'>email</label>
                    <br />
                    <Input name='user-email' type='email' value={email} required onChange={onChangeEmail} />
                </div>
                <div>
                    <label htmlFor='user-nick'>NickName</label>
                    <br />
                    <Input name='user-nick' value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor='user-password'>Password</label>
                    <br />
                    <Input name='user-password' type='password' value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor='user-password-check'>Check Password</label>
                    <br />
                    <Input name='user-password-check' type='password' value={passwordCheck} required onChange={onChangePasswordCheck} />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChnageTerm}>동의합니까?</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>

                <div style={{ marginTop: 10 }}>
                    <Button type='primary' htmlType='submit'loading={signUpLoading}>가입하기</Button>

                </div>
            </Form>

        </AppLayout>
    );
};




export default Signup;