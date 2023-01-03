import { render } from "@testing-library/react";
import React from "react";
import { Typography, Button } from '@mui/material'

const Main = () =>{
    return(
        <>
            <hr/>
            <h1>This will be main section</h1>
            <Button color="primary">Check works</Button>
            <Typography>Write some cool text about me</Typography>
            <hr/>
        </>
    )
}

export default Main