import React from "react";

const ScoreBoard = (props) => {
    let mainStyle = {
        backgroundColor: "#FFFFFF",
        position: "absolute",
        top: 0,
        right: 0,
        border: 0,
        padding: "20px 35px",
        fontSize: "64.248px",
        lineHeight: "83px",
    };

    return <div style={mainStyle}>
        <span style={{color: "#2818DF"}}>
            {props.scoreJoueuse}
            </span> - <span style={{color: "#DA1717"}}>
                {props.scoreOrdi}
            </span>
    </div>;
}

export default ScoreBoard;