import React from 'react'
import './App.css'

const Accordion = ({ id, title, subtitle, image }) => {
  return (
    <div className='accordion'>
        <div className='accordion-img'><img src={image} alt={id} /></div>
        <div className="accordion-body">
            <div className='accordion-id'><span>{id}</span></div>
            <div className="accordion-text">
                <div className='accordion-title'>
                    <h2>{title}</h2>
                </div>
                <div className='accordion-subtitle'><span>{subtitle}</span></div>
            </div>
        </div>
    </div>
  )
}

export default Accordion