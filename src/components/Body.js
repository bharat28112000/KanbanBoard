import React from 'react';
import KanbanColumn from './Body/KanbanColumn' ;
import "./Body.css" ;



function Body({ groupedTickets,Users}) {

    return (
      <div className="body">
        {Object.keys(groupedTickets).map((groupName) => (
        
          <KanbanColumn key={groupName} title={groupName} tickets={groupedTickets[groupName]} Users={Users} />
          
        ))}
        
      </div>
    );
  }
  
  export default Body;