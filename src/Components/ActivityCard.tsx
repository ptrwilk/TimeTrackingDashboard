import { Box, IconButton, Typography } from "@mui/material";
import "./ActivityCard.scss";
import {
  IconEllipsis,
  IconEllipsisWhite,
  IconExercise,
  IconPlay,
  IconSelfCare,
  IconSocial,
  IconStudy,
  IconWork,
} from "../assets";
import { useState } from "react";

export enum Color {
  Orange = "orange",
  Blue = "blue",
  Red = "red",
  Green = "green",
  Violet = "violet",
  Yellow = "yellow",
}

interface IActivityCardProps {
  title?: string;
  timeCurrent?: number;
  timePrev?: number;
  color?: Color;
}

const ActivityCard: React.FC<IActivityCardProps> = ({
  title,
  timePrev,
  timeCurrent,
  color = Color.Orange,
}) => {
  const map: { [Key in Color]: { color: string; icon: any } } = {
    [Color.Orange]: { color: "var(--lightredwork)", icon: IconWork },
    [Color.Blue]: { color: "var(--softblueplay)", icon: IconPlay },
    [Color.Red]: { color: "var(--lightredstudy)", icon: IconStudy },
    [Color.Green]: { color: "var(--limegreenexercise)", icon: IconExercise },
    [Color.Violet]: { color: "var(--violetsocial)", icon: IconSocial },
    [Color.Yellow]: { color: "var(--softorangeselfcare)", icon: IconSelfCare },
  };

  const [ellipsisHover, setEllipsisHover] = useState(false);

  return (
    <Box id="ActivityCard" style={{ background: map[color].color }}>
      <img className="img-icon" src={map[color].icon} />
      <Box className="section">
        <Typography className="title">{title}</Typography>
        <IconButton
          className="btn-ellipsis"
          onMouseEnter={() => setEllipsisHover(true)}
          onMouseLeave={() => setEllipsisHover(false)}
        >
          <img src={ellipsisHover ? IconEllipsisWhite : IconEllipsis} />
        </IconButton>
        <Typography className="time-current">{timeCurrent}hrs</Typography>
        <Typography className="time-prev">Last Week - {timePrev}hrs</Typography>
      </Box>
    </Box>
  );
};

export { ActivityCard };
