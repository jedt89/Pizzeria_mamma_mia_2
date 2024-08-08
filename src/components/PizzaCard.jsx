/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { PiSealCheckDuotone, PiShoppingCart } from 'react-icons/pi';
import { Card } from 'primereact/card';
import pizzaIcon from '../assets/img/pizzaIcon.png';
import { VscSettings } from 'react-icons/vsc';

const PizzaCard = ({ name, price, ingredients, img }) => {
  const getIngredients = () => {
    const container = [];
    ingredients.map((ingredient, index) => {
      const template = (
        <div
          key={index}
          className='display-flex'
          style={{ justifyContent: 'space-between' }}
        >
          <div className='display-flex'>
            <img
              src={pizzaIcon}
              style={{ width: '20px', height: '15px', marginRight: '10px' }}
            />
            <div>{ingredient}</div>
          </div>
          <PiSealCheckDuotone color='limegreen' fontSize={24} />
        </div>
      );
      container.push(template);
    });
    return <div className='ingredients'>{container}</div>;
  };

  return (
    <>
      <div
        className='display-flex'
        style={{ gap: '1rem', borderRadius: '10px', overflow: 'hidden' }}
      >
        <div className='card justify-center text-center'>
          <Card
            title={name}
            subTitle='Base de salsa de tomate, queso parmesano, toques de romero y pasto de la risa, traído de la India'
            footer={
              <div>
                <h2 style={{ color: 'limegreen', marginTop: '0' }}>
                  Precio: ${price.toLocaleString('es-CL')}
                </h2>
                <div
                  className='display-flex'
                  style={{
                    borderTop: '1px solid #d3d3d380',
                    borderRadius: '0px',
                    paddingTop: '8px'
                  }}
                >
                  <div
                    className='button-card'
                    style={{ borderRight: '1px solid #d3d3d380' }}
                  >
                    <VscSettings fontSize={30} />
                    <p style={{ margin: '0' }}>Editar</p>
                  </div>
                  <div className='button-card'>
                    <PiShoppingCart fontSize={30} />
                    <p style={{ margin: '0' }}>Añadir</p>
                  </div>
                </div>
              </div>
            }
            header={<img alt='Card' src={img} />}
            className='md:w-25rem'
          >
            {getIngredients()}
          </Card>
        </div>
      </div>
    </>
  );
};

export default PizzaCard;
