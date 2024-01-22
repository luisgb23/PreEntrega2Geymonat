import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'
import style from './ItemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([null])

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if (loading) {
        return (
            <>
                <div className="d-flex justify-content-center mt-4">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
                <div className="row">
                    <p className="text-center">Cargando el producto...</p>
                </div>
            </>
        )
    }

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