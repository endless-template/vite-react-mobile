import React from 'react'
import { useNavigate } from 'react-router'
import type { NavBarProps } from 'antd-mobile'
import { NavBar as AntNavBar } from 'antd-mobile'

interface IProps extends NavBarProps {
  fixed?: boolean
  className?: string
  style?: {
    '--height'?: string
  } & React.CSSProperties
}
const NavBar: React.FC<IProps> = props => {
  const { fixed = true, style = {}, className = '' } = props
  const navigate = useNavigate()
  const { onBack, ...rest } = props
  function backFn() {
    if (onBack) {
      onBack()
    } else {
      // navigate
      navigate(-1)
    }
  }
  return (
    <header style={{ '--height': style['--height'] || '3.125rem' }}>
      <AntNavBar
        onBack={backFn}
        {...rest}
        style={{ height: 'var(--height)', background: 'var(--adm-color-background)', ...style }}
        className={`z-10 bg-white ${fixed ? 'fixed w-full' : ''} ${className}`}
      />
      {fixed && <div style={{ height: 'var(--height)' }}></div>}
    </header>
  )
}

export default NavBar
