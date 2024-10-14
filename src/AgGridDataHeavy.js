import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState, useEffect, useMemo } from 'react';

const AgGridDataHeavyTable = () => {

    const [rowData, setRowData] = useState([]);
    let [colDefs, setColDefs] = useState([]);


    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
            .then((result) => result.json()) // Convert to JSON
            .then((rowData) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                console.log(typeof rowData);
                console.log(rowData.length);
                setRowData(rowData)}); // Update state of `rowData`
                console.log(rowData);
                // let cols = Object.keys(rowData[0])
                // colDefs = cols.map(field => ({field}))
                // setColDefs(colDefs)
                // return cols
                return cols
    }, []);


    // Apply settings across all columns
    const defaultColDef = useMemo(() => ({
        filter: true,
    }));

    const Pagination = true
    const PaginationAutoPageSize = true
    const PaginationPageSizeSelector = [10,20,30]

    return (
        <div
            className={
                "ag-theme-quartz-dark"
            }
            style={{ width: 1420, height: 500 }}
        >
            <AgGridReact 
                rowData={rowData} 
                columnDefs={colDefs} 
                defaultColDef={defaultColDef}
                pagination={Pagination}
                paginationAutoPageSize={PaginationAutoPageSize}
                paginationPageSizeSelector={PaginationPageSizeSelector}
                 />
        </div>
    );


}

export default AgGridDataHeavyTable;