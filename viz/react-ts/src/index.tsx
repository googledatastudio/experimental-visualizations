import React from 'react';
import ReactDOM from 'react-dom';
import * as dscc from '@google/dscc';

const App = () => {
  const [vizData, setVizData] = React.useState<undefined | dscc.TableFormat>(
    undefined
  );
  React.useEffect(() => {
    dscc.subscribeToData(
      data => {
        setVizData(data);
      },
      {transform: dscc.tableTransform}
    );
  }, []);

  if (vizData === undefined) {
    return <div>Wating for data</div>;
  } else {
    const tableData = vizData.tables[dscc.TableType.DEFAULT];
    const headerData = tableData.headers;
    const rowData = tableData.rows;
    return (
      <table>
        <thead>
          <tr>
            {headerData.map(header => (
              <td style={{fontWeight: 'bold'}}>{header.name}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map(row => (
            <tr>
              {row.map(cell => (
                <td>{cell.toString()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

ReactDOM.render(<App />, document.getElementsByTagName('body')[0]);
