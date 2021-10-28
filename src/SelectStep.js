import React from "react";
import { PIERRE, FEUILLE, CISEAU, } from "./index";

const Button = (props) => {
    const {coup, jouer} = props;

    const buttonStyle = {
        border: 0,
        backgroundColor: "",
        borderRadius: 242,
        width: 224,
        height: 224,
        margin: "0 30px"
    }

    const imageStyle = {
        width: "100%",
        height: "auto"
    }

    const imageSrc = {
        [PIERRE]: "public/pierre.svg",
        [FEUILLE]: "public/feuille.svg",
        [CISEAU]: "public/ciseaux.svg"
    }

    return <button onClick={() => jouer(coup)} style={buttonStyle}>
        <img style={imageStyle} src={imageSrc[coup]} />
    </button>
}

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

    const buttonContainerStyle = {
        display: "flex",
    }

    return  <div style={containerStyle}>
        <h1 style={titleStyle}>Choisis bien&nbsp;!</h1>
        <div style={buttonContainerStyle}>
            <Button jouer={jouer} coup={PIERRE} />
            <Button jouer={jouer} coup={FEUILLE} />
            <Button jouer={jouer} coup={CISEAU} />
        </div>
    </div>
}

export default SelectStep;