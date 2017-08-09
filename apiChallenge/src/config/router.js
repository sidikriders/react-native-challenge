import { DrawerNavigator } from 'react-navigation'


import ChatWithSidik from '../components/chatWithSidik'
import Home from '../components/Home'
import AdorableAvatar from '../components/AdorableAvatar'

const Navigasinya = DrawerNavigator({
  Home: { screen : Home },
  Chat: { screen: ChatWithSidik },
  Avatar: { screen: AdorableAvatar },
});

export default Navigasinya
