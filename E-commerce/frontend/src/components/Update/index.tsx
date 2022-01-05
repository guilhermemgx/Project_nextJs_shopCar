import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/update.module.scss'

const api = axios.create({
  baseURL: "http://localhost:3333"
})

export default function Update() {

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