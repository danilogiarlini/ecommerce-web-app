import { useProductsService } from "@/services/products";
import { useEffect } from "react";
import { ServerError } from "../../../shared/";
 
export function CMSProductsPage() {
  const { state, actions } = useProductsService()

  useEffect(() => { 
    actions.getProducts()
  }, [])
 
  return (
    <div>
      <h1 className="title">CMS</h1>
 
      Pagina Prodotti
 
      <hr className="my-8"/>
 
      {state.pending && <div>loading...</div>}
      {state.error && <ServerError message={state.error}/>}
 
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}