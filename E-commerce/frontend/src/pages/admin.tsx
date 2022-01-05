import React from 'react';
import Menu from '../components/Menu';

import style from '../styles/admin.module.scss';
import Update from './update';

function pages(){
  return (
      <div className={style.Container}>
          <Menu />
          <div className={style.ContainerWrapper}>coteu
          </div>
      </div>
  );
}

export default pages;