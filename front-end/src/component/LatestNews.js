import '../styles/homePageLatest.css'
import { Container,Card , CardText, CardTitle, CardBody } from "reactstrap"
import { CardImg } from 'react-bootstrap'
import {FaCalendarDay} from 'react-icons/fa'

const LatestNews = ({news}) => {

  if(news.length === 0 || !news) return <div>...Loading</div>

  return (
    <div className='whiteBacground homeLatestContainer'>
    <Container className="page d-flex flex-column px-0 min-w-95 justify-content-around">
        <Card className='text-center popoinsFamily trasparentBackground border-0 w-75 mx-auto'>
           <CardTitle className='bigFont pb-2'>
           Latest News
        </CardTitle>
        <CardText>
            We regularly publish news and updates about autosport as well as the results of recent races and other events. Here are the most recent ones.
        </CardText> 
        </Card>

        <Card 
        className='d-flex flex-row text-center popoinsFamily bigFont trasparentBackground border-0 f05 gap-25'>
            { news.map( n =>  (
                <Card key={n.id} className='border-0 d-flex align-items-center justify-content-center w-50'>
                <CardImg src={n.imgSrc} alt={n.title} className='w-100 h-100 imageLatest' />
                <div className='overlay gradient-custom d-flex'>
                    <CardBody className='d-flex flex-column justify-content-end'>
                        <CardText className='text-light h4 text-start w-60 setHover'>{n.title}</CardText>
                        <CardText className='text-light h4 text-start'> 
                        <FaCalendarDay size={15}/>
                        <span 
                        className='secondWhiteColor secondTextFont w-75 px-2'>5 DAYS AGO</span>
                        </CardText>
                    </CardBody>
                </div>
                </Card>
            ))} 
        </Card>
        
    </Container>
    </div>
  )
}

export default LatestNews
