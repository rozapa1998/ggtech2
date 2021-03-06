import React, {useState,createContext} from 'react'

export const CartContext = createContext()

         export const CartProvider = ({ children }) => {
            const [cart, setCart] = useState([]);

            //Fijarse si hay repetidos
            const isInCart = (id) => cart.some((item)=>item.id === id); 
            
            //Agregar al Carrito
            const addToCart = (item, cantidad) => {
                if (isInCart(item.id)) {
                    const newCart = cart.map((cartElement)=>{
                    if (cartElement.id === item.id) {
                        return{...cartElement, cantidad:cartElement.cantidad + cantidad};
                    }else return cartElement;
                    });
                    setCart(newCart);
                }else{
                    setCart((prev) => [...prev, {...item, cantidad}])
                }
            };

            //Remover 1 Item
            const removeItem = (itemId) =>{
                setCart(cart.filter((elem) => elem.id !== itemId)
                )}

            //Clear Carrito
            const clear = () => setCart([])

            //Suma Precio Total
            const CalcularTotal = cart.reduce((acc, item)=>{
                return acc + item.price*item.cantidad;
            }, 0)

            return(
                <CartContext.Provider value={{cart, clear, removeItem, addToCart,isInCart, CalcularTotal}}>
                    {children}
                </CartContext.Provider>
            )
         }