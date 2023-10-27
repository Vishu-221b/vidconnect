import {Box, Stack, CircularProgress} from '@mui/material';

const Loader = () => {
    return(
    <div>
        <Box minHeight="95vh">
           <Stack sx={{ backgroundColor: "orange" }} direction ="row" justifyContent='center' alignItems='center' height='80vh'>
              <CircularProgress />
           </Stack> 
        </Box>
    </div>
)}
    


export default Loader;