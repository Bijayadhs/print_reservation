import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import Card from '../Card/Card';
import ReserveForm from './ReserveForm';

const Reserve = () => {
    const [title, setTitle] = useState(null);

    const handleTitle = (name, date, time) => {
        return setTitle({ name, date, time });
    }

    const titleRef = useRef('');
    return (
        <div className='main'>
            <ReserveForm handleTitle={handleTitle} />
            <Card ref={titleRef} title={title} />
            <ReactToPrint content={() => titleRef.current} trigger={() => { return <a href='#'>Print this out!</a> }} />

        </div>
    )
}

export default Reserve


// import {useReactToPrint} from 'react-to-print';
// const handlePrint = useReactToPrint({content: ()=>titleRef.current})
// return(<div><button onClick={handlePrint}>Print me</button><Card ref={titleRef}/></div>)
