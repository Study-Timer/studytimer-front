import React from "react";
import { Card, CardTitle, CardContent, Timer, TimerButton } from "./styles";

function ActivityCard() {
    return (
        <Card>
          <CardTitle>
            <input type="text" />
          </CardTitle>
          <CardContent>
            <Timer>
              <h4>00:00:00</h4>
            </Timer>
            <TimerButton>
              Start
            </TimerButton>
          </CardContent>
        </Card>
    );
}

export default ActivityCard;