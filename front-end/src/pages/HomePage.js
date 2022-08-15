import  {allNews}  from "../data/dump-data"
import { useState, useEffect  } from "react"
import HeaderCarousel from "../component/HeaderCarousel"
import LatestNews from "../component/LatestNews"
import FeaturedNews from "../component/FeaturedNews"
import UpcomingEvents from "../component/UpcomingEvents"
import Footer from "../component/Footer"

const HomePage = () => {
  const [newNews, setNewNews] = useState([])
  const [latestNews, setLatestNews] = useState([])
  const [featuredtNews, setFeaturedtNews] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  

  useEffect(() => {
    if(newNews.length === 0) setNewNews(allNews.filter(n => n.category === 'new' ))
    if(latestNews.length === 0) setLatestNews(allNews.filter(n => n.category === 'latest'))
    if(featuredtNews.length === 0) setFeaturedtNews(allNews.filter(n => n.category === 'featured'))
    if(upcomingEvents.length === 0) setUpcomingEvents(allNews.filter(n => n.category === 'upcoming'))
  }, [newNews, latestNews, featuredtNews, upcomingEvents])
  
  return (
    <div className="page latestSection" id="page">
      <HeaderCarousel news={newNews.slice(0, 3)} />
      <LatestNews news={latestNews.slice(0, 3)}/>
      <FeaturedNews  news={featuredtNews.slice(0, 6)}/>
      <UpcomingEvents  events={upcomingEvents.slice(0, 4)}/>
      <Footer />

    </div>
  )
}

export default HomePage
