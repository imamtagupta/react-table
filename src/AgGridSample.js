// import { ClientSideRowModelModule } from 'ag-grid-community/client-side-row-model';
// Theme
// import { ModuleRegistry } from 'ag-grid-community/core';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// ModuleRegistry.registerModules([ClientSideRowModelModule]);


const AgGridSampleTable = () => {
    // Row Data: The data to be displayed.
    const rowData = [
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ];
    
    // Column Definitions: Defines the columns to be displayed.
    const colDefs = [
      { field: "make" , filter: true},
      { field: "model", filter: true },
      { field: "price", filter: true },
      { field: "electric" , editable: true}
    ];
   
    const pagination = true;
    const paginationPageSize = 500;
    const paginationPageSizeSelector = [200, 500, 1000];
    console.log(rowData, colDefs);
    

    return (
        // wrapping container with theme & size
        <div
         className="ag-theme-quartz-dark" // applying the Data Grid theme
         style={{ height: 500, width: 800 }} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
              pagination={pagination}
              paginationPageSize={paginationPageSize}
              paginationPageSizeSelector={paginationPageSizeSelector}
          />
        </div>
       )
   
   }

export default AgGridSampleTable;