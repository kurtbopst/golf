import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import PageSkeleton from "./pageSkeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateAccount: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
  };

  return (
    <PageSkeleton>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create Account
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: "100%", marginTop: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoFocus
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: 3, marginBottom: 2 }}
            >
              Create Account
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<FontAwesomeIcon icon={} />}
                  onClick={() => console.log("Login with Facebook")}
                >
                  Log in with Facebook
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </PageSkeleton>
  );
};

export default CreateAccount;
