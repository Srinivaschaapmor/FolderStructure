import React, { useState } from "react";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
// import Data from "../Data/Data";
import ComponentData from "../Data/Data";
function Home({ Json, Data }) {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelected(true);
  };
  // console.log(xyz);
  const [dbStorage, setDbStorage] = useState({});
  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    let updatedValue = [];
    if (Object.keys(dbStorage).includes(location.pathname)) {
      uploadedFiles.map((file) => {
        updatedValue.push(file.name);
      });
      setDbStorage({
        ...dbStorage,
        [location.pathname]: [...dbStorage[location.pathname], ...updatedValue],
      });
    } else {
      setDbStorage({
        ...dbStorage,
        [location.pathname]: uploadedFiles.map((file) => file.name),
      });
    }
  };
  console.log(dbStorage);

  const handleDelete = (index, key) => {
    // console.log({ index, key });
    let tempArray = dbStorage[key];
    tempArray.splice(index, 1);
    setDbStorage({ ...dbStorage, [key]: tempArray });
  };

  const { item1, level1, tab1, year, itemOne } = useParams();
  const params = useParams();

  const location = useLocation();
  const pathname = location.pathname;
  // console.log(`level1:`, location.pathname);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <Box sx={{ backgroundColor: "#FAF9F9", pb: "40px", width: "78%" }}>
      <Container
        sx={{
          // backgroundColor: "#B9B9B9",
          height: "60px",
          padding: "10px",
          mb: 1,
          // width: "100vw",
        }}
      >
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Box sx={{ pt: 1, pl: 2 }}>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
              <Typography>{item1}</Typography>
              <Typography>{level1}</Typography>
              <Typography>{year}</Typography>
              {location.pathname.includes("%20.") ? (
                <Typography color="text.primary">{tab1}</Typography>
              ) : (
                <Typography color="text.primary">{itemOne}</Typography>
              )}
            </Breadcrumbs>
          </Box>
          <Box
            display={"flex"}
            width={"250px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            sx={{ height: 40, mr: 4 }}
            // gap={"20px"}
          >
            <FormControl>
              <Select
                // label="Select Year"
                defaultValue={"2023-2024"}
                // sx={{ minWidth: 150 }}
                sx={{
                  borderRadius: 0,
                  fontSize: "14px",
                  minWidth: 150,
                  color: "black",
                  backgroundColor: "white",
                  // width:"100%",
                  "& .MuiInputBase-root": {
                    fontSize: "0.8rem", // Adjust font size
                    borderRadius: 0,
                    color: "black",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": {
                    padding: "8.5px 14px",
                    color: "black",
                  },
                }}

                // placeholder="Select year"
              >
                <MenuItem value={"2021-2022"}>
                  <Link
                    to={`/${item1}/${level1}/${"2021-2022"}/${tab1}/${
                      itemOne ? itemOne : "%20."
                    }`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    2021-2022
                  </Link>
                </MenuItem>
                <MenuItem value={"2022-2023"}>
                  <Link
                    to={`/${item1}/${level1}/${"2022-2023"}/${tab1}/${
                      itemOne ? itemOne : "%20."
                    }`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    2022-2023
                  </Link>
                </MenuItem>
                <MenuItem value={"2023-2024"}>
                  <Link
                    to={`/${item1}/${level1}/${"2023-2024"}/${tab1}/${
                      itemOne ? itemOne : "%20."
                    }`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    2023-2024
                  </Link>
                </MenuItem>
              </Select>
            </FormControl>
            {/* <IconButton onClick={handleClick}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </IconButton>
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
            </Menu> */}
            <Stack direction={"row"} justifyContent={"end"} sx={{ mr: -4 }}>
              <label htmlFor="file-upload">
                <Button
                  component="span"
                  sx={{
                    backgroundColor: "#816eff",
                    ":hover": { backgroundColor: "#6758cc" },
                    color: "white",
                    // width: "10px",
                    // fontSize: "10px",
                    // borderRadius: 0,
                    // padding: 0,
                  }}
                >
                  <UploadFileOutlinedIcon />
                  UPLOAD
                </Button>
              </label>
              <input
                type="file"
                multiple
                id="file-upload"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
      {/* <Data /> */}
      <ComponentData
        Data={Data}
        dbStorage={dbStorage}
        setDbStorage={setDbStorage}
        handleDelete={handleDelete}
      />
    </Box>
  );
}

export default Home;
