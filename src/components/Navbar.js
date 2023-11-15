
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ groupByFunction, orderByFunction }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown); 
  };


  const [groupByValue, setGroupByValue] = useState("status");

  const [orderByValue, setOrderByValue] = useState("title");

  const handleDropdownChange = (event,val) => {
    const newValue = event.target.value;
    if(val===1)
    setGroupByValue(newValue);
    else
    setOrderByValue(newValue);
    setShowDropdown(false);
  };

  useEffect(() => {
    // Call the callback function with the selected value when it changes
    groupByFunction(groupByValue);
    orderByFunction(orderByValue);
  }, [groupByFunction,orderByFunction, groupByValue,orderByValue, showDropdown]);

  return (
    <div className="nav-container">
      <div class="navbar">
        <button class="button" onClick={handleButtonClick}>
          Display
        </button>
      </div>

     
      <div className="dropDownMenu" style={{ visibility: showDropdown ? 'visible' : 'hidden' }}>
        <ul>
          <li>
            Group By
            <select
              id="groupby"
              value={groupByValue}
              onChange={(event) => handleDropdownChange(event, 1)}
            >
              <option value="status">Status</option>
              <option value="priority">Priority</option>
              <option value="user">Users</option>
            </select>
          </li>
          <li>
            Order By
            <select
              id="orderby"
              value={orderByValue}
              onChange={(event) => handleDropdownChange(event, 2)}
            >
              <option value="title">Title</option>
              <option value="priority">Priority</option>
            </select>
          </li>
        </ul>
      </div> 
    </div>
  );
}

export default Navbar;
