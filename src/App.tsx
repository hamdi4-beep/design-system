import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { StateContext } from './context/StateContext';
import './sass/index.scss';

function App() {
  const [bg, setBg] = useState('')

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.style.backgroundImage = `url(${bg})`
  }, [bg])

  return (
    <div className="App">
      <h1>Design System</h1>
      <Header />

      <StateContext.Provider value={{bg, setBg}}>
        <Main />
      </StateContext.Provider>
    </div>
  )
}

export default App
