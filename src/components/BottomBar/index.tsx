import React, { useMemo } from 'react';
import { FiHome, FiSearch, FiBookmark, FiTv } from 'react-icons/fi';

import { Container } from './styles';

interface BottomBarProps {
  selectedPage: 'home' | 'search' | 'favorites' | 'my ads';
}

const BottomBar: React.FC<BottomBarProps> = ({ selectedPage = '' }) => {
  const bottomBarPages = useMemo(() => {
    return [
      {
        icon: (
          <FiHome
            size={24}
            color={selectedPage === 'home' ? '#62a7bc' : '#000'}
          />
        ),
        name: 'Inicio',
      },
      {
        icon: (
          <FiSearch
            size={24}
            color={selectedPage === 'search' ? '#62a7bc' : '#000'}
          />
        ),
        name: 'Buscar',
      },
      {
        icon: (
          <FiBookmark
            size={24}
            color={selectedPage === 'favorites' ? '#62a7bc' : '#000'}
          />
        ),
        name: 'Favoritos',
      },
      {
        icon: (
          <FiTv
            size={24}
            color={selectedPage === 'my ads' ? '#62a7bc' : '#000'}
          />
        ),
        name: 'Meus anúncios',
      },
    ];
  }, [selectedPage]);

  return (
    <Container>
      {bottomBarPages.map(page => (
        <button type="button" key={page.name}>
          {page.icon}
          <span>{page.name}</span>
        </button>
      ))}
    </Container>
  );
};

export default BottomBar;
