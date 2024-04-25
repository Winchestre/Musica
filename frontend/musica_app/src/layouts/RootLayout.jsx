import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div className="md:flex mt-4">
            <Sidebar />
            <main className="md:w-[calc(100%-100px)] ml-auto mr-[20px] pl-4">
                <Header />
                <div className="mt-4 mr-">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}