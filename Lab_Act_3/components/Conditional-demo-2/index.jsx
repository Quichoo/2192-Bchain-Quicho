import React from "react";
import { Paper } from '@mui/material';

function Rainy() {
    return(
        <h1>Bring your umbrella</h1>
    )
}

function RainOrShine(props) {
    const isRainy = props.isRainy;
    if(isRainy) {
        return(
            <Rainy/>
        );
    }
    return(
        <h1>No Rain Today</h1>
    )
}

const Demo2 = () =>{
    return(
        <div>
            <Paper
            elevation={6} 
            sx={{
                height: '40vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '0 20px'
            }}
            gap={8}>
                <h1>Demo2</h1>
                <RainOrShine isRainy={true}/>
            </Paper>
        </div>
    )
}

export default Demo2;