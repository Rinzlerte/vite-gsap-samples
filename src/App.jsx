import GsapFrom from './components/GsapFrom'
import GsapTo from './components/GsapTo'
import GsapFromTo from './components/GsapFromTo'
import GsapTimeLine from './components/GsapTimeLine'
import GsapStagger from './components/GsapStagger'
import GsapScrollTrigger from './components/GsapScrollTrigger'
import GsapText from './components/GsapText'

const App = () => {
  return (
    <>
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapTimeLine />
      <GsapStagger />
      <GsapScrollTrigger />
      <GsapText />
    </>
  )
}

export default App