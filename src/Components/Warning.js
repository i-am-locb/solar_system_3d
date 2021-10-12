import React from "react";
import { useDispatch } from "react-redux";
import { toggleConfirm } from "../Redux/confirm_reducer"

let dispatch = useDispatch

export default function Warning(props) {

    let onClick = () => {
        props.store.dispatch(toggleConfirm())
    }

    return <>
        <div>Warning</div>
        <button onClick={onClick}>OK</button>
    </>
}