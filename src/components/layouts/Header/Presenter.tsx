import { type SwitchEvent, Container, Grid } from '@nextui-org/react'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

import CustomizedSwitch from '@/components/atoms/CustomizedSwitch'

interface PresentationalHeaderProps {
  handleAppThemeSwitchPress: (event: SwitchEvent) => void
  isDarkMode: boolean
}

const PresentationalHeader = ({
  handleAppThemeSwitchPress,
  isDarkMode,
}: PresentationalHeaderProps) => (
  <Container
    fluid
    as="nav"
    css={{
      backgroundColor: '$primary',
      boxShadow: '$md',
      // * Tweaking for CustomizedSwitch.
      paddingTop: '$3',
      paddingBottom: '$5',
    }}
  >
    <Grid.Container>
      <Grid md={2} xs={3} />
      <Grid md={8} xs={6} />
      <Grid md={2} xs={3}>
        <CustomizedSwitch
          checked={isDarkMode}
          iconOff={<SunIcon />}
          iconOn={<MoonIcon />}
          onChange={handleAppThemeSwitchPress}
          size="lg"
        />
      </Grid>
    </Grid.Container>
  </Container>
)

export default PresentationalHeader
