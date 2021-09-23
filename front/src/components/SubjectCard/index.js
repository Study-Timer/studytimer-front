import React from "react";
import { Card, CardItem, CardItens, CardHeader, HeaderButtons } from "./style";
import { LayoutSwitcher } from "../../utils/layoutswitcher";
import edit from "../../assets/edit-icon.svg";
import trash from "../../assets/trash.svg";
import arrow from "../../assets/arrow-up.svg";

function SubjectCard({ name, time, index, setIndex }) {
  return (
    <Card>
      <CardHeader>
        <h1>{name}</h1>
        <HeaderButtons>
          <img
            alt="hoje"
            onClick={() => LayoutSwitcher(3)}
            src={arrow}
            style={{ width: "17px", height: "17px", cursor: "pointer" }}
          ></img>
          <img
            onClick={() => setIndex(!index)}
            alt="hoje"
            src={edit}
            style={{ width: "17px", height: "17px", cursor: "pointer" }}
          ></img>
          <img
            alt="hoje"
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
  );
}

export default SubjectCard;
