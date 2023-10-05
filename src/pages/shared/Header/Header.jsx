import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-8 space-y-1'>
            <img className='mx-auto' src={logo} alt="" />
            <p className=''>Journalism Without Fear or Favour</p>
            
            <h2 className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY")}</h2>
        </div>
    );
};

export default Header;