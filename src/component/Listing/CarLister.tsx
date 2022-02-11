import React from 'react'
import Listing from './Listing'

const CarLister = () => {
  return (
    <div>

        <Listing title={[]} viewall={false} filters={['view-all','sedan','SUV','hatchback','coupe']}
            activeFilter = "view-all"
            page="list-cars"
        />

    </div>
  )
}

export default CarLister