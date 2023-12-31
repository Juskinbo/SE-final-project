import React from 'react'
import { View } from '@tarojs/components'
import {
  Avatar,
  Progress,
  Button,
  Grid,
  ConfigProvider,
  Cell,
} from '@nutui/nutui-react-taro'
import { ArrowSize8, Coupon, Cart, Eye, Invoice } from '@nutui/icons-react-taro'

import './MeComponent.scss'

const myOrderList = [
  {
    content: '电影票',
    icon: <Coupon size='30' />,
  },
  {
    content: '演出/玩乐',
    icon: <Cart size='30' />,
  },
  {
    content: '在线观影',
    icon: <Eye size='30' />,
  },
  {
    content: '周边',
    icon: <Invoice size='30' />,
  },
]
const discountInfoList = [
  {
    name: '优惠券',
    content: '0张可用',
  },
  {
    name: '影城卡',
    content: '0张可用',
  },
  {
    name: '猫享卡',
    content: '去绑卡',
  },
  {
    name: '喵币',
    content: '0',
  },
]
const MeComponent = () => {
  return (
    <View className='me-view'>
      <View className='info-title'>
        <View className='info-title-left'>
          <Avatar
            size='large'
            src='https://juskinbo.cn/usr/photos/avatar.jpg'
          />
          <View className='username'>
            <span style={{ fontWeight: '500', fontSize: '20px' }}>
              Juskinbo
            </span>
            <View>
              <span className='level'> 成长值 10/30</span>
              <Progress percent='33' strokeWidth='2' color='red' />
            </View>
          </View>
        </View>
        <Button color='linear-gradient(to right, #fff ,#fbe1e3)' fill='none'>
          <View className='personal-homepage'>
            <i style={{ color: '#887877' }}>个人主页</i>
            <ArrowSize8 color='#887877' size='12' />
          </View>
        </Button>
      </View>
      <View className='movie-list'>
        <ConfigProvider
          theme={{
            nutuiGridBorderColor: 'rgba(0, 0, 0, 0)',
            nutuiGridItemContentBgColor: 'rgba(0, 0, 0, 0)',
          }}
        >
          <Grid columns={2}>
            <Grid.Item>
              <View className='movie-list-item'>
                <span className='flex-row-center'>
                  <i style={{ fontSize: '24px', marginRight: '5px' }}>0</i> 想看
                </span>
                <ArrowSize8 color='#887877' size='12' />
              </View>
            </Grid.Item>
            <Grid.Item>
              <View className='movie-list-item'>
                <span className='flex-row-center'>
                  <i style={{ fontSize: '24px', marginRight: '5px' }}>5</i> 看过
                </span>
                <ArrowSize8 color='#887877' size='12' />
              </View>
            </Grid.Item>
          </Grid>
        </ConfigProvider>
      </View>
      <View className='my-order'>
        <Cell
          title={<span className='my-order-title'>我的订单</span>}
          description={
            <ConfigProvider
              theme={{
                nutuiGridBorderColor: 'rgba(0, 0, 0, 0)',
                nutuiGridItemContentBgColor: 'rgba(0, 0, 0, 0)',
                nutuiGridItemContentPadding: '16px 0 8px 0',
              }}
            >
              <Grid columns={4}>
                {myOrderList.map((item, index) => {
                  return (
                    <Grid.Item key={index}>
                      {item.icon}
                      <span className='my-order-content'>{item.content}</span>
                    </Grid.Item>
                  )
                })}
              </Grid>
            </ConfigProvider>
          }
        ></Cell>
      </View>
      <View className='discount-info'>
        <Cell
          description={
            <ConfigProvider
              theme={{
                nutuiGridBorderColor: 'rgba(0, 0, 0, 0)',
                nutuiGridItemContentBgColor: 'rgba(0, 0, 0, 0)',
                nutuiGridItemContentPadding: '0',
              }}
            >
              <Grid columns={4}>
                {discountInfoList.map((item, index) => {
                  return (
                    <Grid.Item key={index}>
                      <span style={{ fontSize: '16px', fontWeight: '500' }}>
                        {item.name}
                      </span>
                      <span style={{ color: '#696969' }}>{item.content}</span>
                    </Grid.Item>
                  )
                })}
              </Grid>
            </ConfigProvider>
          }
        ></Cell>
      </View>
    </View>
  )
}

export default MeComponent
