// assuming your stylesheet is in quartz/components/styles/YourComponent.scss
import styles from "./styles/ImageOptions.scss"
import { QuartzComponentConstructor } from "./types"

export default (() => {
  function ImageOptions() {
    return <span style="display: none;"></span>
  }
 
  ImageOptions.css = styles
  return ImageOptions
}) satisfies QuartzComponentConstructor