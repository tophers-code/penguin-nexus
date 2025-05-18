// quartz/components/Comments.tsx
import { QuartzComponentConstructor } from "./types"

function Comments() {
  return (
    <section class="comments">
      <div class="giscus"></div>
      <script
        src="https://giscus.app/client.js"
        data-repo="tophers-code/penguin-nexus"
        data-repo-id="[YOUR-REPO-ID]"
        data-category="Announcements"
        data-category-id="[YOUR-CATEGORY-ID]"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async
      ></script>
    </section>
  )
}

export default (() => {
  return {
    Component: Comments,
  }
}) satisfies QuartzComponentConstructor