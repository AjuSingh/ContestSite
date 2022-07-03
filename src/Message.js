import React, { useState, useEffect } from 'react';
function Message({ room, name, connection }) {
    const [current, setCurrent] = useState('');
    const [message, setMessage] = useState([]);
    const currentMessage = async () => {
        if (current !== '') {
            const Data = {
                room,
                author: name,
                message: current,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
            }

            await connection.emit('send_message', Data);
            setMessage(value => [...value, Data])
        }
    }
    useEffect(() => {
        connection.on("recieve_message", (anotherValue => setMessage(value => [...value, anotherValue])))
    }, [connection])

   return(
       <>
       <h1>chat option</h1>
       </>
   )
}

export default Message;
