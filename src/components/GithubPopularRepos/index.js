import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import GetLanguageFilter from '../LanguageFilterItem'
import GetCardItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

// Write your code here

class GitHubPopularRepos extends Component {
  state = {
    activeLanguage: languageFiltersData[0].id,
    cardsList: [],
    apiStatus: apiStatusConst.initial,
  }

  componentDidMount() {
    this.getCardsData()
  }

  getCardsData = async () => {
    const {activeLanguage} = this.state

    this.setState({apiStatus: apiStatusConst.loading})

    const url = `https://apis.ccbp.in/popular-repos?language=${activeLanguage}`

    const response = await fetch(url)

    const data = await response.json()

    if (response.ok) {
      this.setState({
        apiStatus: apiStatusConst.success,
        cardsList: data.popular_repos,
      })
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  updateLanguage = id => {
    this.setState({activeLanguage: id}, this.getCardsData)
  }

  renderCardsList = () => {
    const {cardsList} = this.state

    return (
      <ul className="ul2">
        {cardsList.map(eachItem => (
          <GetCardItem content={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderFailure = () => (
    <div className="failureContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="image3"
        alt="failure view"
      />
      <h1 className="failure">Something went wrong</h1>
    </div>
  )

  render() {
    const {apiStatus, activeLanguage} = this.state
    return (
      <div className="main">
        <div className="content">
          <h1 className="h1">Popular</h1>

          <ul className="ul1">
            {languageFiltersData.map(eachItem => (
              <GetLanguageFilter
                content={eachItem}
                key={eachItem.id}
                clickedLanguage={this.updateLanguage}
                activeLanguage={activeLanguage}
              />
            ))}
          </ul>

          <div className="cardsContainer">
            {apiStatus === apiStatusConst.loading && this.renderLoader()}
            {apiStatus === apiStatusConst.failure && this.renderFailure()}
            {apiStatus === apiStatusConst.success && this.renderCardsList()}
          </div>
        </div>
      </div>
    )
  }
}

export default GitHubPopularRepos
