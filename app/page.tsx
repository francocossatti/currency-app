import getCurrencies from "@/api/getCurrencies";
import Currencies from "@/components/Currencies";
import Footer from "@/components/Footer";
import ValueInput from "@/components/ValueInput";

async function getData(){
  const currencies = await getCurrencies()
  return currencies;
}

export default async function Home() {
  const currencies = await getData()

  return (
    <main >
      <ValueInput data={currencies} />
      <Currencies data={currencies}/>
      <Footer/>
    </main>
  );
}
