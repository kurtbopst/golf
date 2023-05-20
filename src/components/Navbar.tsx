import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Router from "next/router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-solid-svg-icons";
import { faMedal } from "@fortawesome/pro-duotone-svg-icons";
import { faBooks } from "@fortawesome/sharp-solid-svg-icons";

const NavBar = () => {
  const [value, setValue] = useState<string>("home");

  const handlePress = async (route: string) => {
    await Router.push(`/${route}`);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue: string) => {
          setValue(newValue);
          void Router.push(`/${event.currentTarget.id}`);
        }}
      >
        <BottomNavigationAction
          label="Add"
          id="new"
          icon={<FontAwesomeIcon icon={faPlus} />}
        />
        <BottomNavigationAction
          label="Rankings"
          id="rankings"
          icon={<FontAwesomeIcon icon={faMedal} />}
        />
        <BottomNavigationAction
          label="History"
          id="history"
          icon={<FontAwesomeIcon icon={faBooks} />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default NavBar;
