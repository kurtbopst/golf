import { Typography } from "@mui/material";
import PageSkeleton from "./pageSkeleton";

const HistoryPage = () => {
  return (
    <PageSkeleton>
      <Typography variant="h4">History</Typography>
      <Typography variant="subtitle1">
        See golfers scores throughout all time
      </Typography>
    </PageSkeleton>
  );
};

export default HistoryPage;
