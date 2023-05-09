import {CONSTANTS} from "../Constants"
import "../styles/home.scss"
import Button from "../components/Button"
import {Link} from 'react-router-dom'

const Home = () => {

  return (
    <>
      <div className="container_home">
        <div className="avatar">
          <img src={CONSTANTS.IMG_CHARLES} alt="Charles avatar" />
        </div>
        <div className="home_title">
          <h1>
            <span>{CONSTANTS.HOME_INTRO_TEXT}</span>
          </h1>
        </div>
        <div className="div_buttons">
          <Link to="/insert-dna">
            <Button label={CONSTANTS.BUTTON_INSERT_DNA}/>
          </Link>
          <Link to="/stats">
            <Button label={CONSTANTS.BUTTON_STATS}/>
          </Link>  
        </div>
      </div>
    </>
  )
}

export default Home