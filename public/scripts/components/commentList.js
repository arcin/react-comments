define(['./comment'], function(Comment){
  var CommentList = React.createClass({
    render: function(){
      /*
       * Create comment VDOM nodes based on the data model passed in
       * by a parent component.
       */
      var commentNodes = this.props.data.map(function(comment){
        return (
          React.createElement(Comment, {author: comment.author}, comment.text)
        )
      })

      return(
        React.createElement( 'div', {className: 'commentList'},
          /* Pass Comment VDOM nodes as children to this div VDOM node */
          commentNodes
        )
      )}})

  return CommentList
})
