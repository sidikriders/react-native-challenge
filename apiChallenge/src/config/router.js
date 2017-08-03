import { DrawerNavigator } from 'react-navigation'


import chatWithSidik from '../components/chatWithSidik'
import Home from '../components/Home'
import AdorableAvatar from '../components/AdorableAvatar'

const Navigasinya = DrawerNavigator({
  Home: { screen : Home },
  Chat: { screen: chatWithSidik },
  Avatar: { screen: AdorableAvatar },
});

export default Navigasinya
