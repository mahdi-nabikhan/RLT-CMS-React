import React from 'react'
import './AddNewProduct.css'
export default function AddNewProduct() {
  return (
    <div className="products-main">
        <h1 className="products-title">افزودن محصول</h1>
        <form action="#" className='add-products-form'>
            <div className="add-products-form-wrap">
                <div className="add-products-from-group">
                    <input type="text" className="add-products-input" placeholder='اسم محصول را بنویسید' />
                </div>
                <div className="add-products-from-group">
                    <input type="text" className="add-products-input" placeholder='قیمت محصول را بنویسید' />
                </div>
                <div className="add-products-from-group">
                    <input type="text" className="add-products-input" placeholder='  ادرس عکس محصول را بنویسید ' />
                </div>
                <div className="add-products-from-group">
                    <input type="text" className="add-products-input" placeholder='  میزان محبوبیت محصول را بنویسید ' />
                </div>
                <div className="add-products-from-group">
                    <input type="text" className="add-products-input" placeholder='  میزان فروش محصول را بنویسید ' />
                </div>
                <div className="add-products-from-group">
                    <input type="text" className="add-products-input" placeholder='   تعداد رنگ بندی را بنویسید' />
                </div>
                
            </div>
            <button className="add-products-submit"></button>
        </form>
    </div>
  )
}
