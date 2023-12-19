import CartIcon from './icon/CartIcon.js';
import Hamburger from './icon/Hamburger.js';
import UserIcon from './icon/UserIcon.js'
import { Outlet, Link } from "react-router-dom";


export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid justify-content-end">
                {/* <li className="nav-item dropdown ">
                    <button className='border border-0 bg-transparent' data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-expanded="false" aria-controls="nav-menu">
                        <Hamburger />
                    </button>
                    <ul className="dropdown-menu p-2 text-center" id='nav-menu'>
                        <li><Link to="/HP" className="dropdown-item">Home</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">All Items</a></li>
                    </ul>
                </li> */}
                <div className='d-flex flex-row justify-content-between' style={{width: '5rem'}}>
                    
                    <div className='btn-group'>
                        
                        <button type="button" className="border-0 bg-transparent" data-bs-toggle="dropdown" data-bs-target="#user-menu" aria-expanded="false">
                            <UserIcon />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-lg-end p-2 pt-3" style={{ width: "200px"}} id='user-menu'>
                            <li className='center d-flex flex-column justify-content-center p-1'>
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bef71cd0-10ed-4fb4-8378-70907a38b823/df97a7-f2f0347f-8c5d-460e-8115-978913790976.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JlZjcxY2QwLTEwZWQtNGZiNC04Mzc4LTcwOTA3YTM4YjgyM1wvZGY5N2E3LWYyZjAzNDdmLThjNWQtNDYwZS04MTE1LTk3ODkxMzc5MDk3Ni5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.bWc7CGbVD0ZTYqiaub8Pt_OkukxMvxr5TapPFyPvuxM" alt=""
                            className="round-circle w-25 h-auto mx-auto" style={{borderRadius:'50%'}}/>
                                <p className='mx-auto mb-0 pt-2 fw-medium'>Jamajatingja</p>
                                <button type="button" class="btn btn-link p-0 fw-normal">edit profile</button>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Showcase</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Order</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Address</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item " href="#" ><button className='btn btn-primary w-100 fw-medium'>Log out</button></a></li>
                        </ul>
                    </div>
                    <CartIcon />
                </div>
            </div>
        </nav>
    )   
};