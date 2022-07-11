import { Switch, type SwitchProps } from '@nextui-org/react'
import type { PropsWithoutRef } from 'react'

type CustomizedSwitchProps = PropsWithoutRef<Partial<SwitchProps>>
const CustomizedSwitch = (props: CustomizedSwitchProps) => (
  <Switch
    {...props}
    shadow
    css={{
      '& > *': {
        backgroundColor: '$primaryLightActive',
        "&[data-state='unchecked']": {
          backgroundColor: '$accents6',
        },
        '&:hover': {
          backgroundColor: '$primaryLightHover',
        },
      },
    }}
  />
)

export default CustomizedSwitch
