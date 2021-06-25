import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './ManageProduct.css'
const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {

        fetch(`https://easyhand.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {
                setManageProducts(data)
               
            })

    }, []);
    const deleteProduct = (id) => {
        console.log(id)
        fetch(`https://easyhand.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                alert(result, 'Data deleted successfully')
                console.log(result, 'Data deleted successfully')
            })
            alert('Product deleted successfully')
            window.location.reload('/admin');
    }


    //Update Product Details

    const handleUpdateProduct = (id) => {
        alert('This feature under development')
    }
    return (
        <div className="checkout_container manage_table">
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Product Edit</th>
                        <th> Product Delete</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        manageProducts.length === 0 && <Preloader />
                    } */}
                    {
                        manageProducts.map((product) => {
                            return (
                                <tr style={{ borderBottom: '1px solid tomato' }}>
                                    <td> <img src={product.productImage} alt='product' width='80px' /></td>
                                    <td>{product.productName}</td>
                                    <td>{product.productPrice}</td>
                                    <td><button style={{ backgroundColor: 'green' , padding:'5px' ,  color:'white'  }} onClick={() =>handleUpdateProduct(`${product._id}`)}><FontAwesomeIcon icon={faPencilAlt} /></button></td>
                                    <td><button style={{ backgroundColor: 'red' ,padding:'5px' ,   color:'white' }} onClick={() => deleteProduct(`${product._id}`)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>

                                    <td>  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
</td>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;