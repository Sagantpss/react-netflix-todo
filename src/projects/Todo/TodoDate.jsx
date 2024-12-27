import { useEffect, useState } from "react";

export const TodoDate = () => {
    const [dateTime, setDateTime] = useState("");
     // date and time format setup
      const getDateTime = () => {
        const now = new Date();
        const formatedDate = now.toLocaleDateString();
        const formatedTime = now.toLocaleTimeString();
    
        setDateTime(`${formatedDate} - ${formatedTime}`);
      };

      // update date and time
        useEffect(() => {
          const interval = setInterval(() => {
            getDateTime();
          }, 1000);
          return () => clearInterval(interval);
        }, []);

    return (
        <h2 className="todo-date-time">{dateTime}</h2>
    )
}