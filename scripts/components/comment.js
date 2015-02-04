define(['showdown'], function(Showdown){
  // Showdown is a library that helps convert Markdown to HTML
  var converter = new Showdown.converter()

  // Create the comment component
  var Comment = React.createClass({
    render: function(){
      // Prepare raw markup. Showdown is converting `this.props.children` from
      // markdown to html. This causes our string to render with html in it. React
      // will do this to prevent XSS. to inspect it, `console.log` what rawMarkup
      // looks like.
      var rawMarkup = converter.makeHtml(this.props.children.toString())

      return (
        // Notice how the 3rd argument to the `div` react element is another 
        // React element. Specifically a `h2`. This is a child of the first element
        // and will be nested within it. When rendered to HTML it will look like
        // this (with this.props values being replaced by strings)
        //
        //    <div class='comment'>
        //      <h2 class='commentAuther'>this.props.author</h2>
        //      this.props.children
        //    </div>
        React.createElement('div', { className: "comment" },
          // This component is a child component, any properties that are passed to
          // it from its parent component will be stored in its props property.
          //
          // Look at the `CommentList` component for more info.
          React.createElement('h2', { className: "commentAuthor" }, this.props.author),
          React.createElement(
            'span',
            // This is where we are parsing the html in the string. React
            // intentionally makes this difficult to prevent misuse/unintentional
            // XSS backdoors.
            { dangerouslySetInnerHTML: {__html: rawMarkup} }
          )
        )
      )}})

  return Comment
})
