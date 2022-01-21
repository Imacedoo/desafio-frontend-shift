import React from 'react';
import Container from '../../layout/Container';
import FormularioNewsletter from './components/FormularioNewsletter';
import './styles.css';

function Newsletter() {
  return (
    <footer className="newsletter">
      <Container>
        <h2 className="newsletter__titulo">
          Assine nossa newsletter
        </h2>
        <p className="newsletter__descricao">
          Fique por dentro das nossas novidades e receba 10% de desconto na primeira compra.
          <br />
          <span className="newsletter__descricao__condicao">
            *valido somente para joias e não acumulativo com outras promoções
          </span>
        </p>
        <FormularioNewsletter />
      </Container>
    </footer>
  );
}

export default Newsletter;
