import React from 'react';
import Container from '../../../../components/layout/Container';
import CardVitrine from '../CardVitrine';
import useCatalogo from '../../../../utils/hooks/useCatalago';
import './styles.css';

function Catalogo() {
  const { catalogo } = useCatalogo();

  return (
    <Container>
      <div className="catalogo">
        { catalogo.map((item) => {
          const precoAVista = item.sellers[0].commertialOffer.Price;
          const precoParceladoEmDezVezes = precoAVista / 10;

          return (
            <CardVitrine
              key={item.itemId}
              titulo={item.name}
              precoAVista={precoAVista}
              precoParceladoEmDezVezes={precoParceladoEmDezVezes}
              imagem={item.images[0]}
              sobConsulta={item.sobConsulta[0]}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Catalogo;
