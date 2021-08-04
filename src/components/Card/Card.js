import React from 'react';
import './Card.css';


class Card extends React.PureComponent {

    render() {
        const today = new Date();
        return (
            this.props.title ?
                <div className='box'>
                    <h1>Table Reservation</h1>
                    <h2>
                        {this.props.title.name}
                    </h2>
                    {/* <h3>{today.toLocaleDateString()}</h3>
                    <h3>{today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                    }</h3> */}
                    <h3>{this.props.title.date}</h3>
                    <h3>{this.props.title.time}</h3>
                </div> : <div className='box'>'Nothing to Print.'</div>
        )
    }
}

export default Card;

// const Card = React.forwardRef((props, ref) => { return <h1 ref={ref}>Hi</h1> })
