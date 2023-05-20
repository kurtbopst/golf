import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import PageSkeleton from "./pageSkeleton";

interface User {
  name: string;
  location: string;
  handicap: number;
}

interface GolfScore {
  rawScore: number;
  threePutts: number;
  sandies: number;
  entryDate: Date;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [scores, setScores] = useState<GolfScore[]>([]);

  useEffect(() => {
    // Fetch user data and golf scores here
    const fetchUserData = () => {
      setUser({ name: "Steve Ivey", location: "Palm Coast", handicap: 13.2 });
    };
    const fetchGolfScores = () => {
      setScores([
        {
          rawScore: 123,
          threePutts: 2,
          sandies: 0,
          entryDate: new Date(2023, 8, 13),
        },
        {
          rawScore: 112,
          threePutts: 0,
          sandies: 0,
          entryDate: new Date(2023, 6, 23),
        },
        {
          rawScore: 123,
          threePutts: 2,
          sandies: 0,
          entryDate: new Date(2023, 2, 3),
        },
      ]);
    };
    fetchUserData();
    fetchGolfScores();
  }, []);

  return (
    <>
      <PageSkeleton>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Avatar sx={{ width: 120, height: 120 }} />
          <Typography variant="h4" mt={2}>
            {user?.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {user?.location}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {user?.handicap} handicap
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Best Score
                </Typography>
                <Typography variant="h3" color="primary">
                  {scores.length > 0
                    ? Math.min(...scores.map((score) => score.rawScore))
                    : "-"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Average Score
                </Typography>
                <Typography variant="h3" color="primary">
                  {scores.length > 0
                    ? Math.round(
                        scores.reduce((acc, score) => acc + score.rawScore, 0) /
                          scores.length
                      )
                    : "-"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Total Rounds
                </Typography>
                <Typography variant="h3" color="primary">
                  {scores.length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Sandies
                </Typography>
                <Typography variant="h3" color="primary">
                  {scores.length > 0
                    ? scores.reduce((acc, score) => acc + score.sandies, 0)
                    : "-"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h5" mb={2}>
            Golf Scores
          </Typography>
          <Divider />
          <List sx={{ mt: 2 }}>
            {scores.map((score, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar>{index + 1}</Avatar>
                </ListItemAvatar>
                {/* <ListItemText primary={score} /> */}
              </ListItem>
            ))}
          </List>
        </Box>
      </PageSkeleton>
    </>
  );
};

export default Profile;
