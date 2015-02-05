define(function(){
  var CommentForm = React.createClass({
    handleSubmit: function(e) {
      e.preventDefault()
      var author = this.refs.author.getDOMNode().value.trim()
      var text = this.refs.text.getDOMNode().value.trim()

      if (!text || !author) {
        return
      }

      /* TODO: send request to the server */

      this.props.onCommentSubmit( { author: author, text: text } )
      /*
       * `this.refs.author` references a React Component.
       * You can call `getDOMNode()` on a React Component
       * to get its native browser DOM element.
       * */
      this.refs.author.getDOMNode().value = ''
      this.refs.text.getDOMNode().value = ''
      return
    },
    render: function(){
      return (
        // Create a single VDOM node.
        // arguments of `React.createElement()`
        //  1. The node type. Can be an HTML node or a Component.
        //  2. The attributes associated with the node.
        //  3. The children of this node

        /*
         * Create a form for comment submission in the VDOM
         *
         * React attaches event handlers to components using a CamelCase naming
         * convention. ex: onSubmit.
         * */
        React.createElement( 'form', { className: "commentForm", onSubmit: this.handleSubmit }, [
          React.createElement( 'input', {
            type: 'text',
            placeholder: 'Your name',
            /*
             * React elements have 4 properties. Type, props, keys, and ref.
             * Here we are setting a `ref` on a child element to access it
             * later
             */
            ref: 'author'
          }),
          React.createElement( 'input', {
            type: 'text',
            placeholder: 'Say something...',
            /*
             * React elements have 4 properties. Type, props, keys, and ref.
             * Here we are setting a `ref` on a child element to access it
             * later
             */
            ref: 'text'
          }),
          React.createElement( 'input', { type: 'submit', value: 'Post' })
        ]
      ))}})

  // export this component
  return CommentForm
})
