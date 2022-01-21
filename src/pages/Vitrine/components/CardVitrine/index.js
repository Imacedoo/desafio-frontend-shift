import React from 'react';
import PropTypes from 'prop-types';
import Botao from '../../../../components/common/Botao';
import './styles.css';
import Tooltip from '../../../../components/feedback/Tooltip';

function formataPreco(preco) {
  return preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function CardVitrine({
  titulo, precoAVista, precoParceladoEmDezVezes, imagem, sobConsulta,
}) {
  const isSobConsulta = sobConsulta === 'sim';
  const tituloReduzido = titulo.length > 23 ? `${titulo.substring(0, 23)}...` : titulo;
  const precoAVistaFormatado = formataPreco(precoAVista);
  const precoParceladoEmDezVezesFormatado = formataPreco(precoParceladoEmDezVezes);

  return (
    <div className="cardVitrine">
      <div className="cardVitrine__imagemContainer">
        <img
          className="cardVitrine__imagemContainer__imagem"
          src={imagem.imageUrl}
          alt={imagem.imageText}
        />
      </div>
      <Tooltip
        texto={titulo}
      >
        <h2 className="cardVitrine__titulo">
          { tituloReduzido }
        </h2>
      </Tooltip>
      { !isSobConsulta ? (
        <>
          <div className="cardVitrine__preco">
            <p className="cardVitrine__preco__avista">
              { precoAVistaFormatado }
            </p>
            <p className="cardVitrine__preco__parcelado">
              10 x de
              {' '}
              { precoParceladoEmDezVezesFormatado }
              {' '}
              sem juros
            </p>
          </div>
          <Botao
            label="Comprar"
            fullWidth
          />
        </>
      ) : (
        <Botao
          label="Consulte"
          fullWidth
        />
      )}
    </div>
  );
}

CardVitrine.propTypes = {
  titulo: PropTypes.string.isRequired,
  precoAVista: PropTypes.number.isRequired,
  precoParceladoEmDezVezes: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imagem: PropTypes.object.isRequired,
  sobConsulta: PropTypes.string.isRequired,
};

export default CardVitrine;
