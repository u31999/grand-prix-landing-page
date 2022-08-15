import '../styles/homePageLatest.css'
import { Container,Card , CardText, CardTitle, CardBody } from "reactstrap"
import { CardImg } from 'react-bootstrap'
import {FaCalendarDay} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import commiericalVideo from '../video/commierical-video.mp4'
import ReadMoreBtn from './ReadMoreBtn'

const FeaturedNews = ({news}) => {
        
    if(news.length === 0 || !news) return <div>...Loading</div>

  return (
    <div className='grayBackground homeLatestContainer'>
    <Container className="page d-flex flex-column px-0 min-w-95 justify-content-around">
        <Card className='text-center popoinsFamily trasparentBackground border-0 w-75 mx-auto'>
           <CardTitle className='bigFont pb-2'>
           Featured News
        </CardTitle>
        </Card>
        <Card className='d-flex featured-flex-container text-center popoinsFamily
         bigFont trasparentBackground border-0 f05 gap-25 justify-content-center'>
            { news.map( n =>  (
               <Link to='#' className='text-decoration-none'  key={n.id}>
                <Card 
                className='border-0 d-flex flex-column align-items-center justify-content-center featured-card my-4'>
                <CardBody className='w-100 h-50 p-0'>
                <CardImg src={n.imgSrc} alt={n.title} className='w-100 h-100 imageLatest' />
                <div className='overlay-new-card text-light'>NEWS</div>
                </CardBody>
                <CardBody 
                className='zIndex5 whiteBacground d-flex flex-column justify-content-end'>
                    <CardText className='text-dark h4 text-start setHover'>{n.title}</CardText>
                        <CardText className='text-dark h4 text-start'> 
                        <FaCalendarDay size={15}/>
                        <span 
                        className='secondBlackColor secondTextFont w-75 px-2'>7 DAYS AGO</span>
                        </CardText>
                </CardBody>
                </Card>
                </Link>
               
            ))} 
        </Card>
     
        <Card className='d-flex justify-content-center align-items-center
         border-0 trasparentBackground mt-5'>            
            <Link to='#' 
            className='text-decoration-none py-2 borderLink text-muted 
            secondTextFont setHover hoverBorder'>VIEW ALL NEWS</Link>
        </Card>    

        <Card 
        className='d-flex v-card justify-content-center align-items-center 
        pt-5 pb-0 trasparentBackground border-0'>
                <div className='overlay d-flex justify-content-center align-items-center'>
                    <Card className='trasparentBackground border-0 d-flex 
                    justify-content-center align-items-center'>
                        <CardBody 
                        className='text-lg text-dark d-flex flex-column gap-3 m-3 w-75 h-75 
                        align-items-center justify-content-center'>
                            <CardTitle 
                            className='h4 text-light text-center black-text-shadow fw-normal'>#1 Racing News Website</CardTitle>
                            <CardText 
                            className='h3 text-light text-center black-text-shadow fw-bold'>Discover the Latest News from the World of Racing</CardText>
                            <CardText 
                            className='h4 text-light text-center black-text-shadow fw-normal'>
                            <span className='indicater-color fw-bold'>MENA</span> is your best source for all racing news.</CardText>
                            <ReadMoreBtn text='subscribe' addClass='rounded' />
                        </CardBody>
                    </Card>
                </div>       
                <ReactPlayer className='flex-1 w-100 h-50 trasparentBackground' 
                url={commiericalVideo}  
                loop={true} 
                playing={true} muted={true} 
                height='100%' autoPlay />
        </Card> 
    </Container>
    </div>
  )
}

export default FeaturedNews
