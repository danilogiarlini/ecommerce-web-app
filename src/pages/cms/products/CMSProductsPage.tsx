import { Product } from '@/model/product';
import { useReducer } from "react"
import { pb } from '../../../pocketbase';
 
function productsReducer(state: any, action: any) {
  console.log(action)
  switch (action.type) {
    case 'pending':
      return { ...state, pending: action.payload };
    case 'getProductsSuccess':
      return { pending: false, products: action.payload}
  }
  return state;
}
 
export const initialState = { pending: false, products: [] };
 
export function CMSProductsPage() {
  const [state, dispatch] = useReducer(productsReducer, initialState);
 
  async function getProductsHandler() {
    dispatch({ type: 'pending', payload: true } );
    const res = await pb.collection('products').getList<Product>();
    dispatch({ type: 'getProductsSuccess', payload: res.items})
  }
 
  return (
    <div>
      <h1 className="title">CMS</h1>
 
      Pagina Prodotti
 
      <hr className="my-8"/>
 
      {state.pending && <div>loading...</div>}
 
      <button className="btn primary" onClick={getProductsHandler}>GET</button>
 
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}