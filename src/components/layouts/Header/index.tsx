import { useHeader } from '@/components/layouts/Header/useHeader'

import PresentationalHeader from './Presenter'

const Header = () => {
  const { ...props } = useHeader()

  return <PresentationalHeader {...props} />
}

export default Header
