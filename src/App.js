import './App.css';
import ParticlesBg from 'particles-bg'
import { BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';


function App() {
  return (
    <div >
      <div className='card'>
        <div className='card_body'>
          <div className='profile text-center'>
            <img src='brokoli.jpeg' className='' />
            <div className='bg_action'>
            <h1>Nie Farrell</h1>
            <p>Seputar Programming</p>
            </div>
          </div>
          <div className='mt-16'>
            <a href='' className='btn_action '>
            <BsInstagram/>
              <span>Instagram</span>
            </a>
            <a href='' className='btn_action '>
            <FaTiktok/>
              <span>TikTok</span>
            </a>
            
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
