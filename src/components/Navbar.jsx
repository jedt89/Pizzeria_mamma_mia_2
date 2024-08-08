/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import brand from '../assets/img/brand.png';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { PiShoppingCart, PiUserBold } from 'react-icons/pi';
import { AiOutlineLogin } from 'react-icons/ai';
import {
  RiLogoutCircleLine,
  RiUserAddLine,
  RiMenuUnfold4Line
} from 'react-icons/ri';
import { TbHome } from 'react-icons/tb';
import { RegisterDialog } from './RegisterDialog';

const Navbar = ({ token, total }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [registry, setRegistry] = useState(false);
  const menu = useRef(null);
  const toast = useRef(null);

  const showRegistryModal = (registry) => {
    if (modalVisible) return;
    if (registry) {
      setRegistry(true);
    } else {
      setRegistry(false);
    }
    setModalVisible(true);
  };

  const items = [
    {
      key: 'home',
      label: (
        <a className='menu-label' href=''>
          Inicio
        </a>
      ),
      icon: <TbHome className='menu-icon' />,
      disabled: token
    },
    {
      key: 'login',
      label: (
        <span onClick={() => showRegistryModal(false)} className='menu-label'>
          Ingresar
        </span>
      ),
      icon: <AiOutlineLogin className='menu-icon' onClick={() => showRegistryModal(false)}  />,
      disabled: token
    },
    {
      key: 'register',
      label: (
        <span onClick={() => showRegistryModal(true)} className='menu-label'>
          Registrarse
        </span>
      ),
      icon: <RiUserAddLine className='menu-icon' onClick={() => showRegistryModal(true)} />,
      disabled: token
    },
    {
      key: 'profile',
      label: (
        <a className='menu-label' href=''>
          Perfil
        </a>
      ),
      icon: <PiUserBold className='menu-icon' />,
      disabled: !token
    },
    {
      key: 'logout',
      label: (
        <a className='menu-label' href=''>
          Cerrar sesión
        </a>
      ),
      icon: <RiLogoutCircleLine className='menu-icon' />,
      disabled: !token
    }
  ];

  return (
    <>
      <div className='nav-container'>
        <div>
          <a style={{ fontSize: '12px' }} href=''>
            <img src={brand} style={{ width: '80px' }} />
          </a>
        </div>
        <h1 className='nav-title'>Pizzería Mamma mía</h1>
        <div className='navbar-buttons-container'>
          <Button className='navbar-button'>
            <PiShoppingCart style={{ fontSize: '24px', marginRight: '1rem' }} />
            <span
              style={{ fontSize: '14px', margin: '0px', alignItems: 'center' }}
            >
              ${total.toLocaleString('es-CL')}
            </span>
          </Button>
          <Toast ref={toast}></Toast>
          <Menu
            className='menu'
            model={items}
            popup
            ref={menu}
            id='popup_menu'
          />
          <Button
            label=''
            icon={RiMenuUnfold4Line}
            className='navbar-button'
            onClick={(event) => menu.current.toggle(event)}
            aria-controls='popup_menu'
            aria-haspopup
          />
        </div>
      </div>
      {modalVisible && (
        <RegisterDialog
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          registry={registry}
          setRegistry={setRegistry}
        ></RegisterDialog>
      )}
    </>
  );
};
export default Navbar;
