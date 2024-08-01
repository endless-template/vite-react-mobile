import type { SVGProps } from 'react'
import React, { useEffect, useState } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  type: string
}

const Icon: React.FC<IconProps> = props => {
  const { type, ...rest } = props
  const [SvgIcon, setSvgIcon] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null)

  useEffect(() => {
    const importSvgIcon = async () => {
      try {
        const icon = await import(`../../assets/svg/${type}.svg?react`)
        setSvgIcon(() => icon.default)
      } catch (error) {
        console.error(`Error loading SVG icon: ${type}`, error)
      }
    }

    importSvgIcon()
  }, [type])

  if (!SvgIcon) {
    return null
  }

  return <SvgIcon {...rest} />
}

export default Icon
