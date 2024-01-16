import React from "react";
import { List, ListItem, ListItemText, Divider, Box } from "@mui/material"

const BookList = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem>
                            <ListItemText primary="BookList" />
                        </ListItem>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem>
                            <ListItemText primary='Book1'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='BookTUT'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='BookN'/>
                        </ListItem>
                    </List>
                </nav>
            </Box>
    )
}

export default BookList;