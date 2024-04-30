import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
//import RootLayout from './layouts/RootLayout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <div className="md:flex mt-4">
                <Sidebar />
                <main className="md:w-[calc(100%-100px)] ml-auto mr-[20px] pl-4">
                    <Header />
                    <div className="mt-4 mr-">
                        <App />
                    </div>
                </main>
            </div>
        </React.StrictMode>,
    </BrowserRouter>
)
