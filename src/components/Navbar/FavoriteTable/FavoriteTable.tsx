import { Person } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;
  const dispatch = useDispatch();
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) =>
    !!selectedPeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id);
  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };
  const columns = [
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
