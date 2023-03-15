import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-light-svg-icons";
import { faUser } from "@fortawesome/pro-regular-svg-icons";

const Duotone = styled.i`
  --fa-primary-color: red;
  --fa-secondary-color: lightgreen;
`;

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link href="/Home">
          <Duotone className="fa-duotone fa-golf-flag-hole text-white mr-2" />
          <h1 className="text-white text-lg font-medium hidden md:block">
            Big Jeff's Golfing Fun Times
          </h1>
        </Link>

        <Link href="/profile">
          Profile
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: "none" } }}
          onClick={handleMenuClick}
        >
          {menuOpen ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
