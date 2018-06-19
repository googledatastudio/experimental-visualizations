import React from 'react';
import ReactDOM from 'react-dom';
import * as dscc from '@google/dscc';
import './index.css';

const Fields = ({fields}) => (
  <table>
    <thead>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Type</td>
        <td>Concept</td>
      </tr>
    </thead>
    {fields.map(({concept, id, name, type}, idx) => (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{concept}</td>
        <td>{type}</td>
      </tr>
    ))}
  </table>
);

const Rows = ({rows, fieldById}) => {
  const headings = Object.keys(rows[0]).filter((a) => a !== 'isComparisonRow');
  return (
    <table>
      <thead>
        <tr>{headings.map((h) => <td>{fieldById[h].name}</td>)}</tr>
      </thead>
      {rows.map((rowData, idx) => (
        <tr>{headings.map((h) => <td>{rowData[h]}</td>)}</tr>
      ))}
    </table>
  );
};

class App extends React.Component {
  render() {
    const {fields, rows, fieldById} = this.props.data;
    return (
      <div>
        <h2>Hi there, I came from react!</h2>
        <h3>Here Are The Chosen Fields.</h3>
        <Fields fields={fields} />
        <h3>The rows!</h3>
        <Rows rows={rows} fieldById={fieldById} />
      </div>
    );
  }
}

dscc.subscribeToData((data) => {
  document.body.innerHTML = '<div id="root">Initial div</div>';
  ReactDOM.render(<App data={data} />, document.getElementById('root'));
});
