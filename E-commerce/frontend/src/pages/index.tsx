import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

import CarShop from '../components/ShopCar'
import AddToCarShopp from '../components/AddToCarShopp'
import { ProductsList, useShopCar } from '../context/carrinho'
import {api} from '../api/Api'

import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CloseIcon from '@mui/icons-material/Close';

import styles from '../styles/styles.module.scss'

export default function Home(data) {
  const { Item, setItem } = useShopCar()
  const {setProducts} = ProductsList()


  const [lengt, setLeng] = useState(false)

  function ShopCar(e){
    const AddPRoduct = Item
    AddPRoduct.push(e)

    setItem([...AddPRoduct])

  }

  useEffect(()=>{
    setLeng(Item.length)
    // setProducts(Item)
  }, [Item])

  let Produtos = data.data;
  let x = Produtos.length;
  // let y = innerWidth
  const tela = 0;

  useEffect(()=>{
    setProducts(Produtos)
  },[Produtos])


  // console.log(y)

  console.log(Produtos.filter((e)=>e.type))
  return (
    <section>
      <div className={styles.HomeTitle}>
        <h1>Explore shoes</h1>
        <div>
          <span >
            <ManageSearchIcon className={lengt === true ? styles.nullo: styles.semnullo} onClick={()=>setLeng(!lengt)} />
            <input style={{transition:"all ease .3s"}} className={lengt === true ? styles.pesquisa:styles.semPesquisa} type="text" />
            <CloseIcon onClick={()=>setLeng(!lengt)} className={styles.fechar} style={lengt === true ? {}:{display:"none"}} />
          </span>
          <CarShop />
        </div>
      </div>

      <div>
        <h1></h1>
      </div>

      <div className={styles.Home} >
        {Produtos.map((e, index)=>(
          <div className={styles.ContainerWrapper} key={index}>
            <Link href={`/product/${e._id}`}>
              <a>
                <div className={styles.ContainerImage}>
                  <img src={e.img[0]} alt="" />
                </div>

                <div className={styles.ContainerInformation}>
                  <h1 >{e.name}</h1>
                  <h2> <p>R$</p> {e.price}</h2>
                </div>
              </a>
            </Link>
            <AddToCarShopp funcao={ShopCar} valor={e} />
          </div>
        ))}
      </div>
    </section>
  )
}



export const getStaticProps: GetServerSideProps = async ()=>{
  const {data} = await api.get('/products')
  // console.log(data.map(e => e.name))

  return {
    props:{
      data
    },
    revalidate: 60 * 60 * 8
  }
}