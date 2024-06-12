// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'


// ** Custom Components Imports


const ImgStyled = styled('img')(({ theme }) => ({
    width: "2.5cm",
    height: "2.6cm",
    marginTop: "23px",
    marginLeft: "15px",

    borderRadius: theme.shape.borderRadius
}))

const IdCard = styled('div')(() => ({
    width: "9.3cm",
    height: "5.7cm",
}))

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useEffect, useState } from 'react'

import html2canvas from 'html2canvas';
import axios from 'axios'
import { useRouter } from 'next/router'

// ** Demo Components Imports

const UserRequests = () => {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (id) {
            axios.get(`/api/userid/${id}`)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [id]);

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
                <Grid item xs={12} md={12} lg={6} padding={10} >
                    <div id='cardContainer'>
                        <IdCard style={{ backgroundImage: "url('/images/cards/card.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'red', padding: "2px" }}>
                            <Grid item xs={12} alignItems={'end'} justifyItems={'end'} textAlign={'center'} paddingRight={10}>
                                <Grid className='flex items-end justify-end'>
                                    <ImgStyled className='' src={imgSrc} alt='Profile Pic' />
                                </Grid>
                                <Grid  marginLeft={55} marginTop={1}>
                                    <Typography variant='h6' style={{ fontWeight: 'bold', color: "black", fontSize: '10px' }}>
                                        {data?.name}
                                    </Typography>
                                    <Typography variant='h6' style={{ fontWeight: 'bold', color: "black", fontSize: '10px' }}>
                                        {data?.whatsapp}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={3}>
                                <Grid item xs={6} paddingLeft={10} paddingTop={6}>
                                    <Grid container direction="column" paddingLeft={10} paddingTop={4.5}>
                                        <Typography fontSize={20} style={{ color: "white", fontSize: '8px' }}>
                                            M.NO.AUH.701
                                        </Typography>
                                        <Typography fontSize={14} style={{ color: "white", fontSize: '8px' }}>
                                            Issue. 30/04/2023
                                        </Typography>
                                        <Typography fontSize={14} style={{ color: "white", fontSize: '8px' }}>
                                            Expiry 30/04/2025
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid xs={6}>
                                    <Grid container direction="column" paddingLeft={8} paddingTop={9}>
                                        <Typography fontSize={17} style={{ color: "white", fontSize: '8px' }}>
                                            MANDALAM - GURUVAYOOR
                                        </Typography>

                                        <Typography fontSize={17} style={{ color: "white", fontSize: '8px' }}>
                                            DISTRICT - {data?.address?.district}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </IdCard>

                    </div>
                    <Button variant='contained' style={{ margin: "15px" }} onClick={saveAsImage}>Save as Image</Button>

                </Grid>
                {/* <ResponsiveCard/> */}
            </Grid>
        </ApexChartWrapper>

    )
}

export default UserRequests
