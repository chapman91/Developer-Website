import React from 'react'
import PropTypes from 'prop-types';
import './SkillButton.css'


// Define the SkillButton component
const SkillButton = ({ skillName }) => {
  return (
   <button className="skill-button">
    {skillName}
   </button>
  )
}

// PropTypes to specify the types of props the component accepts
SkillButton.propTypes = {
    skillName: PropTypes.string.isRequired,
}



export default SkillButton