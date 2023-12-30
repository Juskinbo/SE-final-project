import React, { useState } from 'react'
import { View } from '@tarojs/components'

import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'
import HomeComponent from '../../components/HomeComponent/HomeComponent'

import './index.scss'

function Index() {
  const [showComponent, setShowComponent] = useState(0)
  return (
    <View>
      {showComponent === 0 && <HomeComponent />}
      <View className='bottom-navigation'>
        <Tabbar
          onSwitch={(child) => {
            console.log(child)
            setShowComponent(child)
          }}
          fixed
        >
          <Tabbar.Item title='首页' icon={<Home size={18} />} />
          <Tabbar.Item title='电影/影院' icon={<Category size={18} />} />
          <Tabbar.Item title='演出' icon={<Find size={18} />} />
          <Tabbar.Item title='玩乐' icon={<Cart size={18} />} />
          <Tabbar.Item title='我的' icon={<User size={18} />} dot />
        </Tabbar>
      </View>
    </View>
  )
}

export default Index
