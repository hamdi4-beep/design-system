import * as React from 'react'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { useBackground } from './context/StateContext';
import './sass/index.scss';

const Content = React.memo(() => {
  return (
    <>
      <div className="content">
          <Header />
          <Main />
        </div>

      <Footer />
    </>
  )
})

function App() {
  const {
    backgroundURL
  } = useBackground()

  let className = 'App'

  if (backgroundURL) className += ' layer'

  return (
    <div className={className} style={{backgroundImage: `url(${backgroundURL})`}}>
        <Content />
    </div>
  )
}

export default App
