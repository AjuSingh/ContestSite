import React, { useState } from 'react';
import socketIO, { connect } from 'socket.io-client'
import Message from './Message';

const connection = socketIO.connect('http://localhost:5000');
function ChatMain() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('')
  const [show, setShow] = useState(false)

  const enterRoom = () => {
    if (name !== '' && room !== '') {
      connection.emit('enter_room', room)
    }
  }

  return <div>
    <div className="container">
      <h1>Chat room</h1>
      <input className='lrinput' type="text" placeholder="Enter name" onChange={(e) => {
        setName(e.target.value);
      }} />
      <label for="exampleFormControlSelect1" stlyle={{ marginTop: '20px' }}>Choose Room</label>
      <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => {
        setRoom(e.target.value);
      }} style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: 'white' }}>
        <option >Codeforces</option>
        <option>Codechef</option>
        <option>AtCoder</option>
        <option>HackerEarth</option>
        <option>HackerRank</option>
        <option>LeetCode</option>
        <option>KickStart</option>
      </select>
      <button className='btn btn-primary' onClick={enterRoom}>Enter</button>
    </div>
    <Message name={name} room={room} connection={connection} />
  </div>
}

export default ChatMain;
