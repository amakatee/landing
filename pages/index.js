import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/Banner'
import KeyFeature from '../components/keyfeature/KeyFeature'

import Layout from '../components/Layout'
import WorkFlow from '../components/workflow/WorkFlow'
import Pricing from '../components/pricing/Pricing'
import Contact from '../components/contact/Contact'
import { getBannerData, getNavbarData , getWorkflowData, getFeaturesData} from '../fetchData/fetchingData'

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Navbar from '../components/navbar/Navbar'


// export const getBannerData = async () => {
//   const res = await axios.get('http://localhost:3000/api/banner')
//   console.log(res.data[0])
//   return res.data[0]

// }
export async  function getStaticProps() {
  const queryClient = new QueryClient()
  const navbarData = await getNavbarData()
  const bannerData = await getBannerData()
  const workflowData = await getWorkflowData()
  const featuresData = await getFeaturesData()

// await queryClient.prefetchQuery(['banner'], getBannerData)
  return {
    props: { bannerData, navbarData, workflowData, featuresData}
  }
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

export default function Home(props) {

  const {data:NavbarData} = useQuery({
    queryKey:['navbar'],
    queryFn: getNavbarData,
    initialData:props.navbarData

  })
 
  const {data:BannerData} = useQuery({
    queryKey:['banner'],
    queryFn: getBannerData,
    initialData:props.bannerData

  })
  const {data:WorkFlowData} = useQuery({
    queryKey:['workflow'],
    queryFn: getWorkflowData,
    initialData:props.workflowData

  })
  const {data:FeaturesData} = useQuery({
    queryKey:['features'],
    queryFn: getFeaturesData,
    initialData:props.featuresData

  })
   console.log(FeaturesData)

 

  
   
  return (
    <Layout  >
      <Navbar logo={NavbarData?.logo} list={NavbarData?.list} btnText={NavbarData?.btnText}/>
      <Banner img={BannerData?.img} firstText={BannerData?.firstText} formText={BannerData?.formText} btnText={BannerData?.btnText} />
      <WorkFlow headerText={WorkFlowData?.headerText} boxes={WorkFlowData?.boxes}/>
      <KeyFeature headerText={FeaturesData?.headerText}  boxes={FeaturesData?.boxes}/>
      <Pricing boxes={pricingData.box} headerText={pricingData.headerText}/>
      <Contact headerText={contactData.headerText} formData={contactData.formData} />
    </Layout>
  )
}
