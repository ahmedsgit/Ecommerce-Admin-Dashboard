/* eslint-disable react-hooks/exhaustive-deps */
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Fill } from 'react-icons/ri';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar1.jpg';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    isClicked,
    activeMenu,
    setActiveMenu,
    handleClick,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  console.log(screenSize);
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        customFunc={handleActiveMenu}
        color='blue'
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          title='Cart'
          customFunc={() => handleClick('cart')}
          color='blue'
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Chat'
          customFunc={() => handleClick('chat')}
          color='blue'
          dotColor='#03C9D7'
          icon={<BsChatLeft />}
        />
        <NavButton
          title='Notifications'
          customFunc={() => handleClick('notification')}
          color='blue'
          dotColor='#03C9D7'
          icon={<RiNotification3Fill />}
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >
            <img
              className='rounded-full w-8 h-8'
              src={avatar}
              alt='user-profile'
            />
            <p className='flex items-center justify-center text-gray-400 text-14 gap-1'>
              <span>Hi,</span>
              <span className='font-semibold'>Ahmed</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
