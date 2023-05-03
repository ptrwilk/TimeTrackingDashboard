import { Box, List, ListItem } from "@mui/material";
import "./TimeTrackingDashboard.scss";
import { ActivityCard, Color, Period, PersonCard } from "../Components";
import data from "../data.json";
import { useState } from "react";

type Activity = "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care";

type CardItem = {
  title: Activity;
  timeframes: any;
};

const TimeTrackingDashboard = () => {
  const [period, setPeriod] = useState<Period>(Period.Weekly);

  const items: CardItem[] = data.map((d) => ({
    title: d.title as Activity,
    timeframes: d.timeframes,
  }));

  const activityToColor: {
    [key in Activity]: Color;
  } = {
    Work: Color.Orange,
    Play: Color.Blue,
    Study: Color.Red,
    Exercise: Color.Green,
    Social: Color.Violet,
    "Self Care": Color.Yellow,
  };

  return (
    <Box id="TimeTrackingDashboard">
      <PersonCard
        className="person-card"
        selectedPeriod={period}
        onClick={(period) => setPeriod(period)}
      />
      <List className="cards">
        {items.map(({ title, timeframes }, key) => (
          <ListItem className="card" key={key}>
            <ActivityCard
              title={title}
              timeCurrent={timeframes[period].current}
              timePrev={timeframes[period].previous}
              color={activityToColor[title]}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TimeTrackingDashboard;
