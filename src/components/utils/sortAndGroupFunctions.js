

export const groupTicketsByStatus = (tickets) => {
      return tickets.reduce((acc, ticket) => {
        if (!acc[ticket.status]) {
          acc[ticket.status] = [];
        }
        acc[ticket.status].push(ticket);
        
        return acc;
        
      }, {});
    };
    
    export const groupTicketsByUser = (tickets, users) => {
      
      return users.reduce((acc, user) => {
        acc[user.name] = tickets.filter((ticket) => ticket.userId === user.id);
        console.log("**")
        console.log(acc)
        return acc;
      }, {});
    };
    
    export const groupTicketsByPriority = (tickets) => {
      tickets.sort((a, b) => b.priority - a.priority)
      console.log("*" + tickets)
      const priorityLevels = {
        4: 'Urgent',
        3: 'High',
        2: 'Medium',
        1: 'Low',
        0: 'No priority'
      };
    
      return tickets.reduce((acc, ticket) => {
        const priorityName = priorityLevels[ticket.priority];
        if (!acc[priorityName]) {
          acc[priorityName] = [];
        }
        acc[priorityName].push(ticket);
        return acc;
      }, {});
    };
  


  export const sortTicketsByPriorityDescending = (tickets) => {
    // Assuming each ticket has a 'priority' property.
    console.log("*" + tickets)
    return [...tickets].sort((a, b) => b.priority - a.priority);
  };
  
  
  export const sortTicketsWithinGroupsByPriorityDescending = (groupedTickets) => {
    const sortedGroups = {};
    for (const group in groupedTickets) {
      sortedGroups[group] = groupedTickets[group].slice().sort((a, b) => b.priority - a.priority);
    }
    return sortedGroups;
  };
  
  
  export const sortTicketsWithinGroupsByTitleAscending = (groupedTickets) => {
    const sortedGroups = {};
    for (const group in groupedTickets) {
      sortedGroups[group] = groupedTickets[group].slice().sort((a, b) => a.title.localeCompare(b.title));
    }
    return sortedGroups;
  };