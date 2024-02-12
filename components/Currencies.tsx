'use client';
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useInputValue } from '@/context/InputContext';
import Image from "next/image";

type ExchangeRateData = {
  rates: {
    ARS: number;
    BRL: number;
    CLP: number;
    CNY: number;
    EUR: number;
    JPY: number;
    MXN: number;
    USD: number;
  };
};

const flagImageLinks: { [key: string]: string } = {
  ARS: "https://flagdownload.com/wp-content/uploads/Flag_of_Argentina_Flat_Round-256x256.png",
  USD: "https://cdn-icons-png.freepik.com/256/4628/4628635.png",
  BRL: "https://www.shareicon.net/data/256x256/2016/08/04/806847_flag_512x512.png",
  EUR: "https://cdn-icons-png.flaticon.com/256/323/323344.png",
  CLP: "https://cdn-icons-png.flaticon.com/256/197/197586.png",
  MXN: "https://www.circuloamigosdelafilatelia.org/wp-content/uploads/2021/03/mexico-flag-round-icon-256.png",
  JPY: "https://cdn-icons-png.flaticon.com/256/197/197604.png",
  CNY: "https://static-00.iconduck.com/assets.00/china-emoji-256x256-a8l97rrw.png",
};

export default function Currencies({ data }: { data: ExchangeRateData }) {
  const { inputValue } = useInputValue();

  return (
    <Container maxWidth={false}>
      <Grid container alignItems="center" sx={{ height: "75vh" }}>
        {Object.entries(data.rates).map(([currency, rate]) => (
          <Grid item xs={4} md={3} key={currency}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Image
                src={flagImageLinks[currency]}
                alt={`Flag ${currency}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '45%', height: 'auto' }} // optional
              />
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography sx={{ fontSize: "3vh" }}>
                  ${((parseFloat(inputValue) || 0) * rate).toFixed(2)}
                </Typography>
                <Typography sx={{ fontSize: "2vh" }}>
                  1UY - {rate.toFixed(2)}{currency}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
