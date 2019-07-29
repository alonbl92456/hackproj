import React from 'react'
import MUIDataTable from "mui-datatables";
import CapacityProgressbar from '../UI/CapacityProgressbar/CapacityProgressbar';
import WithLoading from '../../hoc/WithLoading/WithLoading';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';






const getMuiTheme = () => createMuiTheme({
  overrides: {
    MuiTablePagination: {
      actions: {
        flexShrink: 0,
        marginLeft: 0
      }
    }
  }
});



/**
 * This comop represnt data table 
 *
 * @param {Object} props
 * columns = array of columns names 
 * data = array of arrays, each one is a data row in the table
 * options = table specific options 
 * @returns Datatable 
 */
const DataTable = (props) => {



  const options = {
    ...props.options,
    selectableRows: false,
    responsive: "scroll"
  }

  const columns = props.columns.map(curCol => {
    return (curCol.indexOf("%") > -1) ?
      {
        name: curCol[0].toUpperCase() + curCol.slice(1),
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return (<CapacityProgressbar full={value} />);
          }
        }
      } : curCol[0].toUpperCase() + curCol.slice(1);
  });


  if(props.rowClicked){
    options.onRowClick = props.rowClicked
  }

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={props.title}
        data={props.data}
        columns={columns}
        options={options}
      />
    </MuiThemeProvider>
  );
}

export default WithLoading(DataTable);
