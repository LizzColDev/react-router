import React from 'react'
import { useAuth } from './auth';

function ProfilePage(){
    const auth = useAuth()
console.log(auth.user)
    return(
        <>
            <h1>
                ProfilePage
            </h1>
            <p>Welcome, {auth.user.username} </p>
        </>

    );
};

export {ProfilePage}