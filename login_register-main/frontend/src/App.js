// App.js

import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab label="Login">
          <Login />
        </Tab>
        <Tab label="Register">
          <Register />
        </Tab>
      </Tabs>
    </div>
  );
}

function Tabs({ children }) {
  const [activeTab, setActiveTab] = React.useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="Tab">
      <div className="tab-header">
        {React.Children.map(children, (child, index) => (
          <button
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            onClick={() => changeTab(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
}

function Tab({ children }) {
  return <>{children}</>;
}

export default App;

