import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './App.css';



function App() {
  return (
    <div className="App">
      <Grid container spacing={1} style={{height:'100vh', backgroundColor: '#d0f2d6'}}>
      <Grid item spacing={1} margin={2}>

        <Button variant="contained" color="secondary">Contained</Button>

        <Button variant="contained" color="secondary">Contained</Button>
      </Grid>

      </Grid>
    </div>
  );
}

export default App;
