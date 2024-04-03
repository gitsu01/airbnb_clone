import './MainBox.css'
import React from 'react'
import HouseCard from './HouseCard';

function MainBox() {
  return (
    <>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-8 mb-10">
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
        </div>
    </>
  )
}

export default MainBox;