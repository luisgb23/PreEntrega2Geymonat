const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://cf5.certideal.com/31298-thickbox_default/iphone-12-mini-64-gb-blanco.jpg',
        stock:25,
        description: 'Iphone 12 S'
    },
    {
        id: '2',
        name: 'Iphone 14',
        price: 3000,
        category: 'celular',
        img: 'https://f.fcdn.app/imgs/291e40/www.covercompany.com.uy/coveuy/1cc1/original/catalogo/2-3386_9521_1/2000-2000/iphone-14-128gb-6gb-ram-5g-6-1-chip-a15-bionic-oled-retina-xdr-midnight.jpg',
        stock:25,
        description: 'Iphone 14 Pro'
    },
    {
        id: '3',
        name: 'Iphone 15',
        price: 5000,
        category: 'celular',
        img: 'https://m.media-amazon.com/images/I/81IPGZtygYL._AC_UF894,1000_QL80_.jpg',
        stock:25,
        description: 'Iphone 15 Pro Max'
    },
    {
        id: '4',
        name: 'Samsung Galaxy',
        price: 3500,
        category: 'tablet',
        img: 'https://http2.mlstatic.com/D_NQ_NP_890503-MLU47330983431_092021-O.webp',
        stock:25,
        description: 'Tablet Samsung Galaxy Tab 3'
    },
    {
        id: '5',
        name: 'Acer Aspire 3',
        price: 10000,
        category: 'notebook',
        img: 'https://f.fcdn.app/imgs/577458/www.market.com.uy/markuy/f5c0/original/catalogo/N045_1/1920-1200/notebook-acer-aspire-3-128gb-intel-n4500-v01.jpg',
        stock:25,
        description: 'Notebook Acer Aspire 3 128GB N4500'
    },
    {
        id: '6',
        name: 'Lenovo Thinkpad',
        price: 12000,
        category: 'notebook',
        img: 'https://sitio113222.p07.mvdsimple.uy/web/image/product.template/12648/image',
        stock:25,
        description: 'Notebook Lenovo Thinkpad 480GB'
    }
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}