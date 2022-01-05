import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/update.module.scss'
import Menu from '../components/Menu'

const api = axios.create({
  baseURL: "http://localhost:3333"
})

type Valores = {
    value:String
}

export default function Update(data) {

    const [Item, setItem] = useState("")
    const [name, setName] = useState("")
    const [Descricao, setDescricao] = useState("")
    const [img, setImg] = useState([""])
    const [Tamanho, setTamanho] = useState([""])
    const [price, setPrice] = useState()
    const [type, setType] = useState()

  async function Cadastro(){
      await api.post('/register_products')
  }

  let Product = data.data
  // console.log(Product)

  async function teste(e){
    setItem(e.target.value);
    let x = []
    x = await Product.find(e => e._id === Item);
    console.log(x)
  }

  // console.log(Descricao)
  return (
    <div className={styles.Formulario}>
          <Menu />

        <div className={styles.Home} >
                {Product.map((e, index)=>(
                <div className={styles.ContainerWrapper} key={index}>
                    {/* <Link href={`/product/${e._id}`}> */}
                    <a>
                        <div className={styles.ContainerImage}>
                        <img src={e.img[0]} alt="" />
                        </div>

                        <div className={styles.ContainerInformation}>
                        <h1 >{e.name}</h1>
                        <h2> <p>R$</p> {e.price}</h2>
                        </div>

                        
                    </a>
                    <a href=""></a>
                    <button onClick={teste} value={e._id}>Atualizar</button>
                    {/* </Link> */}
                    {/* <AddToCarShopp funcao={ShopCar} valor={e} /> */}
                </div>
                ))}
            </div>

    </div>
  )
}




export const getStaticProps: GetServerSideProps = async ()=>{
    const {data} = await api.get('/products')
    console.log(data.map(e => e.name))
  
    return {
      props:{
        data
      },
      revalidate: 60 * 60 * 8
    }
  }