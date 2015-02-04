define(['./comment'], function(Comment){
  var CommentList = React.createClass({
    render: function(){
      return(
        React.createElement( 'div', {className: 'commentList'},
          // `React.createElement()` can take a HTML tag or another Component as
          // its first argument. Here we are using another component.
          //
          // This is how you implement object *composition* in React. `CommentList`
          // is the parent component and `Comment` is the child component.
          // Arguments 2 and 3 on this `createElement` call are passed as properties
          // to the `Comment` component.
          React.createElement(Comment, {author: 'Pete Hunt'},"This is the first comment"),
          React.createElement(Comment, {author: 'Jordan Walke'}, "This is *another* comment")
        )
      )}})

  return CommentList
})
