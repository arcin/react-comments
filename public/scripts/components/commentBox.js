// Defining CommentBox module with dependencies
define(['./commentList', './commentForm'], function(CommentList, CommentForm){

  // `React.createClass()` creates a React type. These are also referred to as
  // `components`.
  var CommentBox = React.createClass({
    /*
     * Create a method that grabs the comments from our server
     * */
    loadCommentsFromServer:function(){
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
    /*
     * The `CommentBox` is the parent component, so it effectively owns the state
     * of our `CommentForm` component. We need a way for the `CommentForm` component
     * to notify the `CommentBox` when a comment is added.
     *
     * We'll give the child component this callback by binding it to the `CommentForm`s
     * onCommentSubmit event.
     *
     * This method will be called whenever comments get submitted.
     * */
    handleCommentSubmit: function(comment){
      /*
       * Here is some Optimistic Updating. Don't wait on the response
       * to update the DOM. First update the DOM, then send the request.
       * */
      var comments = this.state.data
      var newComments = comments.concat([comment])
      this.setState({data: newComments})
      /*
       * Submit the comment to the server. The comment data is given to us by
       * our child component. It bubbles up.
       * */
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data) {
          this.setState( {data: data} )
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString())
        }.bind(this)
      })

    },

    /* Set up the initial state of this component*/
    getInitialState: function() {
      return { data: [] }
    },
    /* This method gets called automatically by React whenever a component
     * is rendered
     */
    componentDidMount: function(){
      /*
       * Load the comments on initial render, and then poll for new comments
       */
      this.loadCommentsFromServer()
      setInterval(this.loadCommentsFromServer, this.props.pollInterval)
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
          React.createElement( CommentList, { data: this.state.data }),
          /*
           * Give our `CommentForm` child component the `handleCommentSubmit()`
           * callback by binding it to a custom event. This is a common react pattern.
           * */
          React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
        ))}})

  // Export this component
  return CommentBox
})
