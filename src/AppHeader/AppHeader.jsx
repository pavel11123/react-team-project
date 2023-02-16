import React from 'react';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const AppHeader = () => {
   
    return (
        <AppBar position='sticky'>
            <Container fixed>
                <Toolbar>
                    <IconButton 
                    edge='start'
                    size='large'
                    color='inherit'
                    aria-label="menu"
                    >
                        <CookieIcon /> 
                    </IconButton>
                    <Typography 
                    variant='h6'
                    sx={{ flexGrow: 1 }}>                    
                    React-team-project
                    </Typography>
                    <IconButton 
                    edge='start'
                    size='large'
                    color='inherit'
                    
                    >
                        < AccountCircleIcon /> 
                    </IconButton>
                </Toolbar>
            </Container>
            
        </AppBar>
    )
};

export default AppHeader;