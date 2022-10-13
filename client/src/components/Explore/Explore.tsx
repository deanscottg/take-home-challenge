import React from 'react'
// import {EVENTS} from './Events/Events.models'
// import {useEvents} from 'services/events/useEvents'
import {useNavigate} from 'react-router-dom'
import ExploreNavBar from './ExploreNavBar'
import './Events.styles.scss'
import EventCardGrid from './EventCardGrid'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const Explore = () => {
  const navigate = useNavigate()
  // const {status, data: events} = useEvents()

  //   console.log({status})

  return status === 'LOADING' ? (
    <>
      <p style={{color: 'white'}}>Loading</p>
    </>
  ) : (
    <div className='Explore'>
      <video
        autoPlay
        // playsInLine
        loop
        src='https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1).mp4'
        className='Explore-video false'
      />

      <div className='Explore-cover'>
        <video
          autoPlay
          // playsInLine
          loop
          src='https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1)_1.mp4'
          className='Explore-cover-video false'></video>
      </div>
      <div className='Explore-body'>
        <div className='Explore-body-main'>
          <ExploreNavBar />
          <div className='Explore-body-main-results'>
            <EventCardGrid />
          </div>
        </div>
      </div>
      <img
        onClick={() => navigate(-1)}
        src='https://posh-b2.s3.us-east-2.amazonaws.com/left-arrow-in-circular-button-black-symbol.svg'
        className='Explore-back'
        alt='back button'
      />
    </div>
  )
}

export default Explore
