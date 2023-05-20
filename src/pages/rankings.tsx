import { Typography } from "@mui/material";
import { useState } from "react";
import { RankedGolfer } from "~/components/rankedGolfer";
import PageSkeleton from "./pageSkeleton";

const RankingsPage = () => {
  const [rankings] = useState([
    {
      golferId: 2,
      name: "Big Jeff",
      handicap: 12,
    },
    {
      golferId: 3,
      name: "Dave Scott",
      handicap: 14,
    },
    {
      golferId: 23,
      name: "Bobby Lukas",
      handicap: 15,
    },
    {
      golferId: 1,
      name: "Medium Jeff",
      handicap: 18,
    },
  ]);

  return (
    <PageSkeleton>
      <Typography variant="h4">Rankings</Typography>
      <Typography variant="subtitle1">
        See where golfers stand and their calculated handicaps with the 10 games
        associated.
      </Typography>
      {rankings.map((golfer, index) => (
        <RankedGolfer
          key={index}
          golferId={golfer.golferId}
          name={golfer.name}
          handicap={golfer.handicap}
          placement={index + 1}
        ></RankedGolfer>
      ))}
    </PageSkeleton>
  );
};

export default RankingsPage;
