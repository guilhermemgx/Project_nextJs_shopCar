import axios from 'axios'
import { useState } from 'react'
import Menu from '../components/Menu'


import styles from '../styles/registerProduct.module.scss'

const api = axios.create({
  baseURL: "http://localhost:3333"
})

type Valores = {
    value:String
}

export default function Home({value}:Valores) {

    const [name, setName] = useState("")
    const [Descricao, setDescricao] = useState("")
    const [img, setImg] = useState([""])
    const [Tamanho, setTamanho] = useState([""])
    const [price, setPrice] = useState()
    const [type, setType] = useState()

  async function Cadastro(){
      await api.post('/register_products')
  }

  return (
    <div className={styles.Formulario}>
          <Menu />

        <form>
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Nome" />
            <input type="text" placeholder="Descricao" />
            <input type="text" placeholder="imagem" />
            <input type="text" placeholder="Tamanho" />
            <input type="text" placeholder="price" />
            <select name="" id="">
                <option value="">Salto</option>
                <option value="">Sapatilha</option>
                <option value="">scarpan</option>
            </select>
        </form>
    </div>
  )
}
