<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import * as api from './api/index'
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  mounted () {
    api.userList(this.map, this.page.currentPage, this.page.pageSize)
  },
  components: {
    FooterGuide
  },
  data () {
    return {
      map: {},
      page: {
        beginPageIndex: 1,
        currentPage: 1,
        endPageIndex: 8,
        pageSize: 20,
        totalCount: 0,
        totalPage: 0
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
