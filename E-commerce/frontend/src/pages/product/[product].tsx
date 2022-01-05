import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link'

import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3333"
})

import styles from './styles.module.scss';
import CarShop from '../../components/ShopCar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CircleIcon from '@mui/icons-material/Circle';
import AddToCarShopp from '../../components/AddToCarShopp';
import { useShopCar } from '../../context/carrinho';





function Products({episode}) {
  const [set, setSet] = useState()
  const [imag, setImag] = useState('')
  const { Item, setItem } = useShopCar()

  let tamanho = episode[0];
  

  // const [leng, setLeng] = useState(Number)

  function ShopCar(e){
    const AddPRoduct = Item
    AddPRoduct.push(e)

    setItem([...AddPRoduct])
  }

  useEffect(()=>{
    // setLeng(Item.length)
    console.log(imag)
  }, [imag])

  function valueSize(e){
    setSet(e.target.value)
  }

  function ImagemSetada(e){
    setImag(e.target.value)
  }

  let imageSize = tamanho.img.length;
  // console.log(imageSize.map((e)=>e))

  return (
    <div className={styles.Products}>
      
      <div className={styles.HeaderProduct}>
        <Link href="/">
        <div className={styles.HeaderContainerBack}>
          <div>
            <ArrowBackIosIcon />
          </div>
        </div>
        </Link>

        <div className={styles.HeaderImageContainer}>

          <img className={styles.ContainerImg} src={tamanho.img[0]} alt="" />

          <ul className={styles.ContainerImgSlider}>
            {tamanho.img.map((e, index)=>(
              <li onClick={(e)=>ImagemSetada(e)} key={index} value={e}><CircleIcon /></li>
            ))}
          </ul>

        </div>

        <div className={styles.CarShopContainer}>
          <CarShop />
        </div>

      </div>

      <div className={styles.ContentProduct}>
        <div className={styles.TitlePRice}>
          <h1>{tamanho.name}</h1>
          <h6>{tamanho.price}</h6>
        </div>

        <div className={styles.size}>
          <p>Size:</p>
          <ul>
          {tamanho.size.map((e, index)=>(
            <li 
              onClick={valueSize} 
              value={e} 
              key={e}
            >
                      {e}
            </li>
          ))}
          </ul>
        </div>

        <div className={styles.Description}>
          <h1>Descrição:</h1>
          <p>{tamanho.desc}</p>
        </div>

        <div className={styles.Button}>
          <div className={styles.Button1}>
            <AddToCarShopp funcao={ShopCar} valor={tamanho} />
          </div>

          <a className={styles.Button2} href="">
            <button>Comprar Item</button>
          </a>
        </div>

      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async ()=> {
  const {data} = await api.get('/products')

  let Prod = data;
  // console.log(Prod)

  const paths = Prod.map(e => ({
    params:{
      product: e._id
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {product} = ctx.params;

  const {data} = await api.get('/products')

  let Prod = data;
  
  // const {name} = await Prod.filter(e => e._id === product)
  const episode = await Prod.filter(e => e._id === product)


  return {
    props:{
      episode
    },
    revalidate: 60 * 60 * 24
  }


}





export default Products;
