<template>
  <div class="home">
    <!-- 搜索栏 -->
    <div style="border: 1px solid gainsboro;text-align: center;width: 90%;border-radius: 15px;height: 24px;padding-top: 10px" @click="goTo('/search')">
      <span><i class="mintui mintui-search"></i>搜索</span>
    </div>
    <!-- 轮播图 -->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/62ec9f5974b03769859e1f5a7e179366.jpg">
              </div>
<!--              <span>{{category.title}}</span>-->
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/71db3ee98e44cecf6e49820ecf560e5f.jpg">
              </div>
              <!--              <span>{{category.title}}</span>-->
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/c409a483cb99a1f8f96f7776968bf416.jpg">
              </div>
              <!--              <span>{{category.title}}</span>-->
            </a>
          </div>
<!--          <img v-else src="./images/msite_back.svg" alt="back">-->
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 侧边导航栏 -->
    <div class="msite_sidebar">
      <ul class="msite_sidebar_ul">
        <li class="sidebar_li" :class="{on: 1 === $route.query.id}"><router-link :to="{name: 'List', query: {id: 1}}">导航一</router-link></li>
        <li class="sidebar_li" :class="{on: 2 === $route.query.id}"><router-link :to="{name: 'List', query: {id: 2}}">导航二</router-link></li>
        <li class="sidebar_li" :class="{on: 3 === $route.query.id}"><router-link :to="{name: 'List', query: {id: 3}}">导航三</router-link></li>
      </ul>
      <router-view style="float: left"></router-view>
<!--      <el-menu-->
<!--        default-active="2"-->
<!--        class="el-menu-vertical-demo">-->
<!--        <el-menu-item index="2">-->
<!--&lt;!&ndash;          <i class=""></i>&ndash;&gt;-->
<!--          <span slot="title">导航二</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="3">-->
<!--&lt;!&ndash;          <i class=""></i>&ndash;&gt;-->
<!--          <span slot="title">导航三</span>-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index="4">-->
<!--&lt;!&ndash;          <i class=""></i>&ndash;&gt;-->
<!--          <span slot="title">导航四</span>-->
<!--        </el-menu-item>-->
<!--      </el-menu>-->
    </div>
  </div>
</template>

<script>
import * as api from '../../api/index'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'Home',
  components: {
    Swiper
  },
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      loop: true, // 循环轮播
      // 轮播图的方向，也可以是vertical方向
      // direction: 'horizontal',
      // 自动轮播
      autoplay: {
        disableOnInteraction: false
      },
      // 播放的速度
      // speed: 1000,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  methods: {
    onSearch () {
      api.userList(this.map, this.page.currentPage, this.page.pageSize)
    },
    onChange () {
      api.userList(this.map, this.page.currentPage, this.page.pageSize)
    },
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl";
  .home
    width 100%
    text-align center

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 5px
      height 100px
      background #fff

      .swiper-container
        width 100%
        height 100%

        .swiper-wrapper
          width 100%
          height 100%

          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap

            .link_to_food
              width 100%

              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0

                img
                  display inline-block
                  width 100%
                  height 100%

              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666

        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774

    .msite_sidebar
      border-top 1px solid lightgray
      width 100%
      height 65vh
      margin-top 5px
      .msite_sidebar_ul
        border-right 1px solid lightgray
        width 25%
        height 65vh
        float left
        .sidebar_li
          padding 10px 0px
          &.on
            background lightskyblue
</style>
