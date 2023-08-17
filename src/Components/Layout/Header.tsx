import { useState } from 'react';
import Logo from '../Datadisplay/Logo';
import Menu from '../Navigation/Menu';

function Header(props) {

  const [ showMenu, setShowMenu ] = useState( false )

  return (
    <header>

      <div className='flex justify-between items-center'>

        <div>
          <Logo />
        </div>

        <div className='hidden md:block'>
          <Menu />
        </div>

        <button 
          className='md:hidden'
          onClick={() => setShowMenu( !showMenu)}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div className='md:hidden'>
        { showMenu && <Menu />}
        </div>

      </div>

    </header>
    
  );
}

export default Header;