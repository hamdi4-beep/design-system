import * as React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { StateContext } from './context/StateContext';
import './sass/index.scss';

function App() {
  const [bg, setBg] = React.useState('')

  React.useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.style.backgroundImage = `url(${bg})`
  }, [bg])

  return (
    <React.Fragment>
      <div className={bg ? 'App layer' : 'App'}>
        <h1>Design System</h1>
        <Header />

        <StateContext.Provider value={{bg, setBg}}>
          <Main />
        </StateContext.Provider>
      </div>

      <Footer />
    </React.Fragment>
  )
}

export default App
