import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { openBasketModal } from '../../../store/products/productsActions';
import '../../Modals/Modal.css'

const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "20px",
    border: "1px solid #282828",
    boxShadow:" 3px 3px 6px 3px grey",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    maxHeight: '300px'
  },
};

export const ModalBasket = () => {
  
  const { isBasketModalOpen, modalContents } = useSelector((state) => state.productsReducer)
  const dispatch = useDispatch()

  return (
    <div onBlur={() => dispatch(openBasketModal(false))} className='modal' >
      <Modal
        isOpen={isBasketModalOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='modalHeaderDiv'>
          <h1>Buying Products</h1>
          <button onClick={() => dispatch(openBasketModal(false))}>X</button>
        </div>
        <div className='modalDiv'>
          {
            modalContents.length !== 0 ?
            <table>
              <thead>
                <tr>
                  <th>N/N</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {
                  modalContents.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td><img src={item.image} /></td>
                      <td>{item.name}</td>
                      <td>{item.afterValue}</td>
                      <td>{item.count}</td>
                      <td>{item.afterValue * item.count}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table> :
            <h1>List is empty</h1>
          }
        </div>
      </Modal>
    </div>
  );
}