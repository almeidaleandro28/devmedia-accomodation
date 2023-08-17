import logo from '../../assets/logo-icone.png'

function Logo(props) {
  return (
   <img
    className='h-8 mr-3' 
    src={logo} 
    alt="alfaTech logo" />
  );
}

export default Logo;