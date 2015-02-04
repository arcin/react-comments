// Add some path configuration in requirejs
requirejs.config({
  baseUrl: 'scripts/',
  paths: {
    // Make use of a cdn the 'requirejs way'
    showdown: 'http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min'
  }
})

require([
  // Bring in the commentBox module
  "components/commentBox"
], function(commentBox){
  // `React.render()` will turn React elements (visual DOM) into their respective
  // HTML elements (actual DOM)
  //
  // `React.render()` takes two arguments
  //    1. A React element to be rendered.
  //    2. The existing, raw html, to use as an anchor point. The React element
  //       will be appended to this anchor point.
  //    ** Note: Here, commentBox is React Component. This is why we are calling
  //             `React.createElement()`. To conform to the expected input. If
  //             commentBox were a React element, we would not need to make this
  //             function call
  React.render(
    React.createElement(commentBox, null),
    document.getElementById('content')
  )
})
