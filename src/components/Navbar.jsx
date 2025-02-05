import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className="flex item-center justify-between py-0">
      <div>

      </div>
      <div className="flex flex-shrink-0 items-centre">
      <div className="m-8 flex item-center justify-center gap-4 text-4xl z-10">
      <a 
        href="https://www.linkedin.com/in/kunal-sharma-9224a2300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin  />
      </a>
      <a 
        href="https://github.com/KS171003" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaGithub  />
      </a>
        
        <a 
        href="https://www.instagram.com/kunal_10.03?igsh=NnRqcGxoeXZwMHJ1&utm_source=qr" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaInstagram/>
      </a>  
      </div>
      </div>

    </nav>
  )
}

export default Navbar

