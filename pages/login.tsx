import React from 'react'
import {useSession,signIn,signOut} from 'next-auth/react'


export default function login() {
    const {data:session} = useSession()

if(session){
    return(
        <div>
        <h1 style={{textAlign:"center"}}>Welcome to home {session.user?.name}</h1>

        <button onClick={()=>signOut()} style={{background:"red",borderRadius:"25px",
        width:"125px",height:"35px",fontSize:"20px",color:"white",
        borderColor:"transparent",marginLeft:"625px"}}>SignOut</button>
        </div>
    )
}else{
    return (
        <div>
        <h2 style={{textAlign:"center"}}>You are not signed in</h2>

        <button onClick={()=>signIn()} style={{background:"green",borderRadius:"25px",
        width:"125px",height:"35px",fontSize:"20px",color:"white",
        borderColor:"transparent",marginLeft:"625px"}}>SignIn </button>
        </div>
      )
}

 
}
