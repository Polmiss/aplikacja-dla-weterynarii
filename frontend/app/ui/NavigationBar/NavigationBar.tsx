"use client"

import Button from "../Button/Button";
import {useRouter} from "next/navigation";
import styles from "./NavigationBar.module.css";

export default function  NavigationBar()
{
    const router = useRouter();

    function goTo(where : string): void{
        router.push("/" + where);
    }

    return (
        <div className={styles.container}>
            <Button label="home" onClick={() => goTo("/")}/>
            <Button label="login" onClick={() => goTo("Login")}/>
            <Button label="..."/>
        </div>
    );

}