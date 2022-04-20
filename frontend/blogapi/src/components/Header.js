import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom'
import SearchBar from "material-ui-search-bar";



const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));

function Header() {
    let history = useNavigate();
    const [data,setData] = useState({search:''})
    const classes = useStyles();
    
    const goSearch = (e) =>{
      history({
        pathname : '/search/',
        search : '?search=' + data.search,
      });
      window.location.reload();
    }
  return (
      <>
        <CssBaseline />
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Blog
        </Typography>
        <SearchBar
          value={data.search}
          onChange={(newValue) => setData({ search: newValue })}
          onRequestSearch={() => goSearch(data.search)}
        />
        <nav>
          <Link variant="button" color="textPrimary" href="/register" className={classes.link}>
            Register
          </Link>
        </nav>
        <Button href="/login" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
        <Button href="/logout" color="primary" variant="outlined" className={classes.link}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
      </>
  )
}

export default Header