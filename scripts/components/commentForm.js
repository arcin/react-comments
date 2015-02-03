define(function(){
  var CommentForm = React.createClass({
    render: function(){
      return (
        // Create a single VDOM node.
        // arguments of `React.createElement()`
        //  1. The node type. Can be an HTML node or a Component.
        //  2. The attributes associated with the node.
        //  3. The children of this node
        React.createElement(
          'div',
          { className: "commentForm" },
          "I'm a comment form"
        ))}})

  // export this component
  return CommentForm
})
