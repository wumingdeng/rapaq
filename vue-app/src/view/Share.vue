<template>
	<div v-html="html" @load="onLoad"></div>	
</template>

<script>
	export default {
	  data () {
			return {
				loading: false,
				html: '',
				url: "https://qgoods.rapaq.com"
			}
	  },
		methods: {
			getWeb() {
				this.$store.dispatch("getShare", {
					self: this,
					info:{},
					callback(self,res) {
						self.html = res.body
							var img = document.getElementsByTagName("img")
							console.log(img.length)
						self.$nextTick(function () {
							var img = document.getElementsByTagName("img")

							console.log(img[0].src)
						})
						// img[0].src = "../assets/qmaker-graphic.svg"
					}
				})
			},
			onLoad() {
				console.log('onload')
			}
		},
		mounted() {
			this.getWeb()
		}
	}
</script>

<style>
	
</style>