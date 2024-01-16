import React from "react";
import { Button, Paper } from "@mui/material";

function Greeting(){
    return(
        <h1>Hello! I am a standard function.</h1>
    );
}

const ArrowGreeting = () => {
    <h1>Hello! I am a standard function.</h1>
}

function Demo1() {
    const handleClick = () => {
        alert("You clicked me!");
    }
    return(
        <>
            <Paper
            elevation={6} 
            sx={{
                padding: '40px',
                height: '40vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '0 20px'
            }}
            gap={8}>
                <h1>Demo1</h1>      
                <Button variant="outlined" onClick={handleClick}>
                    Click This Button!
                </Button>
            </Paper>
        </>
    )
}

export default Demo1;