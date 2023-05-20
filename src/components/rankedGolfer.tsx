import { faAngleDown, faTrophy } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface Golfer {
  golferId: number;
  name: string;
  handicap: number;
  placement: number;
}

export const RankedGolfer: FC<Golfer> = ({
  golferId,
  name,
  handicap,
  placement,
}) => {
  const TrophyColor: { [id: number]: string } = {
    1: "gold",
    2: "silver",
    3: "brown",
  };

  return (
    <Accordion key={placement}>
      <AccordionSummary expandIcon={<FontAwesomeIcon icon={faAngleDown} />}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
            paddingRight: "8px",
          }}
        >
          {placement <= 3 ? (
            <FontAwesomeIcon icon={faTrophy} color={TrophyColor[placement]} />
          ) : (
            <Typography variant="h5" style={{ paddingLeft: "8px" }}>
              {placement}
            </Typography>
          )}

          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">Handicap: {handicap}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <RecordHistory></RecordHistory>
      </AccordionDetails>
    </Accordion>
  );
};

export const RecordHistory = () => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Total Score</TableCell>
            <TableCell>3 Putts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell>12/3</TableCell>
          <TableCell>88</TableCell>
          <TableCell>2</TableCell>
        </TableBody>
      </Table>
    </Paper>
  );
};
