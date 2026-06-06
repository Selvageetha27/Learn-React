import React from 'react'
import './Box.css'
function Box() {
    const arr = [{
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHhmYXfPVpndbf0_8silZf6D_hAnEMrhgSw&s",
        vendor: 'Blox',
        url: 'getblox.com',
        percent: '28%',
        date: 'July 15,2026',
        categories: ['AI', 'Consumer', 'Database']
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHhmYXfPVpndbf0_8silZf6D_hAnEMrhgSw&s",
        vendor: 'Brotha Platforms',
        url: 'brotha.gg',
        percent: '12%',
        date: 'July 8,2026',
        categories: ['Security']
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHhmYXfPVpndbf0_8silZf6D_hAnEMrhgSw&s",
        vendor: 'Layerz Softwares',
        url: 'layerz.io',
        percent: '71%',
        date: 'July 1,2026',
        categories: ['Machine Learning', 'Design']
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHhmYXfPVpndbf0_8silZf6D_hAnEMrhgSw&s",
        vendor: 'Linez Technologies',
        url: 'linez.tech',
        percent: '20%',
        date: 'June 28,2026',
        categories: ['Tech', 'HR', 'AR/VR']
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHhmYXfPVpndbf0_8silZf6D_hAnEMrhgSw&s",
        vendor: 'PlanetX',
        url: 'planetx.gg',
        percent: '30%',
        date: 'June 11,2026',
        categories: ['HR', 'Finance']
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHhmYXfPVpndbf0_8silZf6D_hAnEMrhgSw&s",
        vendor: 'PowerUp Tech',
        url: 'pwrup.design',
        percent: '20%',
        date: 'May 2,2026',
        categories: ['Lean', 'UX', 'UI']
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHhmYXfPVpndbf0_8silZf6D_hAnEMrhgSw&s",
        vendor: 'Ring Sciences',
        url: 'ringsciences.io',
        percent: '10%',
        date: 'April 4,2026',
        categories: ['Database', 'CX']
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHhmYXfPVpndbf0_8silZf6D_hAnEMrhgSw&s",
        vendor: 'Zeero Bros',
        url: 'zeerobros.com',
        percent: '50%',
        date: 'Jan 8,2026',
        categories: ['Lean', 'UI']
    },
    ]
    return (
        <>
            <div className='bigBox'>
                <div className='box'>
                    <div className='history'>
                        <div className='vendor'>
                            <h3>Vendor Activity History</h3>
                            <button>116 Total</button>
                        </div>
                        <div className='explain'><p>Here you can track your vendor's performance everyday.</p></div>
                    </div>
                    <div className='next'>
                        <input className='search' placeholder='Search...' />
                        <button className='filter'>Filter</button>
                        <button className='add'>Add Vendor</button>
                    </div>
                </div>
                <div className='table'>
                    <div className='name'>
                        <div className='blox'>
                            <div><input type='checkbox' /></div>
                            <div><img src={arr[0].img} /></div>
                            <div className='box1'>
                                <div>{arr[0].vendor}</div>
                                <div>{arr[0].url}</div>

                            </div>
                        </div>

                    </div>
                    <div className='percentage'>
                        <div className='per-con'>
                            <div className='per-bar'></div>
                            
                        </div>
                    </div>
                    <div className='date'><p>{arr[0].date}</p></div>
                    <div className='category'>{
                        arr[0].categories.map((cat)=>{
                           return <div className='cat-color'>{cat}</div>
                        })
                        
                        }</div>
                </div>

            </div>
        </>

    )
}

export default Box