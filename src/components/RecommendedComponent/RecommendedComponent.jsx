import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView } from '@tarojs/components'
import {
  Swiper,
  Cell,
  Divider,
  Button,
  Grid,
  Image,
  ConfigProvider,
} from '@nutui/nutui-react-taro'
import { ArrowRight } from '@nutui/icons-react-taro'
import movieImg from '../../assets/icons/movie.svg'
import showImg from '../../assets/icons/show.svg'
import talkShowImg from '../../assets/icons/talk-show.svg'
import attractionImg from '../../assets/icons/attraction.svg'
import entertainmentImg from '../../assets/icons/entertainment.svg'
import mallImg from '../../assets/icons/mall.svg'
import screeningRoomImg from '../../assets/icons/screening-room.svg'
import ticketImg from '../../assets/icons/ticket.svg'
import vipImg from '../../assets/icons/vip.svg'
import reductionImg from '../../assets/icons/reduction.svg'
import backRoomImg from '../../assets/icons/back-room.svg'
import microphoneImg from '../../assets/icons/microphone.svg'
import brandCinemaImg from '../../assets/icons/brand-cinema.svg'
import aquamanImg from '../../assets/posters/Aquaman.jpg'
import detectiveConanImg from '../../assets/posters/Detective Conan.jpeg'
import endlessJourney from '../../assets/posters/Endless Journey.jpeg'
import johnnyKeepWalkingImg from '../../assets/posters/Johnny Keep Walking.jpeg'
import laLaLand from '../../assets/posters/La La Land.jpeg'
import loveLifeLight from '../../assets/posters/Love Life Light.jpeg'
import wolfHiding from '../../assets/posters/Wolf Hiding.jpeg'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpeg'
import './RecommendedComponent.scss'

const list = [img1, img2, img3, img4]

const itemList = [
  { img: movieImg, text: '电影/影院' },
  { img: showImg, text: '演出' },
  { img: talkShowImg, text: '脱口秀' },
  { img: attractionImg, text: '景点门票' },
  { img: entertainmentImg, text: '玩乐' },
  { img: mallImg, text: '周边商城' },
  { img: screeningRoomImg, text: '放映厅' },
  { img: ticketImg, text: '舒克贝塔' },
  { img: vipImg, text: '省钱月卡' },
  { img: reductionImg, text: '双旦秒杀' },
  { img: backRoomImg, text: '密室' },
  { img: microphoneImg, text: '张惠妹' },
  { img: brandCinemaImg, text: '品牌影院' },
  { img: ticketImg, text: '一闪' },
]

const movieList = [
  { img: aquamanImg, text: '海王2：失落的王国', type: '购票' },
  { img: detectiveConanImg, text: '名侦探柯南：黑铁的鱼影', type: '购票' },
  { img: endlessJourney, text: '三大队', type: '购票' },
  { img: johnnyKeepWalkingImg, text: '年会不能停！', type: '预售' },
  { img: laLaLand, text: '爱乐之城', type: '购票' },
  { img: loveLifeLight, text: '照明商店', type: '预售' },
  { img: wolfHiding, text: '怒潮', type: '购票' },
]
const RecommendedComponent = ({ getSwiperValue }) => {
  const changeSwiper = (e) => {
    getSwiperValue(e.detail.current)
  }
  return (
    <>
      <Swiper
        defaultValue={0}
        onChange={changeSwiper}
        indicator
        autoPlay
        className='swiper'
      >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img
                width='100%'
                height='100%'
                src={item}
                onClick={() => console.log(index)}
              />
            </Swiper.Item>
          )
        })}
      </Swiper>
      <Cell className='item-select'>
        <ScrollView scrollX scrollWithAnimation>
          <ConfigProvider
            theme={{
              nutuiGridBorderColor: 'rgba(0, 0, 0, 0)',
              nutuiGridItemContentPadding: '8px 4px',
              nutuiGridItemTextColor: '#707070',
            }}
          >
            <Grid columns={7} style={{ width: '600px' }}>
              {itemList.map((item, index) => {
                return (
                  <Grid.Item text={item.text} className='item-list' key={index}>
                    <Image src={item.img} width='50px' height='50px' />
                  </Grid.Item>
                )
              })}
            </Grid>
          </ConfigProvider>
        </ScrollView>
      </Cell>
      <Cell className='item-select'>
        <div className='top-bar'>
          <span className='title'>正在热映</span>
          <span className='extra-link'>
            全部43部
            <ArrowRight size={12} />
          </span>
        </div>
        <ScrollView scrollX scrollWithAnimation>
          <ConfigProvider
            theme={{
              nutuiGridBorderColor: 'rgba(0, 0, 0, 0)',
              nutuiGridItemContentPadding: '8px 4px',
            }}
          >
            <Grid columns={7} style={{ width: '700px' }}>
              {movieList.map((item, index) => {
                return (
                  <Grid.Item
                    text={
                      <>
                        <span className='movie-name'>{item.text}</span>
                        <Button
                          size='mini'
                          type={item.type === '购票' ? 'primary' : 'info'}
                          onClick={() =>
                            Taro.navigateTo({ url: '/pages/movie/movie' })
                          }
                        >
                          {item.type}
                        </Button>
                      </>
                    }
                    className='item-list'
                    key={index}
                  >
                    <Image
                      src={item.img}
                      width='80px'
                      height='110px'
                      radius='10px'
                    />
                  </Grid.Item>
                )
              })}
            </Grid>
          </ConfigProvider>
        </ScrollView>
      </Cell>
      <Cell className='item-select'>
        <div className='top-bar'>
          <span className='title'>
            <i>待映推荐</i>
            <Divider direction='vertical' />
            <i style={{ fontWeight: 'normal' }}>即将上映</i>
          </span>
          <span className='extra-link'>
            全部54部
            <ArrowRight size={12} />
          </span>
        </div>
        <ScrollView scrollX scrollWithAnimation>
          <ConfigProvider
            theme={{
              nutuiGridBorderColor: 'rgba(0, 0, 0, 0)',
              nutuiGridItemContentPadding: '8px 4px',
            }}
          >
            <Grid columns={7} style={{ width: '700px' }}>
              {movieList.map((item, index) => {
                return (
                  <Grid.Item
                    text={
                      <>
                        <span className='movie-name'>{item.text}</span>
                        <Button
                          size='mini'
                          type={item.type === '购票' ? 'primary' : 'info'}
                        >
                          {item.type}
                        </Button>
                      </>
                    }
                    key={index}
                    className='item-list'
                  >
                    <Image
                      src={item.img}
                      width='80px'
                      height='110px'
                      radius='10px'
                    />
                  </Grid.Item>
                )
              })}
            </Grid>
          </ConfigProvider>
        </ScrollView>
      </Cell>
    </>
  )
}

export default RecommendedComponent
