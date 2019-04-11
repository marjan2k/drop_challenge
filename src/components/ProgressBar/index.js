import React, { memo } from 'react'
import './progressBar.css'

const ProgressBar = memo(({ progress }) => (
  <div className="wrapper">
    <div className="progress-bar">
      <span
        className="progress-bar-fill"
        style={{ width: `${progress}%`, backgroundColor: progress === 100 ? '#ffc200' : null }}
      />
    </div>
  </div>
))

export default ProgressBar
