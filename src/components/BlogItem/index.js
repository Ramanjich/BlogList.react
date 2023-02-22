import './index.css'

const BlogItem = props => {
  const {eachList} = props
  const {title, description, publishedDate} = eachList
  return (
    <li className="items">
      <div className="container-1">
        <div>
          <h1 className="title-heading">{title}</h1>
        </div>
        <div>
          <p>{publishedDate}</p>
        </div>
      </div>
      <p>{description}</p>
    </li>
  )
}
export default BlogItem
