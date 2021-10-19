import React from "react";
import { useDispatch } from "react-redux";
import { toggleConfirm } from "../Redux/Confirm/confirm_AC";
import { getPlanets } from "../Redux/Planets/planets_AC";

export default function Warning(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div>Warning</div>
      <button
        onClick={() => {
          dispatch(toggleConfirm());
          dispatch(getPlanets());
        }}
      >
        OK
      </button>
    </>
  );
}
