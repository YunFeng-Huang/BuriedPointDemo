const tracks = {
  path: 'pages/list/list',
  elementTracks: [
    {
      element: '.playing-item',
      dataKeys: ['imgUrls', 'playingFilms[$INDEX].filmId', 'playingFilms[0]', 'test.name', '$APP.baseUrl', '$DATASET.test', '$INDEX'],
    },
    {
      element: '.more',
      dataKeys: ['imgUrls', 'playingFilms', '$DATASET.test'],
    },
    {
      element: '.page >>> .sub-component',
      dataKeys: ['name', '$DATASET.test']
    }
  ],
  methodTracks: [
    {
      method: 'cateClick',
      dataKeys: ['list_id'],
      query:(logger)=>{
        console.log(logger,'cateClickmethodes')
      }
    },
    {
      method: 'toBannerDetail',
      dataKeys: ['imgUrls', '$DATASET.test'],
    },
    
  ],
  methods:{
    onLoad(){
      console.log('onload',12312312312)
    },
    onShow(){
      console.log('show')
    },
  }
};

export default tracks;
