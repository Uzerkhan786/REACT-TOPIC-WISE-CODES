
import { useEffect } from "react"
export default function UseEffect() {
    useEffect(() => {
        console.log('uzer khan ha useEffect');
    }, []);
    // this is called first ,after this the component re-render,and useEffect function call after 
    // that and re-render
    console.log('uzer khan from VIT bhopal');
    return (
        <>
            <h1>useEffect is called after the component render</h1>
        </>
    )
}

