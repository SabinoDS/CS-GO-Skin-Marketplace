CS:GO Skin Marketplace

Este é o repositório do front-end de uma aplicação web desenvolvida utilizando o framework Next.js, projetada para criar um mercado de skins do jogo Counter-Strike: Global Offensive (CS:GO). Esta aplicação permite aos usuários realizar diversas operações em relação às skins, como inclusão, listagem, exclusão, alteração e consulta de registros, bem como pesquisa e visualização de estatísticas em gráficos.
Funcionalidades

  Inclusão de Skins: Os usuários podem adicionar novas skins para venda no mercado, fornecendo informações detalhadas sobre cada skin, como nome, preço, raridade, e outras informações relevantes.

  Listagem de Skins: Exibe uma lista de todas as skins disponíveis no mercado, incluindo informações como nome, preço e uma descrição sobre a raridade da skin. O nome da raridade é obtido a partir de uma tabela auxiliar.

  Alteração de Skins: Os usuários têm a opção de editar informações de uma skin existente, incluindo a capacidade de alterar atributos individuais.

  Exclusão de Skins: Possibilita aos usuários remover skins do mercado quando necessário.

  Pesquisa de Skins: Implementa uma funcionalidade de pesquisa para filtrar as skins com base em critérios específicos, facilitando a localização de skins desejadas.

  Ordenação Personalizada: Oferece a capacidade de classificar a lista de skins em ordens diferentes, como por ID, nome ou preço.

  Estatísticas em Gráficos: Utiliza a biblioteca React Google Chart para criar gráficos estatísticos que fornecem insights sobre os dados cadastrais das skins no mercado.

Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

    Node.js: Instalação do Node.js
    Next.js: Instalação do Next.js
    React Google Chart: Instalação do React Google Chart

Instalação

Clone este repositório em seu ambiente de desenvolvimento:

    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio

Instale as dependências do projeto:

    npm install

Configure as variáveis de ambiente necessárias, como as chaves de API, URLs da API, etc., no arquivo .env.local.

Inicie o servidor de desenvolvimento:

    npm run dev

    Acesse a aplicação em seu navegador através de http://localhost:3000.

API JSON Server

Este projeto consome dados de uma API JSON Server que fornece informações relacionadas a classes de armas e detalhes específicos de skins de CS:GO. Abaixo estão alguns detalhes importantes sobre a API:

    Classes de Armas: A API fornece uma lista de classes de armas, incluindo o ID e o tipo de cada classe. Essas classes são usadas para categorizar as skins de CS:GO em diferentes tipos de armas.

    Informações da Arma: Além das classes de armas, a API também disponibiliza informaçõaes detalhadas sobre skins de CS:GO individuais. Essas informações incluem o nome da arma, o preço, a data de inclusão, a classe associada, a qualidade, se a skin é StatTrak ou não, a coleção e uma descrição.

    Imagem da Capa da Arma: Cada skin de arma possui uma URL de imagem da capa que pode ser usada para exibir uma representação visual da skin em seu aplicativo.

Exemplo de Uso:

Inicie o json-server:

    npx json-server --watch db.json --port 3004 

Para acessar os dados da API, você pode fazer requisições HTTP para as seguintes URLs:

    Classes de Armas: https://sua-api.com/classes
    Informações da Arma: https://sua-api.com/armas

Certifique-se de consultar a documentação da API JSON Server para obter detalhes adicionais sobre as rotas disponíveis e os formatos de dados.

Observação: Certifique-se de que a API esteja em execução e acessível para que seu aplicativo possa consumir os dados corretamente.

Para informações adicionais sobre como incorporar os dados da API em seu projeto, consulte a seção "Funcionalidades" deste README.
Contribuição

Sinta-se à vontade para contribuir para o desenvolvimento deste projeto. Você pode abrir problemas (issues) ou enviar pull requests com melhorias e correções de bugs.
Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.

