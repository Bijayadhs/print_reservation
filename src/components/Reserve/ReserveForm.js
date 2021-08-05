import React, { useState } from 'react';



const ReserveForm = ({ handleTitle }) => {
    const [name, setName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());





    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, selectedDate, selectedTime);
        handleTitle(name, selectedDate, selectedTime);
        setName('');

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor='name'>Name: </label>
                <input type="text" id='name' placeholder="Enter name for reservation" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor='date'>Select Date: </label>

                <input onChange={(e) => setSelectedDate(e.target.value)} type='date' id='date' value={selectedDate} />
                <br />
                <label htmlFor='time'>Select Time: </label>

                <input onChange={(e) => setSelectedTime(e.target.value)} type='time' id='time' value={selectedTime} />
                <br />

                <button type='submit'>Submit</button>

            </form>
        </div >
    )
}

export default ReserveForm
