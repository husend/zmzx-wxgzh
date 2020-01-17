<template>
  <div style="width: 100%;text-align: center;padding-bottom: 10px;padding-top: 10px">
    <input type="text" style="border: 1px solid lightgrey;outline: none;height: 26px;width: 80%;border-radius: 15px;text-align: center;" @focus="isFocus = true" @blur="isFocus = false"/>
    <span style="cursor: pointer" @click="$router.back()">取消</span>
    <i class='mintui mintui-search icon-search' v-if="!isFocus">搜索</i>
  </div>
</template>

<script>
export default {
  name: 'HeadSearch',
  data () {
    return {
      value: '',
      isFocus: false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .icon-search
    position fixed
    right 150px
    margin-top 6px
</style>
