import React from "react";
import { Typography, Button } from '@mui/material'
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';


import SendIcon from '@mui/icons-material/Send';



const Main = () =>{
    return(
        <>
            <hr/>
            <h1>This will be main section</h1>
            <Button color="primary">Check works</Button>
            <Typography>Write some cool text about me</Typography>
            <Skeleton height="200px" variant="text" animation="false"></Skeleton>

            <Button variant="contained" endIcon={<SendIcon />}>  Send</Button>
            <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
          vs. last week
        </Box>
      </Box>
            <hr/>
        </>
    )
}

export default Main