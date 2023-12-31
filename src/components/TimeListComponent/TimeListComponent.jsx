import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Menu, Cell, Tag, Button } from '@nutui/nutui-react-taro'

import './TimeListComponent.scss'

const TimeListComponent = () => {
  const list = (length) => {
    let res = []
    for (let i = 0; i < length; i++) {
      res.push(
        <Cell
          style={{
            padding: '10px 0',
          }}
          description={
            <View className='time-info'>
              <View className='time-info-item'>
                <View
                  style={{
                    marginRight: '10px',
                  }}
                >
                  <span style={{ fontWeight: '500', fontSize: '16px' }}>
                    12:05
                  </span>
                  <span
                    style={{
                      color: '#999',
                    }}
                  >
                    14:10散场
                  </span>
                </View>
                <View>
                  <span
                    style={{
                      fontSize: '14px',
                    }}
                  >
                    英语2D
                  </span>
                  <span
                    style={{
                      color: '#999',
                    }}
                  >
                    4号杜比全景声厅
                  </span>
                </View>
              </View>
              <View className='time-info-item'>
                <View
                  style={{
                    marginRight: '10px',
                  }}
                >
                  <span
                    style={{
                      color: '#f03f48',
                      fontSize: '16px',
                    }}
                  >
                    ¥44
                  </span>
                  <Tag background='#ff991f'>影城卡首单</Tag>
                  <Tag plain background='#ff991f'>
                    <span>35.4元</span>
                  </Tag>
                </View>
                <Button color='#f03f48' fill='outline'>
                  购票
                </Button>
              </View>
            </View>
          }
        />
      )
    }
    return res
  }
  return (
    <View>
      <Cell.Group>{list(20)}</Cell.Group>
    </View>
  )
}
export default TimeListComponent
