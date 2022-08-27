import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './Features/Store/Store'
import { InjectGymSlice } from './Features/Api/SliceINjection'

Store.dispatch(InjectGymSlice.endpoints.getData.initiate())
Store.dispatch(InjectGymSlice.endpoints.GetParts.initiate())
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals()
