// Import your new Comments component at the top of the file
import Comments from "../Comments"

// Then add it to the component list in the return statement:
return (
  <BaseLayout {...props}>
    <article class="popover-hint">
      {/* ...existing content... */}
    </article>
    <Comments /> {/* Add this line to include comments */}
  </BaseLayout>
)