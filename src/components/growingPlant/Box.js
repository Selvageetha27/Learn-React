import React from 'react'
import './Box.css'
function Box() {
    return (
        <>
        <div className='box'>
            <div className='history'>
                <div className='vendor'>
                    <h3>Vendor Activity History</h3>
                    <button>116 Total</button>
                </div>
                <div className='explain'><p>Here you can track your vendor's performance everyday.</p></div>
            </div>
            <div className='next'>
                <button className='search'>Search...</button>
                <button className='filter'>Filter</button>
                <button className='add'>Add Vendor</button>
            </div>
            </div>
        </>

    )
}

export default Box