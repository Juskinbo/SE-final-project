import React from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Button, Cell, Checkbox, ConfigProvider } from '@nutui/nutui-react-taro'

import './seat.scss'

class Seat extends React.Component {
  $instance = getCurrentInstance()
  params = null
  componentDidMount() {
    this.params = this.$instance.router.params
  }

  render() {
    return (
      <View className='seat-select'>
        <ConfigProvider
          theme={{
            nutuiCheckboxButtonBorderRadius: '2px',
            nutuiCheckboxButtonPadding: '8px',
            nutuiCellPadding: '0',
            nutuiCellBoxShadow: 'none',
            nutuiCheckboxButtonActiveBorder: '1px solid #5aabfe',
          }}
        >
          <Checkbox.Group max={6} style={{ paddingTop: '20px' }}>
            <Cell className='seat-row'>
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='1'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='2'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='3'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='4'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='5'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='6'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='7'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='8'
              />
            </Cell>
            <Cell className='seat-row'>
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='9'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='10'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='11'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='12'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='13'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='14'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='15'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='16'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='17'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='18'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='19'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='20'
              />
            </Cell>
            <Cell className='seat-row'>
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='21'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='22'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='23'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='24'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='25'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='26'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='27'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='28'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='29'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='30'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='31'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='32'
              />
            </Cell>
            <Cell className='seat-row'>
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='33'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='34'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='35'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='36'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='37'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='38'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='39'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='40'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='41'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='42'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='43'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='44'
              />
            </Cell>
            <Cell className='seat-row'>
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='45'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='46'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='47'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='48'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='49'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='50'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='51'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='52'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='54'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='55'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='56'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='57'
              />
            </Cell>
            <Cell className='seat-row'>
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='58'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='59'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='61'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='62'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='63'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='64'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='65'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='66'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='67'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='68'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='69'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='70'
              />
            </Cell>
            <Cell className='seat-row'>
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='71'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='72'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='73'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='74'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='75'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='76'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='77'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='78'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='79'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='80'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='81'
              />
              <Checkbox
                className='seat'
                defaultChecked={false}
                shape='button'
                value='82'
              />
            </Cell>
          </Checkbox.Group>
        </ConfigProvider>
        <View className='seat-info'>
          <View
            style={{
              margin: '0 20px',
            }}
          >
            <View className='seat-info-item'>
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: '500',
                }}
              >
                海王2：失落的王国
              </span>
              <span
                style={{
                  color: '#666',
                  fontSize: '14px',
                  fontWeight: '400',
                  marginLeft: '10px',
                }}
              >
                1月1日 00:30-02:35 原版3D
              </span>
              <View className='selected-seat'>
                <View
                  style={{
                    background: '#f6f6f6',
                    padding: '5px 10px',
                    marginRight: '10px',
                  }}
                >
                  <span>F排15座</span>
                  <span>¥75</span>
                </View>
                <View style={{ background: '#f6f6f6', padding: '5px 10px' }}>
                  <span>F排16座</span>
                  <span>¥75</span>
                </View>
              </View>
            </View>
            <Button
              block
              onClick={() => {
                console.log(this.params)
                if (this.params?.type) {
                  console.log(this.params.type)
                  Taro.navigateTo({
                    url: '/pages/pay/pay?type=' + this.params.type,
                  })
                } else {
                  Taro.navigateTo({ url: '/pages/pay/pay' })
                }
              }}
              color='#ff800e'
              size='large'
              style={{ fontSize: '18px', '--nutui-button-border-width': '0' }}
            >
              ¥225 确认选座
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
export default Seat
