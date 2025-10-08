// assuming your stylesheet is in quartz/components/styles/YourComponent.scss
import styles from "./styles/ImageOptions.scss"
import { QuartzComponentConstructor } from "./types"

export default (() => {
  function ImageOptions() {
    return <p>Example Component</p>
  }
 
  ImageOptions.css = styles
  return ImageOptions
}) satisfies QuartzComponentConstructor