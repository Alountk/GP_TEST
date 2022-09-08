import React from 'react'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { People } from '@/data';

export interface HomeInterface {
}

const Home: React.FC<HomeInterface> = () => {
    const pageSize = 5;
    const columns = [
        { 
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        { 
            field: 'category',
            headerName: 'Categories',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        { 
            field: 'company',
            headerName: 'Company',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        { 
            field: 'levelOfHappiness',
            headerName: 'Level Of Happiness',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
    ]
  return (
    <DataGrid 
        disableColumnSelector 
        disableSelectionOnClick 
        autoHeight 
        rowsPerPageOptions={[pageSize]} 
        rows={People} 
        getRowId={(row: any) => row.id}
        {...{pageSize, columns}} 
    />
  )
}

export default Home