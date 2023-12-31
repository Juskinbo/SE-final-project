import React from 'react'
import { View } from '@tarojs/components'
import {
  Image,
  Button,
  Tabs,
  ConfigProvider,
  Divider,
  Cell,
} from '@nutui/nutui-react-taro'
import { Location, Star } from '@nutui/icons-react-taro'
import TimeListComponent from '../../components/TimeListComponent/TimeListComponent'
import poster from '../../assets/posters/Aquaman.jpg'

import './time.scss'
const Time = () => {
  return (
    <View style={{ height: '100vh' }}>
      <View className='theater-info'>
        <View className='theater-info-left'>
          <span className='theater-name'>横店电影城（博雅城店）</span>
          <span className='theater-location'>
            余杭区文一西路常二路西溪三期亲橙里五楼
          </span>
        </View>
        <View className='theater-right'>
          <View className='theater-icon'>
            <Location color='#5aabfe' />
            <span>收藏</span>
          </View>
          <ConfigProvider
            theme={{
              nutuiDividerVerticalHeight: '20px',
            }}
          >
            <Divider direction='vertical' />
          </ConfigProvider>
          <View className='theater-icon'>
            <Star color='#fbb21c' />
            <span>收藏</span>
          </View>
        </View>
      </View>
      <View className='poster-show'>
        <Image src={poster} width='100px' height='150px' />
      </View>
      <View className='time-select'>
        <Cell>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '16px' }}>
              海王2：失踪的王国 <i style={{ color: '#ffb400' }}>8.8分</i>
            </span>
            <span style={{ color: '#9a9a9a' }}>125分钟 | 动作 | 杰森·莫玛</span>
          </View>
        </Cell>
        <ConfigProvider
          theme={{
            nutuiCellPadding: '0',
            nutuiTabsTitlesBackgroundColor: 'rgba(0,0,0,0)',
            nutuiTabsTitlesItemActiveColor: '#1a1a1a',
          }}
        >
          <Tabs>
            <Tabs.TabPane title='今天'>
              <TimeListComponent />
            </Tabs.TabPane>
            <Tabs.TabPane title='明天'>
              <TimeListComponent />
            </Tabs.TabPane>
          </Tabs>
        </ConfigProvider>
      </View>
    </View>
  )
}
export default Time
