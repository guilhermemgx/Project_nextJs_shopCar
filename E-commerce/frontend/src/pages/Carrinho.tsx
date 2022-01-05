import Link from 'next/link'

import {useShopCar} from '../context/carrinho'
import styles from '../styles/carrinho.module.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect } from 'react';
import ExcludeItem from '../components/ExcludeItem';

type Prop = {
  price:Number;
}

function Carrinho({price}:Prop) {

  const {Item, setItem} = useShopCar()

  let Total = Item.map((e)=>(parseFloat(e.price)))

  // Total = Total.replace(/,/g, '.')

  // let somatoria = Total++

  let soma = 0
  for(let i in Total){
    soma += Total[i]
  }

  function dellItem(index){
    const remove = Item.filter((e, i)=> i !== index )
  
    setItem([...remove])
  }

  // console.log(soma)
  return (
    <div className={styles.Container}>

      <div className={styles.HeaderContainer}>
        
        <Link href="/">
            <div className={styles.HeaderContainerBack}>
              <div>
                <ArrowBackIosIcon />
              </div>
            </div>
          </Link>

          <h1>Carrinho</h1>

          <div className={styles.contentSomatoria}>
            <p>Total: </p>
            <h1>
              R${soma}
            </h1>
          </div>

      </div>

      <div className={styles.Carrinhodecomprar}>
        {/* {Item.length} */}

        {Item.map((e, index)=>(
          <div key={index}>

            <div>
            <img src={e.img[0]} alt="" />
              <div>
                <p>{e.name}</p>
                <h4>R$ {e.price}</h4>
              </div>
            </div>

            <div>
              <ExcludeItem funcao={dellItem} valor={index} />
            </div>

          </div>
        ))}
      </div>
        

        <div className={styles.FinalizarCompra}>
          <a href="">
            <button>Finalizar compra</button>
          </a>
        </div>
    </div>
  );
}

export default Carrinho;
