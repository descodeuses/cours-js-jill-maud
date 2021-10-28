import React from "react";
import { PIERRE, FEUILLE, CISEAU, } from "./index";

const SelectStep = (props) => {
    const jouer = props.jouer;

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }

    const titleStyle = {
        fontSize: "86.2976px",
        textTransform: "uppercase",
        color: "#2818DF",
        margin: 0,
    }

    return  <div style={containerStyle}>
        <h1 style={titleStyle}>Choisis bien&nbsp;!</h1>
        <button onClick={() => jouer(PIERRE)}>Pierre</button>
        <button onClick={() => jouer(FEUILLE)}>Feuille</button>
        <button onClick={() => jouer(CISEAU)}>Ciseau</button>
    </div>
}

export default SelectStep;