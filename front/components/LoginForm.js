import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from "../reducers/user";

const ButtonWrapper = styled.div`
    margin-top:10px;
`


const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading,logInError } = useSelector((state) => state.user);
    const [email, setEmail] = useState('');


    
    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);

    }, [email])

    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(logInError){
            alert(logInError);
        }
    },[logInError])
    
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);

    }, [password])


    const style = useMemo(() => ({ marginTop: 10 }), []);

    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        dispatch(loginRequestAction({ email, password }));
    }, [email, password])

    const FormWrapper = styled(Form)`
padding: 10px;
    `;


    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />

            </div>
            <div>
                <label htmlFor="user-password">password</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword} />

            </div>
            <ButtonWrapper style={style}>
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>

            </ButtonWrapper>
        </FormWrapper>
    );

}




export default LoginForm;