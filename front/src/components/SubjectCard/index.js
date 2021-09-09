import React from 'react';
import { Card, CardItem, CardItens, CardHeader, HeaderButtons } from "./style";

import edit from "../../assets/edit-icon.svg";
import trash from "../../assets/trash.svg";
import arrow from "../../assets/arrow-up.svg";

function SubjectCard ({name, time}) {
    return(
        <Card>
            <CardHeader>
            <h1>{name}</h1>
            <HeaderButtons>
            <img
            src={arrow}
            style={{ width: "17px", height: "17px", cursor: "pointer" }}
            ></img>
            <img
            src={edit}
            style={{ width: "17px", height: "17px", cursor: "pointer" }}
            ></img>
            <img
            src={trash}
            style={{ width: "17px", height: "17px", cursor: "pointer" }}
            ></img>
            </HeaderButtons>
            </CardHeader>
            <CardItens>
            <CardItem>
                <p>Per day</p>
                <h2>{time}</h2>
                <p>minutes</p>
            </CardItem>
            </CardItens>
        </Card>
    )
}

export default SubjectCard;