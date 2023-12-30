import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { usePageScroll } from '@tarojs/taro'
import { SearchBar, Tabs, Image, ConfigProvider } from '@nutui/nutui-react-taro'
import { Dongdong, TriangleDown } from '@nutui/icons-react-taro'
import RecommendedComponent from '../RecommendedComponent/RecommendedComponent'

let backgroundValue = 0

const HomeComponent = () => {
  const [backGround, setBackGround] = useState({
    background: 'linear-gradient(to bottom, #cab69b 10%, #fff 20%)',
  })
  const [headerBarTheme, setHeaderBarTheme] = useState({
    nutuiSearchbarContentBackground: '#f5f5f5',
    nutuiSearchbarBackground: 'rgba(255, 0, 0, 0)',
    nutuiTabsTitlesBackgroundColor: 'rgba(255, 0, 0, 0)',
  })
  const [tabValue, setTabValue] = useState(0)
  const [fontColor, setFontColor] = useState({ color: '#fff' })
  const handleSwiperValue = (...value) => {
    if (value.length !== 0) {
      backgroundValue = value[0]
    }
    if (tabValue === 0) {
      switch (backgroundValue) {
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
  }
  usePageScroll((res) => {
    if (res.scrollTop > 0 && tabValue === 0) {
      setHeaderBarTheme({
        nutuiSearchbarBackground: '#fff',
        nutuiSearchbarContentBackground: '#f5f5f5',
        nutuiTabsTitlesBackgroundColor: '#fff',
      })
      setFontColor({ color: '#000' })
    } else if (tabValue === 0) {
      setHeaderBarTheme({
        nutuiSearchbarBackground: 'rgba(255, 0, 0, 0)',
        nutuiSearchbarContentBackground: '#f5f5f5',
        nutuiTabsTitlesBackgroundColor: 'rgba(255, 0, 0, 0)',
      })
      setFontColor({ color: '#fff' })
      handleSwiperValue()
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
            value={tabValue}
            onChange={(value) => {
              setTabValue(value)
              if (value !== 0) {
                setHeaderBarTheme({
                  nutuiSearchbarBackground: '#fff',
                  nutuiTabsTitlesBackgroundColor: '#fff',
                })
                setFontColor({ color: '#000' })
                setBackGround({
                  background: '#fff',
                })
              } else {
                setHeaderBarTheme({
                  nutuiSearchbarBackground: '#fff',
                  nutuiSearchbarContentBackground: '#f5f5f5',
                  nutuiTabsTitlesBackgroundColor: '#fff',
                })
                setFontColor({ color: '#000' })
              }
            }}
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
              {/* 怒潮 */}
              <Image src='https://p0.pipi.cn/friday/a70ac5ebf2f54d38fca66e1ce7fcb960.jpg?imageView2/2/w/1500/q/80' />
            </Tabs.TabPane>
            <Tabs.TabPane
              title={<span style={fontColor}>一闪一闪</span>}
              className='tab-pane'
            >
              {/* 一闪一闪 */}
              <Image src='https://p0.pipi.cn/friday/148a8311e6f734d43b5cf72ab27b1344.jpg?imageView2/2/w/1500/q/80' />
            </Tabs.TabPane>
            <Tabs.TabPane
              title={<span style={fontColor}>年会不停</span>}
              className='tab-pane'
            >
              {/* 年会不停 */}
              <Image src='https://p0.pipi.cn/friday/9767c01055af7eda2fd8046b115fcac1.jpg?imageView2/2/w/1500/q/80' />
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
    </View>
  )
}

export default HomeComponent
