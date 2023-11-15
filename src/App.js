import Navbar from "./components/Navbar";
import Body from "./components/Body";
import "./App.css";

import React, { useEffect, useState } from "react";
import {
  sortTicketsByPriorityDescending,
  groupTicketsByStatus,
  groupTicketsByUser,
  groupTicketsByPriority,
  sortTicketsWithinGroupsByPriorityDescending,
  sortTicketsWithinGroupsByTitleAscending
} from "./components/utils/sortAndGroupFunctions";



function App() {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [grouping, setGrouping] = useState("status"); 
  const [sortMethod, setSortMethod] = useState('priority');

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Raw data:", data); 
        setUsers(data.users);
        setTickets(data.tickets);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    let grouped;
    switch (grouping) {
      case "status":
        grouped = groupTicketsByStatus(tickets);
        break;
      case "user":
        grouped = groupTicketsByUser(tickets, users);
        console.log(users);
        break;
      case "priority":
        grouped = groupTicketsByPriority(tickets);
        break;
      default:
        grouped = { "All Tickets": sortTicketsByPriorityDescending(tickets) };
    }

    setGroupedTickets(grouped);
  }, [tickets, grouping, users]); 



  useEffect(() => {
    // Function to sort tickets based on the current method
    const sortTickets = () => {
      switch (sortMethod) {
        case 'priority':
          return sortTicketsWithinGroupsByPriorityDescending(groupedTickets);
        case 'title':
          return sortTicketsWithinGroupsByTitleAscending(groupedTickets);
        default:
          return groupedTickets;
      }
    };
  
    // Call the sorting function and update state
    const sortedGroupedTickets = sortTickets();
    
    // Only update state if sorted tickets are different from current state to prevent infinite loop
    if (sortedGroupedTickets !== groupedTickets) {
      setGroupedTickets(sortedGroupedTickets);
    }
  }, [sortMethod]); // Removed groupedTickets from dependency array



  useEffect(() => {
    localStorage.setItem("grouping", grouping);
  }, [grouping]);

  useEffect(() => {
    const savedGrouping = localStorage.getItem("grouping");
    if (savedGrouping) {
      setGrouping(savedGrouping);
    }
  }, []);

  // console.log("1")
  // console.log(groupedTickets)

  const groupByHandleFunctionFromChild = (parameter) => {
    console.log(`Received parameter from child: ${parameter}`);
    setGrouping(parameter);

  };

  const orderByHandleFunctionFromChild = (parameter) => {
    console.log(`Received parameter from child: ${parameter}`);
    setSortMethod(parameter);

  };

  return (
    <div >
      <Navbar groupByFunction={groupByHandleFunctionFromChild}  orderByFunction={orderByHandleFunctionFromChild}/>
      <Body  groupedTickets={groupedTickets}  Users={users}/>
    </div>
  );
}

export default App;
