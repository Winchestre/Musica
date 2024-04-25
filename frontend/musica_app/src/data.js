import home from './assets/Bulk/Home.svg'
import radio from './assets/Bulk/Radio.svg'
import playlist from './assets/Bulk/playlist (1).svg'
import videos from './assets/Bulk/videos.svg'
import profile from './assets/Bulk/profile.svg'
import logout from './assets/Bulk/Logout.svg'

export const navItems = [
    {
        label: "Home",
        path: "/",
        icon: home,
    },
    {
        label: "My Collections",
        path: "collections",
        icon: playlist,
    },
    {
        label: "Radio",
        path: "radio",
        icon: radio,
    },
    {
        label: "Music Videos",
        path: "videos",
        icon: videos,
    },
    {
        label: "Profile",
        path: "profile",
        icon: profile,
    },
    {
        label: "Logout",
        path: "logout",
        icon: logout,
    },
]