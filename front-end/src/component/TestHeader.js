import {useDispatch, useSelector} from 'react-redux'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import { logout } from '../actions/usersAction'
import  SearchBox from './SearchBox'
 
const TestHeader = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" 
        inverse collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>VR-Store</Navbar.Brand>
          </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox />
            <Nav className="ms-auto">
             <LinkContainer to='/cart'>
                <Nav.Link>
                <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
             </LinkContainer>

             {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
             ) : <LinkContainer to='/login'>
                <Nav.Link>
                <i className="fas fa-user"></i> Sign In
                </Nav.Link>
             </LinkContainer>
             }
             {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu '>
                <LinkContainer to='/admin/userslist'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/productslist'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderslist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                
              </NavDropdown>
             )}

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default TestHeader