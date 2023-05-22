import './NavCorner.css'
import { Container } from '@material-ui/core'


const NavCorner = ({ isMap }) => {

    return (
        <>
            {
            isMap ?
            <div className="container">
                <div className="Nav-corner-side-div">

                </div>

                <div className="Nav-corner-up-div">

                </div>
            </div>
            :
            <div className="container">
                <div className="Nav-corner-up-div">

                </div>
            </div>
            }
        </>
    )
}

export default NavCorner
