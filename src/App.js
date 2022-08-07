import React from "react";
import "./App.css";

function App(props) {
  const { name,email,id } = props;
  return (
    <div className="App">
      <div className="grow">
      <div className="Card">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} class=".img-fluid" />
      <div className="text-center">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;