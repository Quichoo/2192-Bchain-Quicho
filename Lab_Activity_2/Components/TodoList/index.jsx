import React from "react"
import { List, ListItem, ListItemText, Divider, Box } from "@mui/material"

class TodoList extends React.Component {
    render(){
        return(
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem>
                            <ListItemText primary="TodoList" />
                        </ListItem>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem>
                            <ListItemText primary='Clean Porch'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Wash Car'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Attend Bchain Class'/>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        )
    }
    
}
export default TodoList;