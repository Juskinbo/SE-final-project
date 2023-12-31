import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Menu, Cell, Tag } from '@nutui/nutui-react-taro'

import './TheaterListComponent.scss'

const TheaterListComponent = () => {
  const [locationOption] = useState([{ text: '杭州全城', value: 0 }])
  const [sortOption] = useState([
    { text: '推荐排序', value: 'recommend' },
    { text: '距离优先', value: 'destination first' },
    { text: '低价优先', value: 'price first' },
  ])
  const [brandOption] = useState([{ text: '品牌', value: 'brand' }])

  const list = (length) => {
    let res = []
    for (let i = 0; i < length; i++) {
      res.push(
        <Cell
          onClick={() => {
            console.log('click')
          }}
          title={
            <span style={{ fontWeight: 'bold' }}>横店电影城（博雅城店）</span>
          }
          extra={
            <span style={{ color: 'red', fontWeight: 'bold' }}>¥68 起</span>
          }
          description={
            <View>
              <span style={{ whiteSpace: 'nowrap' }}>
                余杭区文一西路常二路西溪三期亲橙里五楼
              </span>
              <Tag background='#5fa2ed' plain style={{ marginRight: '2px' }}>
                可退票
              </Tag>
              <Tag background='#5fa2ed' plain style={{ marginRight: '2px' }}>
                可改签
              </Tag>
              <Tag background='#ff991f' plain style={{ marginRight: '2px' }}>
                小吃
              </Tag>
              <Tag background='#98999e' plain style={{ marginRight: '2px' }}>
                3D眼镜免费
              </Tag>
              <Tag background='#98999e' plain>
                杜比全景声厅
              </Tag>
              <span style={{ color: '#666' }}>近期场次：12:40</span>
            </View>
          }
        />
      )
    }
    return res
  }
  return (
    <View>
      <Menu>
        <Menu.Item options={locationOption} value={0} />
        <Menu.Item options={sortOption} value='recommend' />
        <Menu.Item options={brandOption} value='brand' />
      </Menu>
      <Cell.Group>{list(20)}</Cell.Group>
    </View>
  )
}
export default TheaterListComponent
