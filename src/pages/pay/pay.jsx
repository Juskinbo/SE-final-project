import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import {
  Image,
  Dialog,
  Checkbox,
  Button,
  Cell,
  Divider,
} from '@nutui/nutui-react-taro'
import { Checked, ArrowSize8, ArrowUp } from '@nutui/icons-react-taro'
import poster from '../../assets/posters/Aquaman.jpg'

import './pay.scss'
const Pay = () => {
  const [visible, setVisible] = useState(true)
  return (
    <>
      <View
        style={{
          height: '100vh',
          background: 'linear-gradient(to bottom,  #fcd9d8, #f2f2f2)',
        }}
      >
        <View style={{ margin: '0 20px' }}>
          <View>
            <Cell>
              <View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Image
                    src={poster}
                    width='100px'
                    height='150px'
                    radius='10px'
                  />
                  <View style={{ marginLeft: '10px' }}>
                    <span style={{ fontSize: '16px', fontWeight: '500' }}>
                      海王2：失落的王国
                    </span>
                    <span>今天01月01日 14:40-16:37 国语2D</span>
                    <span style={{ color: '#666' }}>
                      横店电影城（博雅城店）
                    </span>
                    <span style={{ color: '#666' }}>5号厅 8排3座 8排4座</span>
                    <span style={{ color: '#666' }}>2张 原价¥165</span>
                  </View>
                </View>
                <Divider />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <span
                      style={{
                        color: '#666',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Checked color='#4cd696' size='18' />
                      限时退票
                    </span>
                    <span
                      style={{
                        color: '#666',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Checked color='#4cd696' size='18' />
                      限时改签
                    </span>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <span
                      style={{
                        color: '#666',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      退改签须知
                      <ArrowSize8 color='#666' size='12' />
                    </span>
                  </View>
                </View>
              </View>
            </Cell>
          </View>
        </View>
        <View style={{ margin: '10px 20px' }}>
          <Cell
            title={<span style={{ fontWeight: '500' }}>订单优惠</span>}
            description={
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ lineHeight: '2', color: '#000' }}>
                  <span>影票活动与优惠券</span>
                  <span>猫享卡</span>
                  <span>观影卡</span>
                </View>
                <View style={{ lineHeight: '2' }}>
                  <span
                    style={{
                      color: '#666',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    无可用
                    <ArrowSize8 color='#666' size='12' />
                  </span>
                  <span
                    style={{
                      color: '#666',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    去绑卡
                    <ArrowSize8 color='#666' size='12' />
                  </span>
                  <span
                    style={{
                      color: '#666',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    去使用
                    <ArrowSize8 color='#666' size='12' />
                  </span>
                </View>
              </View>
            }
          />
        </View>
        <View style={{ margin: '10px 20px' }}>
          <Cell
            title={<span style={{ fontWeight: '500' }}>手机号</span>}
            extra={<span>153****8594</span>}
            description={
              <span style={{ whiteSpace: 'nowrap' }}>
                仅用于生成订单，取票码不再通过短信发送
              </span>
            }
          />
        </View>
        <View style={{ margin: '10px 20px' }}>
          <Cell
            title={<span style={{ fontWeight: '500' }}>购票须知</span>}
            description={
              <span>
                1.请提前30分钟左右到达影院现场，通过影院自助取票机完成取票。
                2.若取票过程中遇到无法取票等其它问题，请联系影院工作人员进行处理。
                3.请及时关注电影开场时间，凭票有序检票入场。
                4.如需开具电影票发票,可联系影院工作人员凭当日票根进行开具，若遇到特殊情况请及时联系猫眼客服人员。
                5.退票、改签服务请参考影院具体政策要求，特殊场次及部分使用卡、券场次订单可能不支持此服务。
                6.客服电话:1010-5335，工作时间:9:00-22:00，国家法定节假日延至24:00。
              </span>
            }
          />
        </View>
        <View
          style={{
            position: 'fixed',
            bottom: '0',
            width: '100%',
          }}
        >
          <Cell style={{ marginBottom: '0' }}>
            <View className='bottom-info'>
              <View>
                <span style={{ fontWeight: '500', fontSize: '16px' }}>
                  ¥225
                </span>
                <span style={{ fontSize: '12px', color: '#666' }}>
                  明细
                  <ArrowUp size='14' />
                </span>
              </View>
              <Button
                type='primary'
                onClick={() => {
                  Taro.navigateTo({
                    url: '/pages/ticket/ticket',
                  })
                }}
              >
                确认支付
              </Button>
            </View>
          </Cell>
        </View>
      </View>
      <Dialog
        visible={visible}
        title='退改签规定协议'
        footerDirection='vertical'
        onConfirm={() => {
          setVisible(false)
        }}
        onCancel={() => {
          //  跳转回上一页
          setVisible(false)
        }}
      >
        <span style={{ marginBottom: '10px' }}>
          用户点击同意本协议之前，请务必认真阅读、完全理解本协议中全部条款，特别是其中与用户权益有或可能具有重大关系的条款
          (包括但不限于第1.2条、第1.3条、第2条、第3.2条)。当用户按照页面提示阅读、点击确认同意本协议及完成支付购票时，即表示用户已经充分阅读、理解并接受本协议的全部内容。如用户不同意接受本协议的任何条款，或无法理解本协议相关条款含义的，请不要进行后续操作
          (包括但不限于点击确认或继续使用猫眼平台服务等) 。
        </span>
        <Checkbox
          label='我已阅读并同意以上协议'
          defaultChecked={false}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        />
      </Dialog>
    </>
  )
}

export default Pay
