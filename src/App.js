import { Container } from '@mui/system';
import { Box, Typography } from '@mui/material';

import './style/App.css';
import Main from './main/Main';
import Stack from './stack/Stack';
import Contact from './contact/Contact'



function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Site is under construction
        </Typography>

      </Box>
      <Main/>
      <Stack/>
      <Contact/>
    </Container>
    </div>
  );
}

export default App;
