import { Col, Container, Row, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import GrandPrixLogo from '../Image/Mena-t-03.png'
import {FaInstagram, FaFacebook, FaYoutube} from 'react-icons/fa'
const Footer = () => {
  return (
    <Container className="mt-4 py-5 footer w-100 mx-0 mw-100">
        <Row className="w-100 justify-content-around">
        <Col className="d-flex flex-column justfy-content-center align-items-center gap-3 py-5">
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>About</Link></Row>
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>News</Link></Row>
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>Events</Link></Row>
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>Our Team</Link></Row>
        </Col>

        <Col className='d-flex flex-column justfy-content-center align-items-center gap-3 py-5'>
            <Row className='footer-text justify-content-center text-center'> 
            <Link to='#' className='text-decoration-none setHover'>Formula One</Link></Row>
            <Row className='footer-text justify-content-center text-center'> 
            <Link to='#' className='text-decoration-none setHover'>Formula E</Link></Row>
            <Row className='footer-text justify-content-center text-center'> 
            <Link to='#' className='text-decoration-none setHover'>WEC</Link></Row>
            <Row className='footer-text justify-content-center text-center'> 
            <Link to='#' className='text-decoration-none setHover'>Openwheel</Link></Row>
            <Row className='footer-text justify-content-center text-center'> 
            <Link to='#' className='text-decoration-none setHover'>NASCAR</Link></Row>
        </Col>

        <Col className='d-flex flex-column justfy-content-center align-items-center gap-3 py-5'>
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>Sportscar</Link></Row>
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>Rally</Link></Row>
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>Off-Road</Link></Row>
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>Drag Racing</Link></Row>
        </Col>

        <Col className='d-flex flex-column justfy-content-center align-items-center gap-3 py-5'>
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>Send a Message</Link></Row>
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>Contacts</Link> </Row>
            <Row className='footer-text justify-content-center text-center'>
            <Link to='#' className='text-decoration-none setHover'>Request a Callback</Link></Row>
        </Col>
        </Row>


        <Row className='w-100 justify-content-around pt-5'>
            <Col className="d-flex flex-column justfy-content-center align-items-center">
             <Row className='footer-text justify-content-center text-center flex-column h-100'>
                <Image src={GrandPrixLogo} width='175px' height='175px' />
             </Row>
            </Col>
            <Col className="d-flex flex-column justfy-content-center align-items-center">
                <Row className='footer-text justify-content-center text-center flex-column h-100'>
                <Link to='#' className='text-decoration-none setHover'>
                &copy; 2022 Ahmed Hassan. All rights reserved. Privacy Policy.</Link></Row>
            </Col>
            <Col className='d-flex flex-column justfy-content-center align-items-center'>
                 <Row className='footer-text justify-content-center text-center align-items-center h-100'>
                    <Col>
                        <Row className='footer-text justify-content-center text-center'>
                        <Link to='#' className='text-decoration-none setHover'>
                            <FaInstagram size={50} />
                        </Link></Row>
                    </Col>
                    <Col>
                        <Row className='footer-text justify-content-center text-center'>
                        <Link to='#' className='text-decoration-none setHover'>
                            <FaFacebook size={50} />
                        </Link></Row>
                    </Col>
                    <Col>
                        <Row className='footer-text justify-content-center text-center'>
                        <Link to='#' className='text-decoration-none setHover'>
                            <FaYoutube size={50} />
                        </Link></Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer
