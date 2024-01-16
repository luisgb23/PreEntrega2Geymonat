import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="card cardDetail">
            <header className="card-header mb-2 bgColor">
                <h2 className="text-center">{name}</h2>
            </header>
            <picture className="text-center">
                <img src={img} alt={name} className="imgCard" />
            </picture>
            <section className="card-body">
                <p className='text-center'>Categoría: {category}</p>
                <p className='text-center'>Precio: {price}</p>
                <p className='text-center'>Descripción: {description}</p>
                <p className='text-center'>Stock: {stock}</p>
            </section>
            <footer className='text-center mb-2'>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail