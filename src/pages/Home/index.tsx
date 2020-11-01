import React, { useState, useEffect } from 'react';
import { FaTachometerAlt } from 'react-icons/fa';

import { Container, CarContainer, CarData } from './styles';
import BottomBar from '../../components/BottomBar';
import api from '../../services/api';

interface Car {
  id: number;
  brand: string;
  model: string;
  price: string;
  year: string;
  travelledDistance: string;
  automatic: boolean;
  photo: string;
}

const Home: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get<Car[]>('/cars');

      const data = response.data.map(car => ({
        ...car,
        year: car.year.split('/')[0],
        price: car.price.replace('R$ ', ''),
      }));

      setCars(data);
    }
    loadData();
  }, []);

  return (
    <>
      <Container>
        {cars.map(car => (
          <CarContainer key={car.id}>
            <img src={car.photo} alt={car.brand} />
            <div>
              <header>
                <div>
                  <span>{car.brand}</span>
                  <span>{car.model}</span>
                </div>

                <strong>
                  R$
                  {car.price}
                </strong>
              </header>
              <div>
                <CarData>
                  <span>{car.year}</span>
                  <span>{car.automatic ? 'Automático' : 'Manual'}</span>
                  <br />
                  <span>Gasolina</span>
                  <span>
                    <FaTachometerAlt />
                    {car.travelledDistance}
                  </span>
                </CarData>
                <strong>
                  R$
                  <span>{car.price}</span>
                </strong>
              </div>
            </div>
          </CarContainer>
        ))}
      </Container>
      <BottomBar selectedPage="search" />
    </>
  );
};

export default Home;
