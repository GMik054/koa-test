import Link from 'next/link';
import {useRouter} from 'next/router';
import {User} from 'react-feather';
import {APICallUrl, Logins, Pleasefillthename, Registers} from '../../Components/Constant';
import {firebase_app} from '../../Config/firebase';
import {Input, Label} from "reactstrap";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectAuth,
    // selectAuth,
    selectLoginToken,
    setAuth,
    setLoginToken,
    setUser,
    signOut
} from "../../ReduxToolkit/Slices/LoginSlice";
import BeforeSignInAccount from "../../Components/Pages/UserDashboard/BeforeSignInAccount";
import AfterSignInAccount from "../../Components/Pages/UserDashboard/AfterSignInAccount ";

const AdminUser = () => {

        const firebaseLogout = () => {
            firebase_app.auth().signOut();
            router.push('/page/login');
        };
        let auth = useSelector(selectAuth)
        return (
            <li className='onhover-dropdown account-dropbox '>
                <div className='cart-media '>
                    <User/>
                </div>
                {auth !== false ?
                    <BeforeSignInAccount/> :
                    <AfterSignInAccount/>
                }
            </li>
        );
    }
;
export default AdminUser;
