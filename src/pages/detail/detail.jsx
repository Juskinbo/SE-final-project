import React from 'react'
import { View } from '@tarojs/components'
import { Cell, Button } from '@nutui/nutui-react-taro'
import { Checked } from '@nutui/icons-react-taro'

const Detail = () => {
  return (
    <View style={{ background: '#ededed', height: '100vh' }}>
      <Cell.Group>
        <Cell
          align='center'
          description={
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <span style={{ marginRight: '40px' }}>退款金额</span>
              <span style={{ color: 'red' }}>50元</span>
              <span style={{ color: '#999' }}>（已扣除手续费8元）</span>
            </View>
          }
        />
        <Cell
          align='center'
          description={
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <span style={{ marginRight: '40px' }}>到账时间</span>
              <span style={{}}>预计2023年11月11日</span>
            </View>
          }
        />
      </Cell.Group>
      <Cell.Group>
        <Cell
          className='nutui-cell-clickable'
          title='退款流程'
          align='center'
        />
        <Cell
          align='center'
          description={
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Checked color='#f7de20' />
              <View style={{ marginLeft: '10px' }}>
                <span style={{ fontWeight: '500' }}>退款申请已提交</span>
                <span style={{ color: '#999' }}>提交退款申请</span>
                <span style={{ color: '#999' }}>2023-11-11 11:11:11</span>
              </View>
            </View>
          }
        />
      </Cell.Group>
    </View>
  )
}

export default Detail
