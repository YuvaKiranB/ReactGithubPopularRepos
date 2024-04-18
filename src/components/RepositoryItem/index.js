// Write your code here
import './index.css'

const GetCardItem = props => {
  const {content} = props
  const updatedContent = {
    name: content.name,
    issuesCount: content.issues_count,
    forksCount: content.forks_count,
    starsCount: content.stars_count,
    avatarUrl: content.avatar_url,
  }
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = updatedContent

  return (
    <li className="li2">
      <img className="image1" src={avatarUrl} alt={name} />
      <h1 className="h2">{name}</h1>
      <div className="dataContainer">
        <img
          className="image2"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="p1">{`${starsCount} stars`}</p>
      </div>
      <div className="dataContainer">
        <img
          className="image2"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="p1">{`${forksCount} forks`}</p>
      </div>
      <div className="dataContainer">
        <img
          className="image2"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="p1">{`${issuesCount} open issues`}</p>
      </div>
    </li>
  )
}

export default GetCardItem
