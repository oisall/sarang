import 'antd/dist/antd.css';
import { PropTypes } from 'prop-types';
import React from 'react';
import Head from 'next/head';
import wrapper from '../store/configureStore'

const PickMe = ({ Component }) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>PICK-ME</title>
        </Head>
        <Component />
        </>
    )
};
 PickMe.propTypes = {
    Component: PropTypes.elementType.isRequired,
}


export default wrapper.withRedux(PickMe); 