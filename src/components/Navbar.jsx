import { appleImg } from "../utils.js"


const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div>
            {['phones', 'tablets', 'accessories'].map((nav,i) =>( <div key={i}>
                {nav}
            </div> 
        ))}
        </div>

        
      </nav>
    </header>
    )
}



export default Navbar
