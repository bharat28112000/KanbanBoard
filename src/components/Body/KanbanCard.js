import React from "react";
import "./KanbanCard.css";

function KanbanCard({ id, priority, status, tag, title, userId , userName, isAvail}) {
  

  let priorityIcon;
  switch (priority) {
    case 1:
      priorityIcon = "https://img.icons8.com/ios-glyphs/30/40C057/low-connection.png" ;
      break;
    case 2:
      priorityIcon ="https://img.icons8.com/windows/32/FAB005/medium-connection.png" ;
      break;
    case 3:
      priorityIcon = "https://img.icons8.com/ios-glyphs/30/FA5252/high-connection.png" ;
      break;
    case 4:
      priorityIcon ="https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/64/external-exclamation-mark-ui-essential-febrian-hidayat-flat-febrian-hidayat.png";
      break;
    default:
      priorityIcon = "https://img.icons8.com/color/48/no-connection--v1.png" ;
  }


  let statusIcon;
  switch (status) {
    case "Cancelled":
      statusIcon = "https://img.icons8.com/ios/50/cancel.png";
      break;
    case "Backlog":
      statusIcon = "https://img.icons8.com/ios-filled/50/FA5252/filled-circle.png" 
      break;
    case "In progress":
      statusIcon = "https://img.icons8.com/ios-filled/50/FAB005/50-percents.png";
      break;
    case "Done":
      statusIcon = "https://img.icons8.com/external-others-amoghdesign/24/external-done-multimedia-flat-30px-others-amoghdesign.png";
      break;
    default:
      statusIcon ="https://img.icons8.com/emoji/48/white-circle-emoji.png";
  }


  const activeStatus = isAvail ? "status-circle-active" : "status-circle-inactive";

  function convertToInitials(userName) {
    const nameParts = userName.trim().split(/\s+/);
    const initials = nameParts.map(part => part[0].toUpperCase()).join('');
    return initials;
  }
  

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{id}</span>
        <span className="user-id">{convertToInitials(userName)}</span>
        <div class="icon-container">
          <img src="https://img.icons8.com/stickers/100/user-male.png" />
          <div className={activeStatus}></div>
        </div>
      </div>
      <div className="card-body">
        <img src={statusIcon}   />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-footer">
      <img src={priorityIcon}   />
        <span className="card-tag">{tag}</span>
      </div>
    </div>
  );
}

export default KanbanCard;
