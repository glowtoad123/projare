import React, { useEffect } from 'react'
import { useUser } from "@auth0/nextjs-auth0";
import { LinearProgress } from "@mui/material";
import About from '../components/about'
import Dashboard from '../components/dashboard';


export default function Home() {

    const { user, error, isLoading } = useUser()

    if (isLoading) return <LinearProgress />;
    if (error) return <div>{error.message}</div>;

    return (
        <>
            {user ? <Dashboard nickname={user.nickname} name={user.name} email={user.email}  picture={user.picture} /> : <About />}
            
        </>
    )
}