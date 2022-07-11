import { styled, type SwitchEvent } from '@nextui-org/react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import CustomizedSwitch from '@/components/atoms/CustomizedSwitch'
import { useHeader } from '@/components/layouts/Header/useHeader'

interface PresentationalHeaderProps {
  handleAppThemeTypeSwitchClick: (event: SwitchEvent) => void
  isDarkMode: boolean
}

const PresentationalHeader = ({
  handleAppThemeTypeSwitchClick,
  isDarkMode,
}: PresentationalHeaderProps) => (
  <StyledNav>
    <CustomizedSwitch
      checked={isDarkMode}
      iconOff={<SunIcon />}
      iconOn={<MoonIcon />}
      onChange={handleAppThemeTypeSwitchClick}
      size="lg"
    />
  </StyledNav>
)

const StyledNav = styled('nav', {
  display: 'flex',
  backgroundColor: '$primaryLight',
  boxShadow: '0px 4px 4px rgba(219, 141, 204, 0.25)',
})

const Header = () => {
  const { ...props } = useHeader()

  return <PresentationalHeader {...props} />
}

export default Header
