import React from "react";
import { PIERRE, FEUILLE, CISEAU, } from "./index";

const Button = (props) => {
    const {coup, jouer} = props;

    const imageStyle = {
        width: "100%",
        height: "auto"
    }

    const imageSrc = {
        [PIERRE]: "public/pierre.svg",
        [FEUILLE]: "public/feuille.svg",
        [CISEAU]: "public/ciseaux.svg"
    }

    const handleClick = (e) => {
        e.stopPropagation();
        jouer(coup);
    }

    return <>
        <style jsx>{`
            button {
                border: 0;
                background-color: #FFF;
                border-radius: 242px;
                width: 224px;
                height: 224px;
                margin: 0 30px;
                transition: all 0.2s;
            }

            button:hover {
                border: 10px solid rgba(40, 24, 223, 0.5);
                width: 252px;
                height: 252px;
                margin: 0 16px;
            }
        `}
        </style>
        <button onClick={handleClick}>
            <img style={imageStyle} src={imageSrc[coup]} />
        </button>
    </>;
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
        height: "252px",
        alignItems: "center"
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