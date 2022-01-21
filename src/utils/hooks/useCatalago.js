import React, { useEffect } from 'react';
import catalogoService from '../../services/catalogoService';

const useCatalogo = () => {
  const [catalogo, setCatalago] = React.useState([]);

  useEffect(() => {
    catalogoService.listarProdutos()
      .then((produtos) => {
        const itens = produtos
          .map((produto) => {
            const item = produto.items[0];
            item.sobConsulta = produto.sobconsulta;

            return item;
          });

        setCatalago(itens);
      });
  }, []);

  return {
    catalogo,
  };
};

export default useCatalogo;
