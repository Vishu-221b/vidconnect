import { Typography, Box } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);


    return(
        <Box sx={{backgroundColor:"black"}} p={2} minHeight="95vh">
            <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
              Search Results for <span style={{ color: "#2a8cbd" }}>{searchTerm}</span> videos
            </Typography>

            <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
        </Box>
    )
}

export default SearchFeed;