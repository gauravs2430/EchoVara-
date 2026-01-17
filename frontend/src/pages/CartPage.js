import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/slices/cartSlice';

const CartPage = () => {
    const dispatch = useDispatch();
    const { items, totalAmount } = useSelector((state) => state.cart);

    return (
        <div style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Shopping Cart</h1>
            {items.length === 0 ? (
                <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#aaa' }}>Your cart is empty</p>
            ) : (
                <div>
                    {items.map((item) => (
                        <div key={item.id} style={{ background: '#1a1a1a', padding: '1.5rem', marginBottom: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3>{item.name}</h3>
                                <p style={{ color: '#00ff9d' }}>${item.price}</p>
                            </div>
                            <div>
                                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} style={{ padding: '0.5rem 1rem', background: '#333', color: '#fff', marginRight: '0.5rem' }}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} style={{ padding: '0.5rem 1rem', background: '#333', color: '#fff', marginLeft: '0.5rem' }}>+</button>
                                <button onClick={() => dispatch(removeItem(item.id))} style={{ padding: '0.5rem 1rem', background: '#ff4444', color: '#fff', marginLeft: '1rem' }}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                        <h2>Total: ${totalAmount.toFixed(2)}</h2>
                        <button style={{ marginTop: '1rem', padding: '1rem 3rem', background: '#00ff9d', color: '#000', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '4px' }}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
