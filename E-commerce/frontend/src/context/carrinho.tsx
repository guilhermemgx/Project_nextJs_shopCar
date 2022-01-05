import { GetServerSideProps } from 'next';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {api} from '../api/Api'

type carContextProviderProps = {
    children: ReactNode;
}

export const CarContext = createContext(null)

export function  CarProvider({children}: carContextProviderProps){
    const [Item, setItem] = useState(Array);

    const [Products, setProducts] = useState(Array);

    // console.log(data)
    // useEffect(()=>{console.log(data)},[data])
    
    return(
        <CarContext.Provider value={{ Item, setItem, Products, setProducts }}>
            {children}
        </CarContext.Provider>
    )
}

export function useShopCar() {
    const context = useContext(CarContext)
    const {Item, setItem} = context
    return {Item, setItem}
}

export function ProductsList() {
    const context = useContext(CarContext)
    const {Products, setProducts} = context
    return {Products, setProducts}
}


