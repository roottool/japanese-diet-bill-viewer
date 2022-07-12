import PresentationalHeader from './Presenter'
import useHeader from './useHeader'

const Header = () => {
  const { ...props } = useHeader()

  return <PresentationalHeader {...props} />
}

export default Header
