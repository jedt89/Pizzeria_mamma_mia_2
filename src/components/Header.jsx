import '../assets/styles/App.css';
import { Button } from 'primereact/button';
import { TbChartPieFilled } from "react-icons/tb";

const Header = () => {
  return (
    <div className='display-flex header-container'>
      <div className='header'>
        <div className='header-text width-100' >
          <h1 className='header-title'>¡Promociones todos los días!</h1>
          <h3>Ingresa y revisa nuestro menú</h3>
          <Button
            className='navbar-button head-button'
            icon={<TbChartPieFilled style={{fontSize: '20px', marginRight: '10px '}} />}
            size={'large'}
          >
            Ir al menú
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
