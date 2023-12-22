import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { usePageScroll } from '@tarojs/taro'
import {
  SearchBar,
  Tabbar,
  Tabs,
  ConfigProvider,
} from '@nutui/nutui-react-taro'
import {
  Cart,
  Category,
  Find,
  Home,
  User,
  Dongdong,
  TriangleDown,
} from '@nutui/icons-react-taro'
import RecommendedComponent from '../../components/RecommendedComponent/RecommendedComponent'
import './index.scss'

function Index() {
  const [backGround, setBackGround] = useState({
    background: 'linear-gradient(to bottom, #cab69b 10%, #fff 20%)',
  })
  const [headerBarTheme, setHeaderBarTheme] = useState({
    nutuiSearchbarWidth: '80%',
    nutuiSearchbarBackground: 'rgba(255, 0, 0, 0)',
    nutuiTabsTitlesBackgroundColor: 'rgba(255, 0, 0, 0)',
  })
  const [fontColor, setFontColor] = useState({ color: '#fff' })
  const handleSwiperValue = (value) => {
    switch (value) {
      case 0:
        setBackGround({
          background: 'linear-gradient(to bottom, #cab69b 10%, #fff 20%)',
        })
        break
      case 1:
        setBackGround({
          background: 'linear-gradient(to bottom, #335e72 10%, #fff 20%)',
        })
        break
      case 2:
        setBackGround({
          background: 'linear-gradient(to bottom, #064213 10%, #fff 20%)',
        })
        break
      case 3:
        setBackGround({
          background: 'linear-gradient(to bottom, #675b49 10%, #fff 20%)',
        })
        break
    }
  }
  usePageScroll((res) => {
    if (res.scrollTop > 0) {
      setHeaderBarTheme({
        nutuiSearchbarBackground: '#fff',
        nutuiTabsTitlesBackgroundColor: '#fff',
      })
      setFontColor({ color: '#000' })
    } else {
      setHeaderBarTheme({
        nutuiSearchbarBackground: 'rgba(255, 0, 0, 0)',
        nutuiTabsTitlesBackgroundColor: 'rgba(255, 0, 0, 0)',
      })
      setFontColor({ color: '#fff' })
    }
  })
  return (
    <View className='home-view'>
      <View className='header-bar' style={backGround}>
        <ConfigProvider theme={headerBarTheme}>
          <SearchBar
            onSearch={(value) => Toast.text(value)}
            shape='round'
            placeholder='一闪一闪亮晶晶'
            style={{ position: 'sticky', top: '0', zIndex: 11, color: '#fff' }}
            left={
              <div className='city-select'>
                <Dongdong style={fontColor} />
                <span style={{ ...fontColor, marginLeft: '5px' }}>杭州</span>
                <TriangleDown size='10' style={fontColor} />
              </div>
            }
          />

          <Tabs
            // value={tab1value}
            // onChange={(value) => {
            //   setTab1value(value)
            // }}
            activeType='simple'
            tabStyle={{ position: 'sticky', top: '44px', zIndex: 11 }}
          >
            <Tabs.TabPane
              title={<span style={fontColor}>推荐</span>}
              className='tab-pane'
            >
              <RecommendedComponent getSwiperValue={handleSwiperValue} />
            </Tabs.TabPane>
            <Tabs.TabPane
              title={<span style={fontColor}>怒潮</span>}
              className='tab-pane'
            >
              怒潮
            </Tabs.TabPane>
            <Tabs.TabPane
              title={<span style={fontColor}>一闪一闪</span>}
              className='tab-pane'
            >
              一闪一闪
            </Tabs.TabPane>
            <Tabs.TabPane
              title={<span style={fontColor}>年会不停</span>}
              className='tab-pane'
            >
              年会不停
            </Tabs.TabPane>
            <Tabs.TabPane
              title={<span style={fontColor}>热片解读</span>}
              className='tab-pane'
            >
              热片解读
            </Tabs.TabPane>
            <Tabs.TabPane
              title={<span style={fontColor}>新片预告</span>}
              className='tab-pane'
            >
              新片预告
            </Tabs.TabPane>
            <Tabs.TabPane
              title={<span style={fontColor}>速看电影</span>}
              className='tab-pane'
            >
              速看电影
            </Tabs.TabPane>
          </Tabs>
        </ConfigProvider>
      </View>
      <View className='bottom-navigation'>
        <Tabbar
          onSwitch={(child, idx) => {
            console.log(idx)
          }}
          fixed
        >
          <Tabbar.Item title='首页' icon={<Home size={18} />} />
          <Tabbar.Item title='电影/影院' icon={<Category size={18} />} />
          <Tabbar.Item title='演出' icon={<Find size={18} />} />
          <Tabbar.Item title='玩乐' icon={<Cart size={18} />} />
          <Tabbar.Item title='我的' icon={<User size={18} />} />
        </Tabbar>
      </View>
    </View>
  )
}

export default Index
