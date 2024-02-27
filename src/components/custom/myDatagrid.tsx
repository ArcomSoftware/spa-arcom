import { useNavigate } from 'react-router';
import { useCallback, useState } from 'react';

interface MyTableMouveProps {
  page: number;
  columns: any;
  datas: any[];
  count: number;
  changePage: (page: number) => void;
  linkUpdate?: string;
}
const DataGrid: React.FC<MyTableMouveProps> = (props: MyTableMouveProps) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(props.page);

  const onClick = useCallback(
    (newPage: number): void => {
      setPage(newPage);
      props.changePage(newPage);
    },
    [props]
  );
  const handleClickElement = (data: any): void => {
    if (props.linkUpdate) {
      navigate(props.linkUpdate, { state: { ...data } });
    }
  };
  return (
    <>
      <div className="fr-table scroll">
        <table>
          <thead>
            <tr>
              {props.columns.map((column: any) => (
                <th key={column.name} className="" scope="col">
                  <div className="table-column-header">{column.label}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.datas.map((data: any) => (
              <tr key={data.id} onClick={() => handleClickElement(data)}>
                {props.columns.map((column: any, index: number) => (
                  <td key={data.id}>
                    <div>{column.render(data)}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <caption>Résultat : {props.count}</caption>
        </table>
      </div>
    </>
  );
};
export default DataGrid;
