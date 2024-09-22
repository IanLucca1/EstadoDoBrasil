let dados = [
  {
    //São Paulo
    estado: "São Paulo",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg/300px-Bandeira_do_estado_de_S%C3%A3o_Paulo.svg.png",
    descricao:
      "São Paulo é o estado mais populoso do Brasil e um importante centro econômico e cultural. A cidade de São Paulo é a maior metrópole da América Latina e oferece uma infinidade de opções de lazer como museus, teatros e restaurantes.",
    link: "https://pt.wikipedia.org/wiki/São_Paulo",
    tags: "Sudeste",
  },
  {
    // Mians Gerias
    estado: "Minas Gerais",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg",
    descricao:
      "Minas Gerais é um estado brasileiro localizado na região Sudeste, conhecido por sua rica história, cultura diversificada e paisagens exuberantes. Com uma economia forte e um povo acolhedor, Minas Gerais se destaca pela produção de diversos produtos como café, leite e minerais.",
    link: "https://pt.wikipedia.org/wiki/Minas_Gerais",
    tags: "Sudeste",
  },
  {
    // Rio de Janeiro
    estado: "Rio de Janeiro",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg",
    descricao:
      "O Rio de Janeiro é um estado brasileiro conhecido por suas belas praiasO Rio de Janeiro é um estado brasileiro conhecido por suas belas praias, como Copacabana e Ipanema, e por ser a antiga capital do país. Sua rica história e cultura se manifestam em diversos aspectos, desde a arquitetura até a música.",
    link: "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
    tags: "Sudeste",
  },
  {
    // Amazonas
    estado: "Amazonas",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandeira_do_Amazonas.svg", // Bandeira do Amazonas
    descricao:
      "O Amazonas é o maior estado brasileiro em extensão territorial e é conhecido pela Floresta Amazônica, a maior floresta tropical do mundo. Sua biodiversidade é riquíssima e abriga diversas espécies de animais e plantas.",
    link: "https://pt.wikipedia.org/wiki/Amazonas",
    tags: "Norte",
  },
  {
    //Acre
    estado: "Acre",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandeira_do_Acre.svg", // Bandeira do Acre
    descricao:
      "Acre é um estado localizado na região Norte do Brasil, conhecido por suas florestas tropicais densas e biodiversidade única. É um dos principais produtores de borracha do país e abriga diversas comunidades indígenas.",
    link: "https://pt.wikipedia.org/wiki/Acre",
    tags: "Norte",
  },
  {
    //Alagoas
    estado: "Alagoas",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Bandeira_de_Alagoas.svg", // Bandeira de Alagoas
    descricao:
      "Alagoas é um estado na região Nordeste do Brasil, famoso por suas praias paradisíacas e lagoas de águas cristalinas. A capital, Maceió, é conhecida por seu litoral deslumbrante e cultura vibrante.",
    link: "https://pt.wikipedia.org/wiki/Alagoas",
    tags: "Nordeste",
  },
  {
    //Amapá
    estado: "Amapá",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amapá.svg", // Bandeira do Amapá
    descricao:
      "Amapá é um estado na região Norte do Brasil, caracterizado por suas vastas áreas de floresta amazônica e por abrigar o Parque Nacional do Tumucumaque, uma das maiores áreas protegidas de floresta tropical do mundo.",
    link: "https://pt.wikipedia.org/wiki/Amapá",
    tags: "Norte",
  },
  {
    //Bahia
    estado: "Bahia",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg", // Bandeira da Bahia
    descricao:
      "Bahia é um estado brasileiro conhecido por sua rica cultura afro-brasileira, suas festas populares vibrantes, como o Carnaval, e suas belas praias. Salvador, a capital, é um importante centro histórico e cultural.",
    link: "https://pt.wikipedia.org/wiki/Bahia",
    tags: "Nordeste",
  },
  {
    //Ceará
    estado: "Ceará",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Ceará.svg", // Bandeira do Ceará
    descricao:
      "Ceará é um estado brasileiro situado na região Nordeste, famoso por suas praias de areia branca e falésias coloridas. Fortaleza, a capital, é um importante destino turístico e cultural.",
    link: "https://pt.wikipedia.org/wiki/Ceará",
    tags: "Nordeste",
  },
  {
    //Distrito Federal
    estado: "Distrito Federal",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg", // Bandeira do Distrito Federal
    descricao:
      "O Distrito Federal é uma unidade federativa do Brasil onde está localizada a capital do país, Brasília. Conhecida por sua arquitetura modernista, Brasília é um centro político e administrativo.",
    link: "https://pt.wikipedia.org/wiki/Distrito_Federal_(Brasil)",
    tags: "Centro-Oeste",
  },
  {
    //Espírito Santo
    estado: "Espírito Santo",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Espírito_Santo.svg", // Bandeira do Espírito Santo
    descricao:
      "Espírito Santo é um estado na região Sudeste do Brasil, conhecido por suas praias e montanhas. Vitória, a capital, é um importante porto e centro de comércio.",
    link: "https://pt.wikipedia.org/wiki/Espírito_Santo_(estado)",
    tags: "Sudeste",
  },
  {
    //Goiás
    estado: "Goiás",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goiás.svg", // Bandeira de Goiás
    descricao:
      "Goiás é um estado na região Centro-Oeste do Brasil, famoso por seu cerrado e parques nacionais. É um importante produtor agrícola e possui um rico patrimônio histórico e cultural.",
    link: "https://pt.wikipedia.org/wiki/Goiás",
    tags: "Centro-Oeste",
  },
  {
    //Maranhão
    estado: "Maranhão",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranhão.svg", // Bandeira do Maranhão
    descricao:
      "Maranhão é um estado na região Nordeste do Brasil, conhecido por seus Lençóis Maranhenses, um vasto deserto de dunas de areia branca e lagoas de água doce. São Luís, a capital, possui um centro histórico de influência colonial.",
    link: "https://pt.wikipedia.org/wiki/Maranhão",
    tags: "Nordeste",
  },
  {
    // Mato Grosso
    estado: "Mato Grosso",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg", // Bandeira de Mato Grosso
    descricao:
      "Mato Grosso é um estado localizado na região Centro-Oeste do Brasil, conhecido por suas áreas de cerrado, pantanal e floresta amazônica. O estado é um dos maiores produtores agrícolas do país.",
    link: "https://pt.wikipedia.org/wiki/Mato_Grosso",
    tags: "Centro-Oeste",
  },
  {
    //Mato Grosso do Sul
    estado: "Mato Grosso do Sul",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg", // Bandeira de Mato Grosso do Sul
    descricao:
      "Mato Grosso do Sul é um estado na região Centro-Oeste do Brasil, famoso pelo Pantanal, uma das maiores áreas úmidas do mundo e um dos principais destinos de ecoturismo do país.",
    link: "https://pt.wikipedia.org/wiki/Mato_Grosso_do_Sul",
    tags: "Centro-Oeste",
  },
  {
    //Pará
    estado: "Pará",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Pará.svg", // Bandeira do Pará
    descricao:
      "Pará é um estado na região Norte do Brasil, conhecido por sua parte da Floresta Amazônica e o rio Amazonas. A economia do estado é fortemente baseada na mineração e na exploração dos recursos naturais.",
    link: "https://pt.wikipedia.org/wiki/Pará",
    tags: "Norte",
  },
  {
    //Paraíba
    estado: "Paraíba",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Bandeira_da_Paraíba.svg", // Bandeira da Paraíba
    descricao:
      "Paraíba é um estado na região Nordeste do Brasil, conhecido por suas praias, como a Praia de Tambaba, e por ser o ponto mais oriental das Américas, onde o sol nasce primeiro no continente.",
    link: "https://pt.wikipedia.org/wiki/Paraíba",
    tags: "Nordeste",
  },
  {
    // Paraná
    estado: "Paraná",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paraná.svg", // Bandeira do Paraná
    descricao:
      "Paraná é um estado na região Sul do Brasil, conhecido pelas Cataratas do Iguaçu, uma das maiores quedas d'água do mundo, e pela cidade de Curitiba, que é referência em planejamento urbano.",
    link: "https://pt.wikipedia.org/wiki/Paraná",
    tags: "Sul",
  },
  {
    // Pernambuco
    estado: "Pernambuco",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg", // Bandeira de Pernambuco
    descricao:
      "Pernambuco é um estado na região Nordeste do Brasil, famoso pelo frevo e maracatu, ritmos tradicionais, e por suas praias de águas mornas e recifes de coral, como em Porto de Galinhas.",
    link: "https://pt.wikipedia.org/wiki/Pernambuco",
    tags: "Nordeste",
  },
  {
    // Piauí
    estado: "Piauí",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piauí.svg", // Bandeira do Piauí
    descricao:
      "Piauí é um estado na região Nordeste do Brasil, conhecido pelo Parque Nacional da Serra da Capivara, onde estão algumas das mais antigas pinturas rupestres das Américas. Teresina, a capital, é a única da região localizada fora do litoral.",
    link: "https://pt.wikipedia.org/wiki/Piauí",
    tags: "Nordeste",
  },
  {
    // Rio Grande do Norte
    estado: "Rio Grande do Norte",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bandeira_do_Rio_Grande_do_Norte.svg", // Bandeira do Rio Grande do Norte
    descricao:
      "Rio Grande do Norte é um estado na região Nordeste do Brasil, conhecido por suas dunas e praias, como a Praia de Ponta Negra em Natal. O estado também se destaca pela produção de sal e energia eólica.",
    link: "https://pt.wikipedia.org/wiki/Rio_Grande_do_Norte",
    tags: "Nordeste",
  },
  {
    // Rio Grande do Sul
    estado: "Rio Grande do Sul",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg", // Bandeira do Rio Grande do Sul
    descricao:
      "Rio Grande do Sul é o estado mais ao sul do Brasil, conhecido por suas tradições gaúchas, vinícolas na Serra Gaúcha e pelas paisagens montanhosas e frias. Porto Alegre, a capital, é um importante centro cultural.",
    link: "https://pt.wikipedia.org/wiki/Rio_Grande_do_Sul",
    tags: "Sul",
  },
  {
    estado: "Rondônia",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bandeira_de_Rond%C3%B4nia.svg", // Bandeira de Rondônia
    descricao:
      "Rondônia é um estado na região Norte do Brasil, com grande parte de seu território coberto pela floresta amazônica. É um dos estados mais jovens do Brasil e possui uma economia baseada na agricultura e pecuária.",
    link: "https://pt.wikipedia.org/wiki/Rondônia",
    tags: "Norte",
  },
  {
    estado: "Roraima",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg", // Bandeira de Roraima
    descricao:
      "Roraima é o estado mais ao norte do Brasil, localizado na região Norte, com grande parte de seu território coberto pela Floresta Amazônica. Boa Vista, a capital, é a única capital brasileira localizada inteiramente no Hemisfério Norte.",
    link: "https://pt.wikipedia.org/wiki/Roraima",
    tags: "Norte",
  },
  {
    estado: "Santa Catarina",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg", // Bandeira de Santa Catarina
    descricao:
      "Santa Catarina é um estado na região Sul do Brasil, conhecido por suas praias, montanhas e influências culturais europeias. Florianópolis, a capital, é uma cidade que abrange uma ilha inteira e é um importante destino turístico.",
    link: "https://pt.wikipedia.org/wiki/Santa_Catarina_(estado)",
    tags: "Sul",
  },
  {
    estado: "Sergipe",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg", // Bandeira de Sergipe
    descricao:
      "Sergipe é o menor estado do Brasil, localizado na região Nordeste. Conhecido por seu litoral, cultura rica e pelo Cânion do Xingó, uma impressionante formação geológica no rio São Francisco.",
    link: "https://pt.wikipedia.org/wiki/Sergipe",
    tags: "Nordeste",
  },
  {
    estado: "Tocantins",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bandeira_do_Tocantins.svg", // Bandeira de Tocantins
    descricao:
      "Tocantins é um dos estados mais novos do Brasil, localizado na região Norte. É conhecido por suas áreas de cerrado e por ser o portal de entrada para a Amazônia. Palmas, a capital, é uma cidade planejada.",
    link: "https://pt.wikipedia.org/wiki/Tocantins",
    tags: "Norte",
  },
];
