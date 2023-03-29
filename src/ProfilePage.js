import React from 'react'
import { useAuth } from './auth';

function ProfilePage(){
    const auth = useAuth()
    console.log(auth)
    return(
        <>
            <h1>
                ProfilePage
            </h1>
            <p>Welcome, {auth.user} </p>
        </>

    );
};

export {ProfilePage}