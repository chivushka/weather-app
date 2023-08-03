import React from 'react';
import './main.scss';
import LeftSide from "../../components/leftSide/LeftSide";
import RightSide from "../../components/rightSide/RightSide";

const Main = () => {
    return (
        <div className="container-main">
            <LeftSide></LeftSide>
            <RightSide></RightSide>
        </div>
    );
};

export default Main;