import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('ShopPage')) || []);
    const [ detailProdId, setDetailProdId ] = useState(0);

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      )

      useEffect(() => {
        localStorage.setItem('ShopPage', JSON.stringify(cartItems));
      }, [cartItems])

    // Find quantity of item
    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    // Increase quantity of found item, or add item if it doesn't exist
    const increaseCartQuantity = (id) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id: id, quantity: 1, key: id}];
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    // Decrase quantity of found item, or remove if quantity becomes zero
    const decreaseCartQuantity = (id) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    // Remove item with matching id
    const removeFromCart = (id) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        })
    }

    return (
        <DataContext.Provider value={{
            getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, cartItems, setCartItems, detailProdId, setDetailProdId
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
