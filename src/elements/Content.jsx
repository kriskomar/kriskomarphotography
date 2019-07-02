import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

const Content = styled(ParallaxLayer)`
  ${tw`px-0 md:px-0 lg:px-0 justify-center items-center flex z-50`};
`

export default Content
