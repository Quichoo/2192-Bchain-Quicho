import React from "react"
import { List, ListItem, ListItemText, Divider, Box } from "@mui/material"

class MovieList extends React.Component {
    render(){
        return(
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem>
                            <ListItemText primary="MovieList" />
                        </ListItem>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem>
                            <ListItemText primary='Movie1'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Movie2'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='MovieN'/>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        )
    }
    
}
export default MovieList;