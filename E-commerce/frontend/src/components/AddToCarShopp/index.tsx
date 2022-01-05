import styles from './styles.module.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function AddToCarShopp({funcao, valor}) {
  return (
    <button className={styles.buttonSave} onClick={() => funcao(valor)}>
      <AddShoppingCartIcon />
    </button>
  );
};

export default AddToCarShopp;
