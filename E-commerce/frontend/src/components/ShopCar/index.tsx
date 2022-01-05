import { ReactNode, useEffect, useState } from 'react';

import styles from './styles.module.scss';
import Link from 'next/link'
import { useShopCar } from '../../context/carrinho';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function CarShop() {
  const { Item } = useShopCar()

  useEffect(()=>{
    setLeng(Item.length)
  }, [Item])

  const [leng, setLeng] = useState(Number)

  return (
    <div className={styles.sacolaDeCompra}>
    <Link href="/Carrinho">
      <a href="">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={leng} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </a>
    </Link>
  </div>
  );
};

export default CarShop;
