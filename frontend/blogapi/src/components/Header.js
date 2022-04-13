import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
}))


function Header() {
    const classes = useStyles();

  return (
    <>
        <CssBaseline />
        <AppBar 
            position="static" 
            color="default" 
            elevation={0} 
            className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap>
                  React Blog
                </Typography>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header