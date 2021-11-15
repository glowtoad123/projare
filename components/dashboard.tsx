/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { userInfo } from "os"
import Navbar from "./navbar"

export default function Dashboard(props: any){

    return (
        <>
            <Navbar />
            <p>nickname: {props.nickname}</p>
            <p>name: {props.name}</p>
            <p>email: {props.email}</p>
            <img src={props.picture} alt="profile picture" />
        </>
    )
}