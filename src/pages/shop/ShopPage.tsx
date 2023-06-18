
import { Product } from '@/model/product';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';

export const pb = new PocketBase('http://127.0.0.1:8090');

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    loadData()
  }, [])

  function loadData() {
    pb.collection('products').getList<Product>()
      .then(res => {
        setProducts(res.items)
      })
  }

  console.log(products)
  return (
    <div>
      <h1 className="title">SHOP</h1>

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  )
}