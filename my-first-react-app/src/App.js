import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from "./components/Modal"
import EventList from './components/EventList';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {title: "mario's bday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3},
  ])

  const handleClick = (id) => {
    setEvents(events.filter((event) => {
      return id !== event.id
    }))
    console.log(id);
  }
  
  const handleClose = () => {
    setShowModal(false);
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
      {showModal && <Modal handleClose={handleClose} isSalesModal={false}>
          <h2>Terms and Conditions</h2>
          <p>sample text</p>
          <a href="#">Find out more...</a>
      </Modal>}
      <button className="show-modal-button" onClick={handleShowModal}>Show Modal</button>
    </div>
  );

  // test from matt's pc
}

export default App;
