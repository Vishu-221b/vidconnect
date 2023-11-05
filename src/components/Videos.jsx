import Loader from "./Loader";
import VideoCard from "./VideoCard";
import { Box, Stack }  from '@mui/material';


const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
         {videos.map((item, idx) => {
            return(
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} /> }
                </Box>
            )
         })}
        </Stack>
        
    )
}

export default Videos;