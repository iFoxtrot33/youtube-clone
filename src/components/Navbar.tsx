import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { fontWeight } from "@mui/system";

const Navbar: React.FC = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "32px" }}>
        Owl<span className="red">TUBE</span>
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
