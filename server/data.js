const data = {
  products: [
    {
      id: 0,
      title: 'Jim Beam® с беконом, сыром чеддер и луковыми кольцами',
      imageURL: 'https://i.postimg.cc/Qt1Wwrnh/Jimbeam.webp',
      category: 'Burgers',
      price: 1830,
      rating: 5,
      description:
        'Большая котлета из говядины, луковые кольца в панировке, бекон, соленые огурцы, свежие томаты, сыр чеддер, микс салата. Соус: авторский соус на основе бурбона Джим Бим.',
    },
    {
      id: 1,
      title: 'Скандинавский с брусничным вареньем и карамелизированным луком',
      imageURL: 'https://i.postimg.cc/RZhJ9tbP/Scandi.webp',
      category: 'Burgers',
      price: 1750,
      rating: 5,
      description:
        'Котлета из говядины, брусничное варенье, сливочный сыр, карамелизированный лук, микс салата, медово-горчичный соус.',
    },
    {
      id: 2,
      title: 'C адыгейским сыром и яйцом',
      imageURL:
        'https://i.postimg.cc/sXRkPpkK/Adygei.webphttps://i.postimg.cc/sXRkPpkK/Adygei.webp',
      category: 'Burgers',
      price: 1680,
      rating: 4,
      description:
        'Котлета из говядины, адыгейский сыр, яйцо, свежие томаты, микс-салат, авторский соус.',
    },
    {
      id: 3,
      title: 'Классический с сыром чеддер и соусом BBQ',
      imageURL: 'https://i.postimg.cc/XY1FyLCS/classic.webp',
      category: 'Burgers',
      price: 1550,
      rating: 5,
      description:
        'Котлета из говядины, красный лук, свежие томаты, сыр чеддер, микс-салат, соус BBQ.',
    },
    {
      id: 4,
      title: 'С голубым сыром зелеными томатами и горчицей',
      imageURL: 'https://i.postimg.cc/Qdd1twVJ/bluecheese.webp',
      category: 'Burgers',
      price: 1740,
      rating: 1,
      description:
        'Котлета из говядины, зеленые помидоры, голубой сыр, микс салата, горчичный соус с абрикосовым вареньем.',
    },
    {
      id: 5,
      title: 'С арахисовой пастой, черносмородиновым вареньем и беконом',
      imageURL: 'https://i.postimg.cc/FKfSbSyf/pasta.jpg',
      category: 'Burgers',
      price: 1780,
      rating: 3,
      description:
        'Котлета из говядины, бекон, черносмородиновое варенье, арахисовая паста, сыр чеддер, микс салата, авторский соус ',
    },
    {
      id: 6,
      title: 'Французский с луковыми кольцами и дижонской горчицей',
      imageURL: 'https://i.postimg.cc/d3FTKSzd/frensh.webp',
      category: 'Burgers',
      price: 1650,
      rating: 3,
      description:
        'Котлета из говядины, свежие томаты, луковые кольца в панировке, микс салата, соус на майонезной основе с добавлением меда и горчицы.',
    },
    {
      id: 7,
      title: 'XXL бургер с двумя котлетами',
      imageURL: 'https://i.postimg.cc/k432xpMZ/xxl.jpg',
      category: 'Burgers',
      price: 1970,
      rating: 5,
      description:
        'Две котлеты из говядины, маринованный лук, кинза, свежие томаты, домашний кетчуп с аджикой, сырно-чесночный соус, микс салата.',
    },
    {
      id: 8,
      title: 'Картофель с розмарином и соусом',
      imageURL: 'https://i.postimg.cc/Nfp2WDb9/patatoes1.webp',
      category: 'Sides',
      price: 900,
      rating: 5,
      description:
        'Фирменный картофель, обжаривается тонкими слайсами, розмарин. Соус включен в стоимость.',
    },
    {
      id: 9,
      title: 'Жареный картофель с укропом и чесноком',
      imageURL: 'https://i.postimg.cc/Zqy9vSmp/patatoes2.webp',
      category: 'Sides',
      price: 900,
      rating: 5,
      description: 'Картофель по-деревенски дольками, чесночное масло, укроп.',
    },
    {
      id: 10,
      title: 'Овощи гриль',
      imageURL: 'https://i.postimg.cc/Fzh16kLV/grill.webp',
      category: 'Sides',
      price: 800,
      rating: 5,
      description: 'Кабачок, баклажан, томат, шампиньон, лук.',
    },
    {
      id: 11,
      title: 'Цезарь с курицей',
      imageURL: 'https://i.postimg.cc/BbCPZB0z/chesar.webp',
      category: 'Salads',
      price: 2100,
      rating: 5,
      description:
        'Микс салат (айсберг, ромейн), гренки из белого хлеба, томаты черри, пармезан, куриная грудка. Соус цезарь: растительное масло, желток, бальзамический уксус, анчоусы, чеснок, зернистая горчица, пармезан.',
    },
    {
      id: 12,
      title: 'Хрустящие баклажаны с тофу и томатом в соусе сладкий чили',
      imageURL: 'https://i.postimg.cc/B6TXNBXv/salat-aubergine.jpg',
      category: 'Salads',
      price: 2200,
      rating: 5,
      description: 'Тофу в панировке, свежие томаты, баклажаны, кунжут, чили соус, кинза.',
    },
    {
      id: 13,
      title:
        'Тёплый салат с лососем слабой соли, запечённым картофелем, яйцом пашот и зернистой горчицей',
      imageURL: 'https://i.postimg.cc/RZY600kv/salad-salmon.jpg',
      category: 'Salads',
      price: 2500,
      rating: 5,
      description:
        'Микс салата, руккола, лосось слабой соли, запеченный картофель, яйцо пашот, укроп. Заправка: мед, зернистая горчица, лимонный сок, оливковое масло, растительное масло.',
    },
    {
      id: 14,
      title: 'Домашний сметанник',
      imageURL: 'https://i.postimg.cc/8Cq6ZC4Z/dess-smetana.webp',
      category: 'Desserts',
      price: 1500,
      rating: 5,
      description: 'Сметана, сахарная пудра, печенье. На выбор с малиной/бананом.',
    },
    {
      id: 15,
      title: 'Шоколадный фондан с мороженым',
      imageURL: 'https://i.postimg.cc/nVKD1pD1/dess-fondan.webp',
      category: 'Desserts',
      price: 1800,
      rating: 5,
      description:
        'Шоколадный кекс с жидкой начинкой, шарик ванильного мороженого, сахарная пудра.',
    },
    {
      id: 16,
      title: 'Венская вафля со сливочным кремом и ягодным соусом',
      imageURL: 'https://i.postimg.cc/5NxF7T5W/dess-waffle.webp',
      category: 'Desserts',
      price: 1790,
      rating: 5,
      description:
        'Венская вафля (яйцо, сливочное масло, мука, сахар, сливки), сливочный крем (йогурт, сливочный сыр, сахар), варенье из клюквы и черной смородины.',
    },
  ],
};

export default data;
