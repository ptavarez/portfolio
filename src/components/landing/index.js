/**
 * Landing Component
 *
 * @author Pedro Tavarez <ptavarez16@gmail.com>
 */

import React from 'react'

const Landing = () => {
  const handleClick = () => {}

  return (
    <div className="Landing">
      <h1>Pedro Tavarez</h1>
      <h3>Software Engineer</h3>
      <button onClick={handleClick} type="button">
        Get To Know Me
      </button>
    </div>
  )
}

export default Landing
