import React from 'react'
import { Menu, VideoCall,SearchIcon,AppsIcon,NotificationsIcon } from '@mui/icons-material'
import { Avatar } from '@mui/material'


function Header() {
  return (
    <div className='header'>
        <Menu/>
        <img 
        className='header__logo'
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Fsbv4Gg_91llJSlA73kDbgHaEK%26pid%3DApi&f=1&ipt=385475d24a888077b7de9c3f0d7f6bfed027afd6b40d45fdafb90f290f3a7c01&ipo=images' alt='logo' />
        <input type='text' />
        <SearchIcon />
        <VideoCall />
        <AppsIcon />
        <NotificationsIcon />
        < Avatar
        alt='Victor'
        src='https://images.generated.photos/NzE4kyfJVa3CiYNOYGtV21UPB2UDWB7InECbI91hXVU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQyNDIzLmpwZw.jpg'
        />
    </div>
  )
}

export default Header