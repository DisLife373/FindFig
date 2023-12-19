import React from "react";
import './ShowcaseComp.css';
import ShowItem from "../ShowItem";


function ShowcaseComp(){
    return(
        <div id="wrapper">
            <main id="mainbody">
                <div className="layoutmain">
                <div id="content" className="large-12" role="main"></div>
                    <ShowItem></ShowItem>
                </div>
            </main>
        </div>


    );
}

export default ShowcaseComp;