import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateUsers,
  selectUser,
  selectUsers,
} from '../../store/listeUsers/ListeUsersSlice';
import axios from 'axios';
import DataGrid from './myDatagrid';

const base = 'http://localhost:9898';

const DataTable = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const userListe = [{}];
  console.log(userListe);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${base}/user/`);
      const dataRec = response.data;
      dispatch(
        updateUsers({
          TUsers: dataRec,
        })
      );
    } catch (err) {
      console.log('error fetch');
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const BDatas = userListe;
  console.log(BDatas);
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      render: (BDatas: any) => BDatas.id,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 130,
      render: (BDatas: any) => `${BDatas.name}`,
    },
    {
      field: 'role',
      headerName: 'role',
      width: 130,
      render: (BDatas: any) => `${BDatas.role}`,
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <br />
      <DataGrid
        page={page}
        columns={columns}
        datas={BDatas}
        count={BDatas.length}
        changePage={function (page: number): void {
          throw new Error('Function not implemented.');
        }}
      />
      <br />
      <br />
    </div>
  );
};
export default DataTable;
