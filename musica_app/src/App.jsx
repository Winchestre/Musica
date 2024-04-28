import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Radio from './pages/Radio'
import Collections from './pages/Collections'
import Videos from './pages/Videos'
import Profile from './pages/Profile'
import Logout from './pages/Logout'
import Albums from './pages/Albums/Albums'
import AlbumDetail, { AlbumDetailLoader } from './pages/AlbumDetail'
import NotFound from './pages/NotFound'
import TopCharts from './components/TopCharts'
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Routes path="*" element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path="radio" element={<Radio />} />
            <Route path="collections" element={<Collections />} />
            <Route path="videos" element={<Videos />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />
            <Route path="albums" element={<Albums />} />
            <Route path="api/albums/:id" element={<AlbumDetail />} loader={AlbumDetailLoader} />
        </Route>
        )
    )

export default function App(){
	return (
        <RouterProvider router={router} />
    )
}