import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { NavBarProps } from 'antd-mobile'
import { NavBar as AntNavBar } from 'antd-mobile'

const NavBar: React.FC<NavBarProps> = props => {
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
    <AntNavBar
      onBack={backFn}
      {...rest}
      style={{ '--height': '3.125rem', background: 'var(--adm-color-background)' }}
    />
  )
}

export default NavBar
