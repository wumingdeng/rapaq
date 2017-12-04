<template>
 <div>
  <!-- <mu-circular-progress :size="40" v-if="loading"/> -->
  <div v-html="html"></div>
 </div>
</template>
<style>

</style>
<script>
 export default{
  // 使用时请使用 :url.sync=""传值
  // props: {
  //  url: {
  //   required: true
  //  }
  // },
  data () {
   return {
    loading: false,
    html: '',
    url: "https://qgoods.rapaq.com"
   }
  },
  watch: {
   url (value) {
    this.load(value)
   }
  },
  mounted () {
   this.load(this.url)
  },
  methods: {
   load (url) {
    if (url && url.length > 0) {
     // 加载中
     this.loading = true
     let param = {
      accept: 'text/html, text/plain'
     }
     this.$http.get('/goods', param).then((response) => {
      this.loading = false
      // 处理HTML显示
      this.html = response.data
     }).catch(() => {
     	console.log('hkd')
      this.loading = false
      this.html = '加载失败'
     })
    }
   }
  }
 }
</script>
