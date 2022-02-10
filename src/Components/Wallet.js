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


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const Wallet = ({ filteredWallet, parent, setParent, setShowLink }) => {

    const increaseHandle = (wallet) => {
        setParent(parent.map((el) => (el.id === wallet.id && wallet.coinvolume > 0) ? { ...el, coinvolume: wallet.coinvolume + 1 } : el))
    }

    const decreaseHandle = (wallet) => {
        setParent(parent.map((el) => (el.id === wallet.id && wallet.coinvolume > 1) ? { ...el, coinvolume: wallet.coinvolume - 1 } : el))
    }

    const deleteHandle = (wallet) => {
        toast.success("Coin deleted successfully", {
            position: "top-center",
            autoClose: 2000
        })
        setParent(parent.filter((el) => el.id !== wallet.id))
    }

    return (

        <>
         <Card className="wallet-container " sx={{ minWidth: 275 }}>
             <div className='d-flex'>  
                    <Button className="flex-1 btn-common buy-btn">Buy</Button>
                    <Button className="flex-1 sell-btn btn-common">Sell</Button>
             </div>
      
         </Card>
            

            <ToastContainer />
        </>
    )
}

export default Wallet
