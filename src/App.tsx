import * as React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { StateContext } from './context/StateContext';
import './sass/index.scss';

const {
  useEffect,
  useState
} = React

function App() {
  const [backgroundURL, setBackgroundURL] = useState('')

  return (
    <StateContext.Provider value={{backgroundURL, setBackgroundURL}}>
      <div className={backgroundURL && 'App layer' || 'App'} style={{backgroundImage: `url(${backgroundURL})`}}>
        <Header />
        <Main />
      </div>

      <Footer />
    </StateContext.Provider>
  )
}

export default App
