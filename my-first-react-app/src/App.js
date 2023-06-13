import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from "./components/Modal"
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents(prevEvents => {
      return [...prevEvents, event]
    } )
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents(events.filter((event) => {
      return id !== event.id
    }))
    console.log(id);
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const subtitle = "All the latest events in marioland"
  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle}/>
      {showEvents && <div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>}
      {!showEvents && <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>}

      {showEvents && <EventList events={events} handleClick={handleClick}/> 
      }
      {showModal && <Modal isSalesModal={false}>
          <NewEventForm addEvent={addEvent} setShowModal={setShowModal}/>
      </Modal>}
      <button className="show-modal-button" onClick={handleShowModal}>Add New Event</button>
    </div>
  );

  // test from matt's pc
}

export default App;
