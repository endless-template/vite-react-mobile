import React from 'react'

interface IProps extends React.SVGProps<SVGSVGElement> {
  type: string
}
const SvgIcon: React.FC<IProps> = props => {
  const { type, ...rest } = props
  return (
    <svg aria-hidden="true" {...rest}>
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  )
}

export default SvgIcon
