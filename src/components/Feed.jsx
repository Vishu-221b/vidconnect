import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { Box, Stack , Typography } from '@mui/material';
import { fetchFromAPI } from "../utils/fetchFromAPI";


const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("Education"); 
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);
    
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
          .then((data) => setVideos(data.items))
        }, [selectedCategory]);

    return(
        <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
            <Box sx={{backgroundColor:"black", height:{ sx: "auto", md: "92vh" }, borderRight:"2px solid #3d3d3d", px: { sx: 0, md: 2 }}}>
            <Sidebar
            selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
            /> 
            <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
                Copyright © 2023 vishu.hehe
            </Typography>
        </Box>
        <Box p={2} sx={{backgroundColor:"black", overflowY: "auto", height: "100vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        {selectedCategory} <span style={{ color: "#2a8cbd" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
        </Box>
        </Stack>
    );
}

export default Feed;