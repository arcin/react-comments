// Defining CommentBox module with dependencies
define(['./commentList', './commentForm'], function(CommentList, CommentForm){

  // `React.createClass()` creates a React type. These are also referred to as
  // `components`.
  var CommentBox = React.createClass({
    /* Set up the initial state of this component*/
    getInitialState: function() {
      return { data: [] }
    },
    /* This method gets called automatically by React whenever a component
     * is rendered
     */
    componentDidMount: function(){
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        success: function(data){
          /* This is the key to dynamic updates. The Component will update itself
           * to reflect changes in the state whenever this method is called */
          this.setState( {data: data} )
        }.bind(this),
        error: function(xhr, status, err){
          console.error(this.props.url, status, err.toString())
        }
      })
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
