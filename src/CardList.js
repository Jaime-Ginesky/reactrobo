import React from"react";
import App from "./App";

const CardList = ({ robots }) => {
    return (
        <div> 
            {
        robots.map((user, i) => {
        return (
        <App 
           key={i} 
           id={robots[i].id} 
           name={robots[i].name} 
           email={robots[i].email} />
    );
})
}
        </div>
    );
}

export default CardList;