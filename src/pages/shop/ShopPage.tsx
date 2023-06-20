import { Product } from '@/model/product';
import { useEffect, useState } from 'react';
import { pb } from '../../pocketbase';
import { ProductCard } from './components/ProductCard';
import { ServerError, Spinner } from '@/shared/';
import { useCart, useCartPanel } from '@/services/cart';


export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [pending, setPending] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const openCartPanel = useCartPanel(state => state.openOverlay)
  const addToCart = useCart(state => state.addToCart)

  useEffect(() => {
    setPending(true)
    setError(false)
    pb.collection('products').getList<Product>()
      .then(res => {
        setProducts(res.items)
        setError(false)
      })
      .catch(() => setError(true))
      .finally(() => setPending(false))
  }, [])

  // function addToCart(product: Partial<Product>) {
  //   console.log(product)
  //   openCartPanel()
  // }

  return (
    <div>
      <h1 className="title">SHOP</h1>

      { pending && <Spinner /> }
      { error && <ServerError /> }

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-16'>
      {
        products.map(p => {
          return (
            <ProductCard
            key={p.id} 
            product={p}
            onAddToCart={() => {
              openCartPanel();
              addToCart(p)
            }}/>
          )
        })
      }
      </div>

    </div>
  )
}