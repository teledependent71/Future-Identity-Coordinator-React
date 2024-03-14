import React from 'react'

import PropTypes from 'prop-types'

import './norene.css'

const Norene = (props) => {
  return (
    <div className="norene-container">
      <span className="test-css-class">{props.text}</span>
    </div>
  )
}

Norene.defaultProps = {
  text: 'Text',
}

Norene.propTypes = {
  text: PropTypes.string,
}

export default Norene
