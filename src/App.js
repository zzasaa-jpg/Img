import { useState } from 'react';
import './App.css';
import Image from './Image';
import logo from './Poppins.png'
import dark_logo from './Poppins_dark.png';

function App() {
  const imageComponents = Array.from({ length: 100}, (_, index ) =>(
    <Image key={index}/>
  ));

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);

    document.body.classList.toggle('dark-mode');
  }
  return (
    <div className={` w-auto h-auto mb-[0.1px] ${isDarkMode ? 'dark-mode' : 'bg-blue-500'}`}>

      <header className={`${isDarkMode ? 'bg-[#434246]' : 'bg-[#434246d7]'} shadow-2xl p-1 text-white`}>
        <nav className='flex justify-between '>
          <img src={`${isDarkMode ? dark_logo : logo}`} alt='logo' width={45} className=' rounded-[5px] ' />
          <button onClick={toggleDarkMode} className='text-[25px] flex items-center'>{
            isDarkMode ?
              <ion-icon name="sunny-outline"></ion-icon> :
              <ion-icon name="moon-outline"></ion-icon>
          }
          </button>
        </nav>
      </header>

      <div className="mx-0 px-2 mt-10 sm:mx-[100px] sm:px-0 md:mx-[150px] md:px-0 lg:mx-[350px] lg:px-0">
        <div className=' w-full min-h-auto'>
          {imageComponents}
          {/* <Image /> */}
        </div>
      </div>
    </div>


  );
}

export default App;
