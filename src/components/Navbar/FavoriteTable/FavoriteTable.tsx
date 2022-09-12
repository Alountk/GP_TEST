import { Person } from '@/models';
import { addFavorite, removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Delete, Favorite } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  const pageSize = 5;
  const dispatch = useDispatch();
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) =>
    !!stateFavorites.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    stateFavorites.filter((p) => p.id !== person.id);
  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...stateFavorites, person];
    dispatch(addFavorite(filteredPeople));
  };
  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };
  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton color="secondary" onClick={() => handleClick(params.row)}>
            <Delete />{' '}
          </IconButton>
        </>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level Of Happiness',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <DataGrid
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      rowsPerPageOptions={[pageSize]}
      rows={stateFavorites}
      getRowId={(row: any) => row.id}
      {...{ pageSize, columns }}
    />
  );
};

export default FavoriteTable;
