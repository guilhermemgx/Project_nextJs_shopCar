import Link from 'next/link'
import style from './styles.module.scss';

function Menu() {
  return (
    <div className={style.MenuPrime}>

    <div className={style.TittleMenu}>
        <h1>Menu Administrativo</h1>
        <i>X</i>
    </div>

    <ul className={style.Opcoes}>
        
        <Link href="/admin"><a href=""><li>Home</li></a></Link>

        <Link href="/cadastro_product"><a href=""><li>Cadastrar item</li></a></Link>

        <Link href="/update"><a href=""><li>Atualizar item</li></a></Link>

    </ul>

</div>
  );
};

export default Menu;
