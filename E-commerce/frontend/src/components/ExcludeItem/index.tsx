import { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';


import styles from './styles.module.scss';

function ExcludeItem({funcao, valor}) {
  return (
    <button className={styles.ContainerButton} onClick={() => funcao(valor)} >
      <h1>Excluir</h1>
      {/* <CloseIcon /> */}
    </button>
  );
};

export default ExcludeItem;
