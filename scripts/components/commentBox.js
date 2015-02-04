// Defining CommentBox module with dependencies
define(['./commentList', './commentForm'], function(CommentList, CommentForm){

  // `React.createClass()` creates a React type. These are also referred to as
  // `components`.
  var CommentBox = React.createClass({
    /* Set up the initial state of this component*/
    getInitialState: function() {
      return { data: [] }
    },
    // Components have a render method. This method returns the Virtual DOM
    // tree associated with a Component.
    render: function(){
      return (
        // This is where you interact with the React DOM. A React element is a
        // virtual DOM element. You can use JSX or plain javascript. I opted
        // for plain javascript.
        //
        // more info at: http://facebook.github.io/react/docs/glossary.html
        React.createElement( 'div', { className: "commentBox"},
          React.createElement('h1', null, "Comments"),

          /*
           * Pass the data model to `CommentList` based on `CommentBox`
           * state
           */
          React.createElement(CommentList, { data: this.state.data }),
          React.createElement(CommentForm, null)
        ))}})

  // Export this component
  return CommentBox
})
