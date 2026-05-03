import React, { useEffect } from 'react'
import './DetailsModal.css'
export default function DetailsModal({onHide}) {
  useEffect(
    ()=>{
      const checkKey =(event)=>{
        console.log(event)
        if(event.keyCode ===27){
          onHide()
        }
      }
      window.addEventListener('keydown',checkKey)
      return ()=> window.removeEventListener('keydown',checkKey)
    }
  )
  return (
    <div className="modal-parent active">
    <div className="detail-modal ">
        <table className="cms-table">
            <tr>
                <th>اسم</th>
                <th>قیمت</th>
                <th>محبوبیت</th>
            </tr>
            <tr>
                <td>لپ تاب</td>
                <td>14</td>
                <td>91</td>
            </tr>
        </table>
        
    </div>
    </div>
  )
}
