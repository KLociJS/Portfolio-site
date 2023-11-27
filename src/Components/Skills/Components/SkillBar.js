import React from "react";

export default function SkillBar({ percentage, tech }) {
  return (
    <div className='bar'>
      <div className='tech'>{tech}</div>
      <div className={`fill w-${percentage}`}></div>
      <span className='percentage'>{percentage}%</span>
    </div>
  );
}
