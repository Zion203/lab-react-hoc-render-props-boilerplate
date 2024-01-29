
// import ImageLike from './component/ImageLike'
import PostLike from './component/PostLike'
import './App.css'
import HOC from './component/HigherOreder/HOC'
import ImageLike from './component/ImageLike'
import RenderPropsomponent from './component/RenderProps/RenderPropsomponent'
import LikePostRender from './component/RenderProps/LikePostRender'
import LikeimageRender from './component/RenderProps/LikeimageRender'
import LikeImageHOC from './component/HigherOreder/LikeImageHOC'
import LikePostHOC from './component/HigherOreder/LikePostHOC'

function App() {
let ImageLikeH = HOC(LikeImageHOC)
let LikePost = HOC(LikePostHOC)
  return (
    <>
      

      <h1>With RenderPropsomponent</h1>
      <div id='render'>
      <RenderPropsomponent render = {(count,incre) =>(
        <LikePostRender count={count} incre={incre} />
      )} />

      <RenderPropsomponent render = {(count,incre) =>(
        <LikeimageRender count={count} incre={incre} />
      )} />
      </div>

      <h1>Normally</h1>
      <div id='button'>
      <ImageLike></ImageLike>
      <PostLike/>
      </div>
      

      <h1>With Hoc</h1>
      <div id='Hoc'>
        <ImageLikeH></ImageLikeH>
        <LikePost/>
      </div>
    </>
  )
}

export default App
