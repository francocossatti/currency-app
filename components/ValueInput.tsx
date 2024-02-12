'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { Box, Container, Icon, Typography } from '@mui/material';
import { useInputValue } from '@/context/InputContext';


type ExchangeRateData = {
  timestamp: number;
};

export default function CustomizedInputBase({ data }: { data: ExchangeRateData}) {
  const { setInputValue } = useInputValue();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  // Función para formatear el timestamp a hora y día local
  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Multiplicamos por 1000 para convertir a milisegundos
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontSize: '5vh'}}>Write an amount</Typography>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            width: '40vh'
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1, 'input': { textAlign: 'center' } }} onChange={handleChange}/>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Icon sx={{ marginTop: 0.6, display: 'flex', alignItems: 'center' }}>
            <img src='./uy_flag.png' width={22} height={22} style={{ objectFit: 'cover' }} />
          </Icon>
        </Paper>
        {/* Utiliza la función para formatear el timestamp */}
        <Typography sx={{ fontSize: '2vh'}}>Last update: {formatTimestamp(data.timestamp)}</Typography>
      </Box>
    </Container>
  );
}
