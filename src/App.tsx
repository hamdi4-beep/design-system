import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { StateContext } from './context/StateContext';
import './sass/index.scss';

function App() {
  const [event, dispatch] = React.useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'change background':
        return {
          ...state,
          value: action.value
        }

      default:
        return {}
    }
  }, {})

  if (event.value) {
    const body = document.body as HTMLBodyElement
    body.style.backgroundImage = `url(${event.value})`
  }

  return (
    <StateContext.Provider value={{event, dispatch}}>
      <div className={event.value && 'App layer' || 'App'}>
        <Header />
        <Main />
      </div>

      <Footer />
    </StateContext.Provider>
  )
}

export default App
