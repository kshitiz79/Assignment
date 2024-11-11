
import React from "react";

const Card = ({ ticket }) => {

  const priorityLevels = ["No priority", "Low", "Medium", "High", "Urgent"];
  const priorityColors = ["#ccc", "#4caf50", "#ff9800", "#f44336", "#d32f2f"];

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <span className="feature-request">Feature Request</span>
      </div>
      <h4 className="ticket-title">{ticket.title}</h4>
      <div className="ticket-info">
        <p><strong>Priority:</strong> <span style={{ color: priorityColors[ticket.priority] }}>{priorityLevels[ticket.priority]}</span></p>
        <p><strong>Status:</strong> {ticket.status}</p>
        <p><strong>User:</strong> {ticket.user}</p>
      </div>
      {ticket.avatar && (
        <img src={ticket.avatar} alt={`${ticket.user}'s avatar`} className="user-avatar" />
      )}
    </div>
  );
};

export default Card;
