import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";

const App = () => {
  return (
      <BrowserRouter>
      <Box sx={{backgroundColor: 'white', height:'100vh'}}>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Feed />} />
        <Route path ="/search/:searchTerm" element = {<SearchFeed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
      </Routes>
      </Box>
      </BrowserRouter>
  )
}

export default App;