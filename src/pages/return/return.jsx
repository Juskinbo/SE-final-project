import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Cell, Button } from '@nutui/nutui-react-taro'

import './return.scss'

const Return = () => {
  return (
    <View style={{ background: '#ededed', height: '100vh' }}>
      <Cell.Group>
        <Cell title='退还次数' align='center' />
        <Cell align='center' description='本月可退次数：剩余1次（共1次）' />
      </Cell.Group>
      <Cell.Group>
        <Cell title='退还方式' align='center' />
        <Cell
          align='center'
          description={
            <span>
              原路退回
              <i style={{ color: '#f7de20' }}>
                （现金将于1-7个工作日内退还到原支付方）
              </i>
            </span>
          }
        />
      </Cell.Group>
      <Cell.Group>
        <Cell title='退还现金' align='center' />
        <Cell
          align='center'
          description={
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <span>现金</span>
              <span style={{ color: 'red', fontWeight: '500' }}>58元</span>
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
                justifyContent: 'space-between',
              }}
            >
              <span>手续费</span>
              <span style={{ color: 'red', fontWeight: '500' }}>-8元</span>
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
                justifyContent: 'space-between',
              }}
            >
              <span>实际退还</span>
              <span style={{ color: 'red', fontWeight: '500' }}>50元</span>
            </View>
          }
        />
      </Cell.Group>
      <View style={{ padding: '0 20px' }}>
        <Button
          block
          type='primary'
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/detail/detail',
            })
          }}
        >
          提交退款申请
        </Button>
      </View>
    </View>
  )
}
export default Return
