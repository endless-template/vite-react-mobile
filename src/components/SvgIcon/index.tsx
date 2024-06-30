import React from 'react'

import styles from './index.module.css'

interface IProps {
  className?: string
  fill?: string // fill className
  type: string
  color?: string
  size?: string | number
  style?: React.CSSProperties
  onClick?: () => void
}
const SvgIcon: React.FC<IProps> = props => {
  const { className = '', fill, type, color = '#eeeeee', size = 16, onClick, style = {} } = props
  return (
    <svg
      className={`${styles.svg} ${className} ${fill}`}
      onClick={onClick}
      aria-hidden="true"
      style={{ width: size, height: size, color, fill: fill ? '' : 'currentColor', ...style }}
    >
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  )
}

export default SvgIcon
