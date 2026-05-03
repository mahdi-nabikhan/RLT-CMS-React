import React, { useState } from "react";
import "./ProdcutsTable.css";
import DeleteModal from "./../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import {AiFillDollarCircle} from 'react-icons/ai'
export default function ProductsTable() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowDetailModal,setIsShowDetailModal]=useState(false)
  const [isShowEditModal,setIsShowEditModal]=useState(false)
  const deleteModalCancelAction = () => {
    console.log("مدال کنسل شد");
    setIsShowModal(false);
  };

  const deleteModalSubmitAction = () => {
    console.log("مدال تایید شد");
    setIsShowModal(false);
  };
  const closeDetailModal = ()=>{
    setIsShowDetailModal(false)
  }

  const updateProductInfos = () =>{
    console.log('محصول ادیت شد')
  }
  return (
    <>
    
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>

        <tbody>
          <tr className="products-table-tr">
            <td>
              <img
                src="/img/oil.jpeg"
                alt="oil image"
                className="products-table-img"
              />
            </td>
            <td>روغن سرخ کردنی</td>
            <td>92000 تومان</td>
            <td>82</td>
            <td>
              <button className="products-table-btn" onClick={()=>setIsShowDetailModal(true)}>جزییات</button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowModal(true)}
              >
                حذف
              </button>
              <button onClick={()=>setIsShowEditModal(true)} className="products-table-btn">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
        />
      )}
      {isShowDetailModal &&(
        <DetailsModal onHide={closeDetailModal}/>
      )}{isShowEditModal && <EditModal onClose={()=>setIsShowEditModal(false)} onSubmit={updateProductInfos}>
          <div className="edit-products-form-group">
            <span>
              <AiFillDollarCircle/>
              <input className="edit-product-input" type="text" placeholder="عنوان جدید را وارد کنید" />
            </span>
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillDollarCircle/>
              <input className="edit-product-input" type="text" placeholder="عنوان جدید را وارد کنید" />
            </span>
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillDollarCircle/>
              <input className="edit-product-input" type="text" placeholder="عنوان جدید را وارد کنید" />
            </span>
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillDollarCircle/>
              <input className="edit-product-input" type="text" placeholder="عنوان جدید را وارد کنید" />
            </span>
          </div>
        
        
        </EditModal>}
    </>
  );
}
