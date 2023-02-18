import { IconType } from "react-icons/lib"
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {CiSearch} from 'react-icons/ci'
import {FiSearch} from 'react-icons/fi'
import {MdOutlineExplore, MdExplore} from 'react-icons/md'
import {BsCameraReels, BsCameraReelsFill} from 'react-icons/bs'
import {RiMessengerLine, RiMessengerFill, RiAddBoxLine,RiAddBoxFill, RiAccountCircleLine, RiAccountCircleFill } from 'react-icons/ri';



type TopBarItem = {
    id: number,
    name: string,
    icon: IconType,
    iconOnFocus: IconType,
    toolTipText: string,
    direction?: string,
    focus: boolean
    

}




export const topBarItems: TopBarItem[]= [
  
    {
        id: 1,
        name: 'Home',
        icon: AiOutlineHome,
        iconOnFocus: AiFillHome,
        toolTipText: 'home',
        direction: 'home',
        focus: true
    },

    {
        id: 2,
        name: 'Search',
        icon: CiSearch,
        iconOnFocus: FiSearch,
        toolTipText: 'search',
        focus: false
        
    },

    {
        id: 3,
        name: 'Explore',
        icon: MdOutlineExplore,
        iconOnFocus: MdExplore,
        toolTipText: 'explore',
        direction: 'explore',
        focus: false
        
    } ,

    {
        id: 4,
        name: 'Reels',
        icon: BsCameraReels,
        iconOnFocus: BsCameraReelsFill,
        toolTipText: 'reels',
        direction: 'reels/videos',
        focus: false
        
    }  ,

    {
        id: 5,
        name: 'Messages',
        icon: RiMessengerLine,
        iconOnFocus: RiMessengerFill,
        toolTipText: 'messages',
        direction: 'direct/inbox',
        focus: false
        
    }  ,

    {
        id: 6,
        name: 'Create',
        icon: RiAddBoxLine,
        iconOnFocus: RiAddBoxFill,
        toolTipText: 'create',
        focus: false
        
    }  ,

    {
        id: 7,
        name: 'Profile',
        icon: RiAccountCircleLine,
        iconOnFocus: RiAccountCircleFill,
        toolTipText: 'profile',
        direction: 'profile',
        focus: false
        
    }





]