import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { Box, Stack , Typography } from '@mui/material';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New"); 
    return(
        <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
            <Box sx={{backgroundColor:"black", height:{ sx: "auto", md: "92vh" }, borderRight:"5px solid green", px: { sx: 0, md: 2 }}}>
            <Sidebar
            selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
            /> 
            <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
                Copyright © 2023 vishu
            </Typography>
        </Box>
        <Box p={2} sx={{backgroundColor:"blue", overflowY: "auto", height: "100vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
            <Videos />
        </Box>
        </Stack>
    );
}

export default Feed;