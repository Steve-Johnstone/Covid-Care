import { CgProfile } from 'react-icons/cg'

const Header = () => {
    return (
        <header className='header'>
           <h4>Menu</h4>
           <h1>CovidCare</h1> 
           <h1 style={{ color: '#A78080'}}><CgProfile /></h1>
        </header>
    )
}

export default Header