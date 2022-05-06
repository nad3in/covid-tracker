import { Offcanvas } from "react-bootstrap";
import { BsMap, BsPerson } from 'react-icons/bs'
import '../styles/home.css'

const Home = ({ children }) => {

    return (<>
        <Offcanvas show={true} scroll={true}
            backdrop={false} className='side-panel'>
            <Offcanvas.Body className='side-panel-body'>
                <a href='/userprofile'><BsPerson className='home-icon' /></a>
                <a href='/map'><BsMap className='home-icon' /></a>
            </Offcanvas.Body>
        </Offcanvas>
        {children}
    </>);
}
export default Home;