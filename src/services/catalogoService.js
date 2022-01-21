import requisicaoHttp from '../utils/http/requisicaoHttp';

const BASE_URL = 'https://bitbucket.org/vitriosdev/vitrio-dev-test/raw/master/data/catalogo.json';

const catalogoService = {
  listarProdutos: async () => requisicaoHttp(BASE_URL, {
    method: 'GET',
  }),
};

export default catalogoService;
