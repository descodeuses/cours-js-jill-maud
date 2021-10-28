import React from "react";
import { PIERRE, FEUILLE, CISEAU, } from "./index";

const SelectStep = (props) => {
    const jouer = props.jouer;

    return  <>
        <button onClick={() => jouer(PIERRE)}>Pierre</button>
        <button onClick={() => jouer(FEUILLE)}>Feuille</button>
        <button onClick={() => jouer(CISEAU)}>Ciseau</button>
    </>
}

export default SelectStep;