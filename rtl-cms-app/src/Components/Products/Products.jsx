import React from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProdcutsTable from '../ProductsTable/ProdcutsTable'
export default function Products() {
  return (
    <>
   <AddNewProduct/>
    <div><ErrorBox msg='هیچ محصولی یافت نشد'/></div>
    <ProdcutsTable/>
     </>
  )
}
