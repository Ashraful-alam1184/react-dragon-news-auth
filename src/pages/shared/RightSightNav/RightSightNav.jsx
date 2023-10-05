import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSightNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full text-blue-500 mt-4">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full mt-2">
          <FaGithub></FaGithub>
          Login with Github
        </button>
        <div className='mt-6'>
        <h2 className="text-2xl font-medium">Find Us On</h2>
            <a className='flex items-center text-lg p-4 border rounded-t-lg gap-3' href="">
                <FaFacebook></FaFacebook>
                Facebook
            </a>
            <a className='flex items-center text-lg p-4 border gap-3' href="">
                <FaTwitter></FaTwitter>
                Twitter
            </a>
            <a className='flex items-center text-lg p-4 border rounded-b-lg gap-3' href="">
                <FaInstagram></FaInstagram>
                Instagram
            </a>
        </div>
        <div className='bg-gray-300 p-3 mt-6 space-y-6'>
            <h2 className='text-2xl font-semibold'>Q-Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>
        <div className='p-4 text-center mt-6 space-y-4'>
            <h2 className='text-2xl font-bold'>Create an Amazing Newspaper</h2>
            <p className='text-sm'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className='btn btn-secondary'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightSightNav;
