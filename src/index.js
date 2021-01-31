import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import AuthContext from '@Context/AuthContext'
import UtilsContext from '@Context/UtilsContext'
import SystemContext from '@Context/SystemContext'
import '@Styles/main.scss'

ReactDOM.render(
   <React.StrictMode>
      <AuthContext>
         <UtilsContext>
            <SystemContext>
               <App />
            </SystemContext>
         </UtilsContext>
      </AuthContext>
   </React.StrictMode>,
   document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
