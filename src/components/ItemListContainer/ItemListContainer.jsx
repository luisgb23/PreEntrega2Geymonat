import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return (
            <>
                <div className="d-flex justify-content-center mt-4">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
                <div className="row">
                    <p className="text-center">Cargando los productos...</p>
                </div>
            </>
        )
    }
    return (
        <div>
            <h1 className="text-center mt-4">{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer