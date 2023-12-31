import React from 'react'
import { View } from '@tarojs/components'
import {
  Image,
  Button,
  Tabs,
  ConfigProvider,
  Cell,
} from '@nutui/nutui-react-taro'
import { FollowAdd } from '@nutui/icons-react-taro'
import TheaterListComponent from '../../components/TheaterListComponent/TheaterListComponent'
import poster from '../../assets/posters/Aquaman.jpg'

import './movie.scss'
const Movie = () => {
  return (
    <View style={{ background: '#1d2e3f', height: '100vh' }}>
      <View className='movie-info'>
        <Image src={poster} width='120px' height='170px' radius='10px' />
        <View className='movie-info-text'>
          <View>
            <span className='movie-name'>海王2：失落的王国</span>
            <span className='movie-english-name'>
              Aquaman and the Lost Kingdom
            </span>
            <span className='movie-type'>动作 冒险 奇幻</span>
            <span className='movie-datetime'>
              2023-12-20中国大陆上映 125分钟
            </span>
            <span>
              <i className='movie-score'>9.3</i> 猫眼购票评分
            </span>
          </View>
          <Button color='#6c7782' style={{ borderRadius: '10px' }}>
            <View className='follow-button'>
              <FollowAdd size='16' />
              <span style={{ marginLeft: '6px' }}>想看</span>
            </View>
          </Button>
        </View>
      </View>
      <View className='theater-select'>
        <ConfigProvider
          theme={{
            nutuiTabsTitlesBackgroundColor: 'rgba(0, 0, 0, 0)',
          }}
        >
          <Tabs>
            <Tabs.TabPane title='今天 1月1日'>
              <TheaterListComponent />
            </Tabs.TabPane>
            <Tabs.TabPane title='明天 1月2日'>
              {' '}
              <TheaterListComponent />
            </Tabs.TabPane>
            <Tabs.TabPane title='周三 1月3日'>
              {' '}
              <TheaterListComponent />
            </Tabs.TabPane>
            <Tabs.TabPane title='周四 1月4日'>
              {' '}
              <TheaterListComponent />
            </Tabs.TabPane>
            <Tabs.TabPane title='周五 1月5日'>
              {' '}
              <TheaterListComponent />
            </Tabs.TabPane>
            <Tabs.TabPane title='周六 1月6日'>
              {' '}
              <TheaterListComponent />
            </Tabs.TabPane>
            <Tabs.TabPane title='周日 1月7日'>
              {' '}
              <TheaterListComponent />
            </Tabs.TabPane>
          </Tabs>
        </ConfigProvider>
      </View>
    </View>
  )
}
export default Movie
