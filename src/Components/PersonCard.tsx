import { Box, List, ListItem, Typography } from "@mui/material";
import "./PersonCard.scss";
import { ImageJeremy } from "../assets";
import classNames from "classnames";

export enum Period {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}

interface IPersonCardProps {
  className?: string;
  selectedPeriod?: Period;
  onClick?: (period: Period) => void;
}

const PersonCard: React.FC<IPersonCardProps> = ({
  className,
  selectedPeriod,
  onClick,
}) => {
  return (
    <Box id="PersonCard" className={className}>
      <Box className="section-top">
        <img className="img-jeremy" src={ImageJeremy} />
        <Typography className="text">
          Report for
          <span className="name">Jeremy Robson</span>
        </Typography>
      </Box>
      <List className="items">
        {Object.values(Period).map((period, key) => (
          <ListItem
            className="item"
            key={key}
            onClick={() => onClick?.(period)}
          >
            <Typography
              className={classNames("text", {
                "text-selected": selectedPeriod === period,
              })}
            >
              {period}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export { PersonCard };
