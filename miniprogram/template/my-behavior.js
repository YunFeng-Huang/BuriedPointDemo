module.exports = Behavior({
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: '1231'
  },
  attached: function () { },
  methods: {
    myBehaviorMethod: function () {
      console.log('log from my-behavior.js')
    }
  }
})