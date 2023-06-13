import React from "react"
import styles from "./EventList.module.css"


function EventList({events, handleClick}) {
  return (
    <>
        {events.map((event,index) => (
            <div key={event.id} className={styles.card}> 
              <h2>{index} - {event.title}</h2>
              <p>{event.location} - {event.date}</p>
              <button onClick={() => handleClick(event.id)}>delete event</button>
            </div>
        ))}
    </>
  )
}

export default EventList