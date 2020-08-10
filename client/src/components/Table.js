import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '650px',
  },
});


export default function AutoTable(props) {

  const rows = props.list||[]

  const columns = useMemo(() => {
    let columns = []
    if (rows[0]) {
      columns = Object.keys(rows[0]).map(t => {
        const label = t.charAt(0).toUpperCase() + t.slice(1)
        return ({ id: t, label, minWidth: 50 })
      })
    }

    return columns;
  }, [rows])


  const [tableColor, rowsColor] = props.coloring || [{ background: 'white', color: 'black' }, { background: 'white', color: 'black' }]


  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (<div>
    <Paper className={classes.root} style={{ minWidth: '200px' }}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, background: '#4050ac', color: 'white',padding:'32px',fontWeight:'bolder',fontSize: '120%',fontFamily:'Arial, Helvetica, sans-serif' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>

            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow style={{ background: rowsColor.background}} hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style = {{color: rowsColor.color, fontSize:'15px',padding:'16px 32px'}}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        style={{ background: '#4050ac', color: 'white' }}
      />
    </Paper>
  </div>);
}
//check