var CommentBox = React.createClass({
  render: function(){
    return (
      React.createElement(
        'div',
        { className: "commentBox"},
        "I'm a comment box"
      )
    )
  }
})
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
)
