
import React, { useCallback } from "react";
import { PropTypes } from "prop-types";
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import Router  from "next/router";
import useInput from "../hooks/useInput";

const SearchInput = styled(Input.Search)`
vertical-align: middle;
`
const Global = createGlobalStyle`
.ant-row{
    margin-right: 0 !important;
    margin-left: 0 !important;
}

.ant-col:first-child{
    padding-left:0 !important;
}

.ant-col:last-child{
    padding-right:0 !important;
}

`


const AppLayout = ({ children }) => {
    const {me} = useSelector((state) => state.user);
    const [searchInput, onChangeSearchInput] =useInput('');
    const onSearch = useCallback(()=>{
        Router.push(`/hashtag/${searchInput}`)
    },[searchInput])
    return (
        <div>
            <Global/>
            <Menu mode='horizontal'>
                <Menu.Item key="1">
                    <Link href='/'><a>트위터같은거지</a></Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link href='/profile'><a>profile</a></Link>

                </Menu.Item>
                <Menu.Item key="3">
                    <SearchInput enterButton 
                    value={searchInput} 
                    onChange={onChangeSearchInput}
                    onSearch={onSearch}
                    />
                </Menu.Item>

            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}>
                    <a href="https://www.naver.com" target="_blank" rel="noreferrer">Go to naver</a>
                </Col>
            </Row>

        </div>
    );
};


AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;