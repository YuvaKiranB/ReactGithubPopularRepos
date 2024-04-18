// Write your code here
import './index.css'

const GetLanguageFilter = props => {
  const {content, clickedLanguage, activeLanguage} = props
  const {id, language} = content

  const clickedButton = () => {
    clickedLanguage(id)
  }

  const activeClass = activeLanguage === id ? 'active' : ''

  return (
    <li className="li1">
      <button
        className={`button ${activeClass}`}
        type="button"
        onClick={clickedButton}
      >
        {language}
      </button>
    </li>
  )
}

export default GetLanguageFilter
