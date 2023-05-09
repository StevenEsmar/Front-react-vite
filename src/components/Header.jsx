import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from "../components/Button"
import "../styles/header.scss"

const Header = ({title, buttonText}) => {
  return (
    <>
    <div className='header'>
        <div className='header_title'>
            {title}
        </div>
    </div>
    <div className='button_close'>
        <Link to="/">
            <Button label={buttonText}/>
        </Link>
    </div>
    </>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
};
  
Header.defaultProps = {
    title: "",
    buttonText:""
};

export default Header