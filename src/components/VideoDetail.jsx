import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Loader from "./Loader"
import Videos  from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI";


const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
          .then((data) => setVideoDetail(data.items[0]))
    
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
          .then((data) => setVideos(data.items))
      }, [id]);

    

    if(!videoDetail?.snippet) return <Loader />; 
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    

    return (
        <Box>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
        </Box>
      );
    };

export default VideoDetail;