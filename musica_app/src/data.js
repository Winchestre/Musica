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
        label: "Home"
    },
    {
        label: "My Collections",
        path: "collections",
        icon: playlist,
        label: "My Collections",
    },
    {
        label: "Radio",
        path: "radio",
        icon: radio,
        label: "Radio",
    },
    {
        label: "Music Videos",
        path: "videos",
        icon: videos,
        label: "Music Videos",
    },
    {
        label: "Profile",
        path: "profile",
        icon: profile,
        label: "Profile",
    },
    {
        label: "Logout",
        path: "logout",
        icon: logout,
        label: "Logout",
    },
]