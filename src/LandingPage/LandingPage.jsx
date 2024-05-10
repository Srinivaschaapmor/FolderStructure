import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Home from "../Home/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useLocation } from "react-router-dom";
function LandingPage({ Json, selectedTab, setSelectedTab, Data }) {
  // console.log(selectedTab);
  // const e3 = Data[]
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const location = useLocation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <Stack
      direction={"row"}
      sx={{ backgroundColor: "#FAF9F9", flexBasis: "22%" }}
    >
      <Box
        sx={{
          border: "1px solid white ",
          width: "100%",
          // boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.1)",
          height: "100%",
          // flexBasis: "60%",
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: "rgb(103, 88, 204)" }}
        >
          <Typography variant="h4" sx={{ pb: 5, pl: 2 }}>
            FOLDER
          </Typography>
        </Link>

        {Object.keys(Data).map((e, index) => (
          <Box key={index}>
            <Accordion
              elevation={0}
              expanded={expandedIndex === index}
              onChange={() => handleAccordionChange(index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography>{e}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack>
                  {Object.keys(Data[e]).map((e1, i) => (
                    <Link
                      key={i}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                      to={
                        Object.values(Data[e][e1])[0].length > 0
                          ? `/${e}/${e1}/2023-2024/${
                              Object.keys(Data[e][e1])[0]
                            }/${
                              Object.entries(
                                Object.values(Data[e][e1])[0]
                              )[0]?.[1]
                            }`
                          : `/${e}/${e1}/2023-2024/${
                              Object.keys(Data[e][e1])[0]
                            }/ .`
                      }
                    >
                      <Button
                        sx={{
                          backgroundColor: location.pathname.includes(e1)
                            ? "#BFB6FF"
                            : null,
                          color: location.pathname.includes(e1)
                            ? "white"
                            : "black",
                          width: "90%",
                          ":hover": { backgroundColor: "#E1DDFF" },
                        }}
                      >
                        {e1}
                      </Button>
                    </Link>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
        <Box sx={{ position: "absolute", bottom: 3, mb: 3 }}>
          <Button
            onClick={handleClick}
            sx={{ ":hover": { backgroundColor: "white" } }}
          >
            <Avatar alt="Remy Sharp" sx={{ backgroundColor: "#E1DDFF" }} />
            <Typography sx={{ pl: 2, fontSize: 15, color: "black" }}>
              {" "}
              Test
            </Typography>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Stack>
  );
}
export default LandingPage;
