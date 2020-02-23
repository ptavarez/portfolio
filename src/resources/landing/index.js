/**
 * Landing Component
 *
 * @author Pedro Tavarez <ptavarez16@gmail.com>
 */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Landing = () => (
  <section className="Landing">
    <div className="Landing-overlay" />
    <div className="Landing-content">
      <h1 className="Landing-content--heading">Pedro Tavarez</h1>
      <p className="Landing-content--subHeading">Software Engineer</p>
      <>
        <a className="Landing-content--btn" href="#About">
          Get To Know Me <FontAwesomeIcon icon="chevron-down" />
        </a>
      </>
    </div>
    <ul className="Landing-content--social">
      <li>
        <a href="/">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </li>
      <li>
        <a href="/">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </a>
      </li>
    </ul>
  </section>
)

export default Landing
