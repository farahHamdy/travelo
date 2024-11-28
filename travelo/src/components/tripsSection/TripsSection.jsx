// import React from 'react'
import HeaderSection from "../headerSection/HeaderSection"
import Trips_card from "../trips_card/Trips_card"
import"./tripsSection.css"

export default function TripsSection() {
  return (


<div className="tripsSection x_padding y_padding">

    <HeaderSection/>
    <div className="container">
    
    <Trips_card/>
    <Trips_card/>
    <Trips_card/>

    </div>
</div>
  )
}
