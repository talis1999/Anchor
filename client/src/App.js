import React, { useState, useEffect } from 'react';
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
    //type: 'dark',
  }
});


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
  appbar: {
    backgroundColor: '#535f64'
  }
}));

function App() {

  const classes = useStyles();
  const [tab, setTab] = useState('1');
  const [data, setData] = useState([]);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const timeRange = state => {
    switch (state) {
      case 'uninjured':
        return '-'
      case 'lightly injured':
        return '12-24'
      case 'moderatly wounded':
        return '6-12'
      case 'severely injured':
        return '2-6'
      case 'deceased':
        return '-'
      case 'rescued':
        return '-'
      default:
        return 'error'
    }
  }


  const fetchData = () => {
    let data = [];
    for (let i = 0; i < 5; i++) {
      data.push({ state: 'moderatly wounded', id: '123456789', coordinates: '12, 34' })
    }
    for (let i = 0; i < 5; i++) {
      data.push({ state: 'severely injured', id: '567455555', coordinates: '34, 34' })
    }
    for (let i = 0; i < 5; i++) {
      data.push({ state: 'rescued', id: '567455555', coordinates: '34, 34' })
    }
    
    //add time column
    data = data.map(injured => {
      injured['Time range'] = timeRange(injured.state)
      return injured;
    });

    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Header />
        <div className={classes.tabBox}>
          <TabContext value={tab}>
            <AppBar position="static" className={classes.appbar}>
              <TabList onChange={handleChange} variant="fullWidth" aria-label="simple tabs example">
                <Tab icon={<TableChartIcon />} label="Table" value="1" />
                <Tab icon={<AddBoxIcon />} label="Add injured" value="2" />
                <Tab icon={<FilterListIcon />} label="Filter" value="3" />
              </TabList>
            </AppBar>
            <TabPanel value="1"><Table list={data} /></TabPanel>
            <TabPanel value="2"><AddInjured /></TabPanel>
            <TabPanel value="3">Filter</TabPanel>
          </TabContext>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
