import styles from "../../styles/Navbar.module.css";
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import logo from '../../public/logo.png'  
import Image from 'next/image'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

function Navbar() {
  return (
    <div  className={roboto.className}>

    <nav className={styles["navbar-container"]}>
      <div>

       <Image src={logo} alt="" style={{height:'3rem', width:'3rem', marginRight:'1rem'}} /> 
      </div>
      <ul className={styles["navbar-links"]} style={{paddingRight:'2rem'}}> 
        <li>
          <Link href='/'> 
          Home
          </Link>
        </li>
        <li>
           <Link href='../components/about'>
              About
           </Link>
          </li>
        <li>
          <Link  href="../components/contact">
          Contact
          </Link>
          </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
