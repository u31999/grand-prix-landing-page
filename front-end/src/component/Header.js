import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import Logo from './Logo'
import {FaAngleDown, FaAngleUp, FaSearch, FaTimes} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import useScrollPosition from '../hooks/useScrollPosition'
import {Media} from 'react-breakpoints'


const Header = () => {
const [newsIsOpen, setNewsIsOpen] = useState(false)
const [eventIsOpen, setEventIsOpen] = useState(false)
const [storeIsOpen, setStoreIsOpen] = useState(false)
const [searchIsOpen, setSearchIsOpen] = useState(false)
const [fillNav, setFillNav] = useState(false)

const scrollPosition = useScrollPosition();

useEffect(()=> {
  if(scrollPosition > 0) setFillNav(true)
}, [fillNav, scrollPosition])




  return (
    <div className={!scrollPosition 
      ? 'd-flex align-items-center header'
      : `d-flex align-items-center header fillNav`}>
    <Logo />
        <div className='h-100 inner-nav-container corner'>
        </div>
    <Container className='d-flex align-items-center justify-content-center right-menu'>
      <nav className='menu nav align-items-center'>
            <NavLink to='/' className='text-light'>
                Home
            </NavLink>
             <Dropdown isOpen={newsIsOpen} toggle={() => setNewsIsOpen(!newsIsOpen)}>
             
                <DropdownToggle className='text-light' >
                  News {!newsIsOpen ? <FaAngleDown /> : <FaAngleUp />}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem >Header</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem >Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={eventIsOpen} toggle={() => setEventIsOpen(!eventIsOpen)}>
             
                <DropdownToggle className='text-light' >
                    Events {!eventIsOpen ? <FaAngleDown /> : <FaAngleUp />}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem >Header</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem >Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={storeIsOpen} toggle={() => setStoreIsOpen(!storeIsOpen)}>
             
                <DropdownToggle className='text-light' >
                    Store {!storeIsOpen ? <FaAngleDown /> : <FaAngleUp />}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem >Header</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem >Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
          </Dropdown>    
           
            <NavLink to='/sign-in' className='text-light'>
                Sign In
            </NavLink>
              
              <Dropdown isOpen={searchIsOpen} toggle={() => setSearchIsOpen(!searchIsOpen)} 
              className='dropdown-search'>
                <DropdownToggle className='text-light btn-search' >
                  {!searchIsOpen ? <FaSearch /> : <FaTimes className='indiciater-color'/>}
                </DropdownToggle>
                <DropdownMenu className='has-search'>
                    <Form className='d-flex align-items-center'>
                      <div className='d-flex align-items-center p-1'>
                        <FaSearch className='form-control-feedback'/>
                       <input type="text" className="form-control" placeholder="Search" />
                      </div>
                    </Form>
                </DropdownMenu>
              </Dropdown>

        </nav>
        </Container>
    </div>
  )
}

export default Header