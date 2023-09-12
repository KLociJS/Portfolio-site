import React from 'react'

export default function SkillBar({percentage, tech}) {
  return (
    <div className='bar'>
        <div className='tech'>{tech}</div>
        <div className='fill' style={{width: `${percentage}%`}}></div>
        <span className='percentage'>{percentage}%</span>
    </div>
  )
}
