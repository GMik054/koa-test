import React from 'react';
import {signOut} from "../../../ReduxToolkit/Slices/LoginSlice";
import {useDispatch} from "react-redux";
import Link from 'next/link';

const AfterSignInAccount = () => {
    let dispatch = useDispatch();
    return (
        <div className='onhover-div profile-dropdown' style={{minWidth: "300px"}}>
            <div className='profile-dropdown-div' style={{marginBottom: "12px", paddingBottom: "12px"}}>
                <h3>ACCOUNT</h3>
                <Link href={'/page/my-account'}><h4>My Account</h4></Link>
                <h4>My Lists</h4>
                <h4>View Orders</h4>
                <h4>View Projects</h4>
            </div>
            <h4 onClick={() => dispatch(signOut())}>Sign Out</h4>
        </div>
    );
};

export default AfterSignInAccount;