import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'
import style from './ItemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState([null])

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    if (!product) {
        return <h1 className='text-center mt-4 mb-4'>El producto no existe</h1>
    }

    return (
        <>
            <h1 className='text-center mt-4 mb-4'>{greeting}</h1>
            <div className={style.cardDetail}>
                <ItemDetail {...product} />
            </div>
        </>

    )
}

export default ItemDetailContainer