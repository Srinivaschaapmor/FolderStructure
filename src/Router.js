import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Home from "./Home/Home";
import { Stack } from "@mui/material";
// import Data from "./Data/Data";
// import { Json } from "./dataFolder";
import HomePage from "./LandingPage/HomePage";
import { Data } from "./dataFolder";
const Router = () => {
  const [selectedTab, setSelectedTab] = useState("");
  // console.log(Json);
  return (
    <BrowserRouter>
      <Stack direction={"row"} sx={{ height: "100vh" }}>
        <LandingPage
          // Json={Json}
          Data={Data}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <Routes>
          {/* <Route path="/:item1" element={<Home />}>
            <Route path="/:level1" element={<Data />}></Route>
          </Route> */}
          <Route path="/" element={<HomePage />} />
          <Route
            path="/:item1/:level1/:year/:tab1/:itemOne"
            element={
              <Home
                // Json={Json}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                Data={Data}
              />
            }
          />
          {/* <Route path="/item1/item2" /> */}
          <Route path="*" element={<p>Invalid Path</p>} />
        </Routes>
      </Stack>
    </BrowserRouter>
  );
};

export default Router;
