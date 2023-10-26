import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Box sx={{bgcolor: '#000', p:20, borderRadius:4}}>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Feed />} />
      </Routes>
      </Box>
      </BrowserRouter>
    </div>
  )
}

export default App;