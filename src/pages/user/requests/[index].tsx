// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import  ButtonBase  from '@mui/material/Button'


// ** Custom Components Imports


const ImgStyled = styled('img')(({ theme }) => ({
  width: 180,
  height: 210,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))



// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useState } from 'react'

import html2canvas from 'html2canvas';

// ** Demo Components Imports

const UserRequests = () => {
  const [imgSrc] = useState<string>('/images/avatars/img1.jpg')


  const saveAsImage = () => {
    const element = document.getElementById('cardContainer');

    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'cardImage.png';
        link.href = imgData;
        link.click();
      });
    } else {
      console.error("Element with id 'cardContainer' not found.");
    }
  };

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h5'>
            <Link href='https://mui.com/components/tables/' target='_blank'>
              User Requests
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <div id='cardContainer'>
            <Card style={{ backgroundImage: "url('/images/cards/card.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'red', height: "30rem", padding: "2px" }}>
              <Grid item xs={12} alignItems={'end'} justifyItems={'end'} textAlign={'end'}>

                <ImgStyled className='' src={imgSrc} style={{ marginTop: 70, marginLeft: 450 }} alt='Profile Pic' />

                <Typography variant='h6' paddingRight={30} style={{ fontWeight: 'bold', color: "black" }}>
                  Harish

                </Typography>
                <Typography variant='h6' paddingRight={20} style={{ fontWeight: 'bold', color: "black" }}>
                  055 4369944
                </Typography>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={6} paddingLeft={10} paddingTop={6}>
                  <Grid container direction="column" paddingLeft={10} paddingTop={6}>
                    <Typography fontSize={20} style={{ color: "white" }}>
                      M.NO.AUH.701
                    </Typography>
                    <Typography fontSize={14} style={{ color: "white" }}>
                      Issue. 30/04/2023
                    </Typography>
                    <Typography fontSize={14} style={{ color: "white" }}>
                      Expiry 30/04/2025
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container direction="column" paddingLeft={8} paddingTop={12}>
                    <Typography fontSize={17} style={{ color: "white" }}>
                      MANDALAM - GURUVAYOOR
                    </Typography>

                    <Typography fontSize={17} style={{ color: "white" }}>
                      DISTRICT - THRISSUR
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

            </Card>

          </div>
          <ButtonBase onClick={saveAsImage}>Save as Image</ButtonBase>

        </Grid>
      </Grid>
    </ApexChartWrapper>

  )
}

export default UserRequests
