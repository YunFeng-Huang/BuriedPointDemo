const tracks = {
  path: 'pages/address/address',
  elementTracks: [
    {
      element: '.appointment',
      dataKeys: ['avatarUrl','userInfo','imgUrls[1]'],
      query:(logger)=>{
        console.log(logger,'logger123123')
      }
    },
    {
      element: '.flex-item',
      dataKeys: ['avatarUrl','userInfo','imgUrls[1]'],
      query:(logger)=>{
        console.log(logger,'logger444')
      }
    },
  ],
  methodTracks: [
    {
      method: 'onPullDownRefresh',
      dataKeys: ['film.filmId','userInfo'],
    },
  ],
  methods:{
    onShow(){
      console.log('show1pages/address/address')
    },
    onHide(){
      console.log('onHidepages/address/address')
    }
  }
};

export default tracks;
