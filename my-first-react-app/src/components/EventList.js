import React from "react"

function EventList({events, handleClick}) {
  return (
    <>
        {events.map((event,index) => (
            <React.Fragment key={event.id}> 
            <h2>{index} - {event.title}</h2>
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </React.Fragment>
        ))}
    </>
  )
}

export default EventList