import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import TableChartIcon from '@material-ui/icons/TableChart';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FilterListIcon from '@material-ui/icons/FilterList';


import Header from './components/Header';
import AddInjured from './components/AddInjured';
import Table from './components/Table';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

console.log('2')

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tabBox: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
  },
  appbar:{
    backgroundColor:'#535f64'
  }
}));

function App() {

  const classes = useStyles();
  const [tab, setTab] = useState('1');

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Header />
        <div className={classes.tabBox}>
          <TabContext value={tab}>
            <AppBar position="static" className={classes.appbar}>
              <TabList onChange={handleChange} aria-label="simple tabs example">
                <Tab icon={<TableChartIcon />} label="Table" value="1" />
                <Tab icon={<AddBoxIcon />} label="Add injured" value="2" />
                <Tab icon={<FilterListIcon />} label="Filter" value="3" />
              </TabList>
            </AppBar>
            <TabPanel value="1"><Table list = {[{color:'red', num:'2'}]}/></TabPanel>
            <TabPanel value="2"><AddInjured/></TabPanel>
            <TabPanel value="3">Filter</TabPanel>
          </TabContext>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
