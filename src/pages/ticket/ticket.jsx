import React from 'react'
import { View } from '@tarojs/components'
import {
  Image,
  Cell,
  Divider,
  Grid,
  ConfigProvider,
} from '@nutui/nutui-react-taro'
import {
  PackageArrowDown,
  AddRectangle,
  UserAdd,
  ArrowSize8,
  Phone,
  Location,
} from '@nutui/icons-react-taro'
import poster from '../../assets/posters/Aquaman.jpg'
import qrCode from '../../assets/images/qrCode.jpg'

import './ticket.scss'
const Ticket = () => {
  return (
    <>
      <View
        style={{
          height: '100vh',
          background: 'linear-gradient(to bottom,  #1d2e3f 10%, #fff)',
        }}
      >
        <View style={{ margin: '0 20px' }}>
          <View>
            <Cell style={{ background: '#1d2e3f', boxShadow: 'none' }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <span
                  style={{
                    color: '#999',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  横店电影城（博雅城店）
                  <ArrowSize8 size='12' />
                </span>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Location
                    size='16'
                    color='#999'
                    style={{
                      marginRight: '5px',
                    }}
                  />
                  <Phone size='16' color='#999' />
                </View>
              </View>
            </Cell>
            <Cell>
              <View style={{ width: '100%' }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <View>
                    <span
                      style={{
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '3',
                      }}
                    >
                      海王2：失落的王国
                    </span>
                    <span>国语2D 1张</span>
                  </View>
                  <Image
                    src={poster}
                    width='70px'
                    height='100px'
                    radius='10px'
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                  }}
                >
                  <View style={{ marginRight: '30px' }}>
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      周六 10-21
                    </span>
                    <span>14:30~17:31</span>
                  </View>
                  <View>
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      六号厅
                    </span>
                    <span>6排8座</span>
                  </View>
                </View>
                <Divider />
                <View>
                  <Cell
                    title={<span style={{ fontWeight: '500' }}>取电影票</span>}
                    style={{ boxShadow: 'none', padding: '0' }}
                    description={
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          marginTop: '20px',
                        }}
                      >
                        <Image src={qrCode} width='150px' height='150px' />
                        <View>
                          <ConfigProvider
                            theme={{
                              nutuiGridBorderColor: 'rgba(0, 0, 0, 0)',
                            }}
                          >
                            <Grid columns='3'>
                              <Grid.Item text='保存到相册'>
                                <PackageArrowDown size='30' />
                              </Grid.Item>
                              <Grid.Item text='添加到日历'>
                                <AddRectangle size='30' />
                              </Grid.Item>
                              <Grid.Item text='分享给好友'>
                                <UserAdd size='30' />
                              </Grid.Item>
                            </Grid>
                          </ConfigProvider>
                        </View>
                      </View>
                    }
                  />
                </View>
              </View>
            </Cell>
          </View>
        </View>
      </View>
    </>
  )
}

export default Ticket
