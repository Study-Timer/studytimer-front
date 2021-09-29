import React from "react";
import { Card, CardTitle, CardContent, Timer, TimerButton } from "./styles";

function ActivityCard({text, time, name}) {
    return (
        <Card>
          <CardTitle>
         {name}
          </CardTitle>
          <CardContent>
            <Timer>
              <h4>{time}</h4>
            </Timer>
            <TimerButton>
             {text}
            </TimerButton>
          </CardContent>
        </Card>
    );
}

export default ActivityCard;