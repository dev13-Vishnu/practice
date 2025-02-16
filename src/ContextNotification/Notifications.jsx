import React from "react";
import { useNotification } from "./NotificationContext";

const Notifications = () => {
  const { notifications } = useNotification();

  return (
    <div>
      {notifications.map((note, index) => (
        <div
          key={index}
          style={{ border: "1px solid black", padding: "10px", margin: "5px" }}
        >
          {note}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
