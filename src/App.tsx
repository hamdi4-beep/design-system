import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { StateContext } from './context/StateContext';
import './sass/index.scss';

function App() {
  const [bg, setBg] = React.useState('')

  React.useEffect(() => {
    const body = document.body as HTMLBodyElement
    body.style.backgroundImage = `url(${bg})`
  }, [bg])

  return (
    <React.Fragment>
      <div className={bg ? 'App layer' : 'App'}>
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
