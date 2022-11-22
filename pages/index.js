import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/Banner'
import KeyFeature from '../components/keyfeature/KeyFeature'

import Layout from '../components/Layout'
import WorkFlow from '../components/workflow/WorkFlow'
import Pricing from '../components/pricing/Pricing'
import Contact from '../components/contact/Contact'

const BannerData = {
  img:'plane.jpeg',
  firstText:'Доставка из Китая от 1 кг. Быстро. Надёжно. Удобно',
  formText:"email",
  btnText:"submit"

}

const WorkFlowData = {
  headerText: "Work Flow",
  boxes: [
    {
      img: "some",
      text: 'Много лет организовываем доставку товаров и грузов при сотрудничестве больше, чем со 100 компаниями;'
    },
    {
      img: "some",
      text: 'перевозчиками, мы способны предложить клиентам оптимальные цены за доставку , которая не сравнима по стоимости с т'
    },
    {
      img: "some",
      text: 'перевозчиками, мы способны предложить клиентам оптимальные цены за доставку , которая не сравнима по стоимости с т'
    },
    
  ]
}

const FeaturesData = {
  headerText:"Features",
   boxes: [
     {
      img: "some",
      headerText:"Предоставим услуги по эк",
      text: "Предоставим услуги по экспедированию грузов по схеме «дверь» - «дверь», выполним необходимые операции в рамках перевозки и передадим товар под роспись грузополучателю в указанном пункте доставки;"
     },
     {
      img: "some",
      headerText:"Предоставим услуги по эк",
      text: "Пхеме «дверь» - «дверь», выполним необходимые операции в рамках перевозки и передадим товар под роспись грузополучателю в указанном пункте доставки;"
     },
     {
      img: "some",
      headerText:"Предоставим услуги по эк",
      text: "Предоставим услуги по экспедированию грузов по схеме «дверь» - «дверь», выполним необходимые операции в рамках перевозки и передадим товар под роспись грузополучателю в указанном пункте доставки;"
     }
   ]
}

const pricingData = {
  headerText: 'pricing',
  box: [
    {
      firstText: "hello", 
  secondText:'Доставка грузов из Китая',
  thirdText: 'Доставка грузов из Китая   ',
  fourthText: 'Автогрузоперевозки'
    },
    {
      firstText: "hello", 
  secondText:'Доставка грузов из Китая',
  thirdText: 'Доставка грузов из Китая   ',
  fourthText: 'Автогрузоперевозки'
    }

  ]
  
}

const contactData = {
  headerText: "form",
  formData: {
    firstInput: 'name',
    secondInput: 'email/phone',
    thirdInput: 'message',
    btnText: 'message'
  }
}

export default function Home() {
  return (
    <Layout>
      <Banner img={BannerData.img} firstText={BannerData.firstText} formText={BannerData.formText} btnText={BannerData.btnText} />
      <WorkFlow headerText={WorkFlowData.headerText} boxes={WorkFlowData.boxes}/>
      <KeyFeature headerText={FeaturesData.headerText}  boxes={FeaturesData.boxes}/>
      <Pricing boxes={pricingData.box} headerText={pricingData.headerText}/>
      <Contact headerText={contactData.headerText} formData={contactData.formData} />
    </Layout>
  )
}
