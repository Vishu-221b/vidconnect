import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import SearchFeed from "./components/SearchFeed";

const App = () => {
  return (
      <BrowserRouter>
      <Box sx={{backgroundColor: 'white', height:'100vh'}}>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Feed />} />
        <Route path ="/search/:searchTerm" element = {<SearchFeed />} />
      </Routes>
      </Box>
      </BrowserRouter>
  )
}

export default App;