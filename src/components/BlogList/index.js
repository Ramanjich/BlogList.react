import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <ul className="items-container">
      {blogsList.map(eachList => (
        <BlogItem eachList={eachList} key={eachList.id} />
      ))}
    </ul>
  )
}
export default BlogList
