import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, FormControl, TextField } from "@mui/material";
import Head from "next/head";
import TopBar from "~/components/TopBar";
import Navbar from "~/components/Navbar";

const inputStyle = {
  padding: "4px",
  margin: "4px",
};

const Record = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>New</title>
      </Head>
      <TopBar />
      <Navbar />
      <div className="main">
        <div className="container">
          <h3 style={{ color: "white" }}> Add your newest golf record</h3>

          <form
            noValidate
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={handleSubmit}
          >
            <FormControl style={inputStyle}>
              <TextField
                color="primary"
                id="overall-score"
                type="number"
                label="Overall Score"
                fullWidth
              ></TextField>
            </FormControl>

            <FormControl style={inputStyle}>
              <TextField
                color="primary"
                id="three-putts"
                type="number"
                label="3 Putts"
                fullWidth
              ></TextField>
            </FormControl>

            <FormControl style={inputStyle}>
              <TextField
                color="primary"
                id="sandies"
                type="number"
                label="Sandies"
                fullWidth
              ></TextField>
            </FormControl>

            <Button
              style={inputStyle}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Record;
