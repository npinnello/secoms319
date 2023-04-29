import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "./main.js"
import Create from "./create.js"
import Read from "./read.js"
import Update from "./update.js"
import Delete from "./delete.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Main'
    };
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
  }

  handleViewChange(view) {
      this.setState({ currentView: view });
  }

  handleCreateSubmit(formData) {
    fetch('/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

render() {
  let view;

  if (this.state.currentView === 'Main') {

    view = <React.StrictMode>
      <Main handleViewChange={this.handleViewChange} />
    </React.StrictMode>;

  } else if (this.state.currentView === 'Create') {

    view = <React.StrictMode>
      <Create handleViewChange={this.handleViewChange} handleCreateSubmit={this.handleCreateSubmit}/>
    </React.StrictMode>;

  } else if (this.state.currentView === 'Read') {

    view = <React.StrictMode>
      <Read handleViewChange={this.handleViewChange}/>
    </React.StrictMode>;

  } else if (this.state.currentView === 'Update') {

    view = <React.StrictMode>
      <Update handleViewChange={this.handleViewChange}/>
    </React.StrictMode>;

  } else if (this.state.currentView === 'Delete') {

    view = <React.StrictMode>
      <Delete handleViewChange={this.handleViewChange}/>
    </React.StrictMode>;

  }

  return (<div>{view}</div>);
};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals