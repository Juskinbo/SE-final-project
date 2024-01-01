import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Cell, Divider, Image, Button } from '@nutui/nutui-react-taro'
import aquamanImg from '../../assets/posters/Aquaman.jpg'

import './order.scss'

const Order = () => {
  return (
    <View style={{ background: '#f5f5f5', height: '100vh' }}>
      <Cell style={{ marginTop: '10px' }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ color: '#999' }}>横店电影城（博雅城店）</span>
            <span style={{ color: '#999' }}>待消费</span>
          </View>
          <Divider />
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Image src={aquamanImg} width='65px' height='100px'></Image>
              <View
                style={{
                  marginLeft: '10px',
                }}
              >
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: '3',
                    fontWeight: '500',
                  }}
                >
                  海王2：失落的王国 1张
                </span>
                <span
                  style={{ color: '#999', fontWeight: '500', lineHeight: '2' }}
                >
                  周一 01月01日 14:25
                </span>
                <span style={{ color: '#999' }}>5号厅 7排5座</span>
              </View>
            </View>
            <Button
              type='primary'
              onClick={() => {
                Taro.navigateTo({ url: '/pages/ticket/ticket' })
              }}
            >
              查看取票码
            </Button>
          </View>
          <Divider />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#999' }}>总价：58元</span>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Button color='#666' fill='outline'>
                申请退款
              </Button>
              <Button
                color='#666'
                fill='outline'
                style={{ marginLeft: '10px' }}
              >
                申请改签
              </Button>
            </View>
          </View>
        </View>
      </Cell>
      <Cell style={{ marginTop: '10px' }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ color: '#999' }}>横店电影城（博雅城店）</span>
            <span style={{ color: '#999' }}>已完成</span>
          </View>
          <Divider />
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Image src={aquamanImg} width='65px' height='100px'></Image>
              <View
                style={{
                  marginLeft: '10px',
                }}
              >
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: '3',
                    fontWeight: '500',
                  }}
                >
                  海王2：失落的王国 1张
                </span>
                <span
                  style={{ color: '#999', fontWeight: '500', lineHeight: '2' }}
                >
                  周一 01月01日 14:25
                </span>
                <span style={{ color: '#999' }}>5号厅 7排5座</span>
              </View>
            </View>
            <Button type='primary'>评价影片</Button>
          </View>
          <Divider />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#999' }}>总价：58元</span>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Button color='#666' fill='outline' style={{ display: 'none' }}>
                申请退款
              </Button>
              <Button
                color='#666'
                fill='outline'
                style={{ marginLeft: '10px' }}
              >
                删除订单
              </Button>
            </View>
          </View>
        </View>
      </Cell>
      <Cell style={{ marginTop: '10px' }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ color: '#999' }}>横店电影城（博雅城店）</span>
            <span style={{ color: '#999' }}>退款成功</span>
          </View>
          <Divider />
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Image src={aquamanImg} width='65px' height='100px'></Image>
              <View
                style={{
                  marginLeft: '10px',
                }}
              >
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: '3',
                    fontWeight: '500',
                  }}
                >
                  海王2：失落的王国 1张
                </span>
                <span
                  style={{ color: '#999', fontWeight: '500', lineHeight: '2' }}
                >
                  周一 01月01日 14:25
                </span>
                <span style={{ color: '#999' }}>5号厅 7排5座</span>
              </View>
            </View>
          </View>
          <Divider />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#999' }}>总价：58元</span>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Button color='#666' fill='outline'>
                删除订单
              </Button>
              <Button
                color='#666'
                fill='outline'
                style={{ marginLeft: '10px' }}
              >
                退款进度
              </Button>
            </View>
          </View>
        </View>
      </Cell>
    </View>
  )
}

export default Order
