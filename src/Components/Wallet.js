import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CoinBuy from './Coinbuy'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const Wallet = ({ filteredWallet, parent, setParent, setShowLink }) => {

   
    return (

        <>
         <Card className="wallet-container " sx={{ minWidth: 275 }}>
             <div className='d-flex'>  
                    <Button className="flex-1 btn-common buy-btn">Buy</Button>
                    <Button className="flex-1 sell-btn btn-common">Sell</Button>
             </div>
             <div className='d-flex'>
                    <CoinBuy filteredWallet={filteredWallet} parent={parent}/>

             </div>
      
         </Card>
            

            <ToastContainer />
        </>
    )
}

export default Wallet
