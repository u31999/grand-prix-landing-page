import '../styles/homePageLatest.css'
import { Container,Card , CardText, CardTitle, CardBody } from "reactstrap"
import { CardImg } from 'react-bootstrap'
import {Link} from 'react-router-dom'


const UpcomingEvents = ({events}) => {
  return (
    <div className='whiteBacground homeLatestContainer py-1'>
    <Container className="page d-flex flex-column px-0 min-w-95 justify-content-around">
        <Card className='text-center popoinsFamily trasparentBackground border-0 w-75 mx-auto'>
           <CardTitle className='bigFont pb-2'>
           Upcoming Events
        </CardTitle>
        </Card>

        <Card className='d-flex featured-flex-container text-center popoinsFamily
         bigFont trasparentBackground border-0 f05 gap-25 justify-content-around'>
            { events.map( n =>  (
               <Link to='#' className='text-decoration-none'  key={n.id}>
                <Card 
                className='border-0 d-flex flex-column align-items-center 
                justify-content-center upcoming-card my-5 transFather'>
                <CardBody className='w-100 h-100 p-0 transform-down'>
                <CardImg src={n.imgSrc} alt={n.title} className='w-100 h-100 imageLatest' />
                </CardBody>
                <div className='overlay overlay-upcoming px-3 d-flex flex-column justify-content-end transform-up'>
                    <CardText className='h5 fw-bolder my-2 text-start setHover'>{n.title}</CardText>
                    <CardText 
                    className='h6 fw-bold my-2 text-start 
                    indicater-color black-text-shadow-02'>AUGUST 24, 2023</CardText>
                </div>
                </Card>
                </Link>
               
            ))} 
        </Card>
        
    </Container>
    </div>
  
  )
}

export default UpcomingEvents
