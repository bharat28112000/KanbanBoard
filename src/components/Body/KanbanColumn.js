import React, { useState } from 'react';
import KanbanCard from './KanbanCard';
import "./KanbanColumn.css";

function KanbanColumn({ title, tickets, Users }) {
const count= tickets.length;


const uname = {
  'usr-5': 4,
  'usr-4': 3,
  'usr-3': 2,
  'usr-2': 1,
  'usr-1': 0 
};


const getUserName = (userId) => {

  return (Users[uname[userId]] ? Users[uname[userId]].name : 'Unknown User') ;
};

const getUserStatus = (userId) => {

  return (Users[uname[userId]] ? Users[uname[userId]].available : false) ;
};



  return (
    <div className="kanban-column">

      <div className="headerCard">
        <div className='columnName'> {title}</div>
        <div className='ticketCount'>{count}</div>
      </div>
      {
          tickets.map((item, index) => (
             
            <KanbanCard key={item.id} 
                  id={item.id}
                  priority={item.priority}
                  status={item.status}
                  tag={item.tag}
                  title={item.title}
                  userId={item.userId} 
                  userName={getUserName(item.userId)}
                  isAvail = {getUserStatus(item.userId)}
            />
        ))}
    </div>
  );
}

export default KanbanColumn;