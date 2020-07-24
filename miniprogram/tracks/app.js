const tracks = {
  methods:{
    onLaunch(){
      console.log('onLaunch','app')
    },
    onShow(){
      console.log('onShow','app')
      let pages = getCurrentPages()
      console.log(pages,'onShowpages')
    },
  
  }
};
export default tracks;
