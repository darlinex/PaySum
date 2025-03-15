import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import { useState } from 'react'
import { AnimatePresence , motion} from 'framer-motion'
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLetterX } from "react-icons/tb";
import '../Layout/Nav.css'



function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('clicked')
        setMenuOpen(!menuOpen)
    }

    return (
        <div>
            {/* hero section nav ,links*/}

            <div className="navdiv">
                <nav className='nav-hero-section'>
                    <div className="logo">
                        <img src={logo} alt="" />

                    </div>

                    <div className="links">
                        <ul>
                            <li className="nav-links">About us</li>
                            <li className="nav-links">Services</li>
                            <li className="nav-links">Pricing</li>
                            <li className="nav-links">Contact Us</li>
                            <li className="nav-links">FAQs</li>
                        </ul>
                    </div>

                    <div className="button">
                      <Link to={"/login"}> 
                       
                       <button className="button1">Sign in</button>
                       </Link> 
                       <Link to={"/demo"}>
                        <button className="button2">Request demo</button>
                        </Link>
                    </div>
                </nav>

                {/* main hero section */}
            </div>

        <div className="navdiv">
            <nav className='nav-hero-section'>
                <div className="logo">
                    <img src={logo} alt="" />

                </div>

                <div className="links">
                    <ul>
                        <li className="nav-links">About us</li>
                        <li className="nav-links">Services</li>
                        <li className="nav-links">Contact Us</li>
                        
                    </ul>
                </div>

                <div className="button">
                    <Link to={"/login"}>

                        <button className="sign-in-btn">Sign in</button>
                    </Link>
                    <Link to={'/register'}>
                    
                    <button className="button2">Register Now</button>
                    </Link>
                </div>

                <RxHamburgerMenu  onClick={toggleMenu} className='md:hidden'/>
                   
                

            </nav>
            <AnimatePresence>
            {
                menuOpen && (
                    <motion.div 
                    initial = {{ y: '-100vh' }}
                    animate = {{y : 0}}
                    transition={{ delay: 0.2, duration:0.5, stiffness: 120, type: 'spring'}}
                    exit={{opacity: 0, delay: 0.2, duration:0.5}}
                    className='fixed inset-0 h-[50%] w-ful m-20 bg-black text-white bg-opacity-50 z-[4100000]'>
                        <TbLetterX  className='absolute right-4 top-4' color='white' onClick={toggleMenu}/>

                        <div>
                            <ul>
                                <li>About us</li>
                                <li>Services</li>
                                <li>Contact us </li>
                            </ul>
                        </div>
                    </motion.div>

                    
                )
            }
            </AnimatePresence>
        </div>
        </div>
    )
}

export default NavBar 