import React from "react";
import { Paper } from '@mui/material';

function Rainy() {
    return(
        <h1>Bring your umbrella</h1>
    )
}
function Sunny() {
    return(
        <h1>Bring your sunglasses</h1>
    )
}
const isRainy = true;

function RainOrShine(props) {
    const isRainy = props.isRainy;
    return isRainy ? <Rainy/>:<Sunny/>;
}

const Demo4 = () => {
    return (
        <div className={`${isRainy === true ? 'dark':'light'}`}>
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
                <h1>Demo4</h1>
                <RainOrShine/>
            </Paper>
        </div>
    )
}

export default Demo4;