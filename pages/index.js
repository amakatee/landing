import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/Banner'
import KeyFeature from '../components/keyfeature/KeyFeature'
import { useMutation } from '@tanstack/react-query'

import Layout from '../components/Layout'
import WorkFlow from '../components/workflow/WorkFlow'
import Pricing from '../components/pricing/Pricing'
import Contact from '../components/contact/Contact'
import { 
  getBannerData,
  getNavbarData, 
  getWorkflowData,
  getFeaturesData,
  getPricingData,
  getContactData,
  getUserFormData,
  postUserFormData,
  updatedUserData



} from '../fetchData/fetchingData'
import { QueryClient } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/navbar/Navbar'


// export const getBannerData = async () => {
//   const res = await axios.get('http://localhost:3000/api/banner')
//   console.log(res.data[0])
//   return res.data[0]

// }
export async  function getServerSideProps() {
  const queryClient = new QueryClient()
  const navbarData = await getNavbarData()
  const bannerData = await getBannerData()
  const workflowData = await getWorkflowData()
  const featuresData = await getFeaturesData()
  const pricingData = await getPricingData()
  const contactData = await getContactData()
  const userFormData = await getUserFormData()
//  const updateUserFormData = await postUserFormData()
  //const updateFormArray = await updatedUserData()
 
  return {
    props: { 
      bannerData, 
      navbarData, 
      workflowData, 
      featuresData,
      pricingData,
      contactData,
      userFormData,
      // updateUserFormData,
     // updateFormArray 
      
      // postUser,
      // userData
    }
  }
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
    }]
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
  const {data:pricingData} = useQuery({
    queryKey:['pricing'],
    queryFn: getPricingData,
    initialData:props.pricingData

  })

  const {data:contactData} = useQuery({
    queryKey:['contact'],
    queryFn: getContactData,
    initialData:props.contactData

  })

  const {data:userFormData} = useQuery({
    queryKey:['userFormData'],
    queryFn: getUserFormData,
    initialData:props.userFormData

  })
   console.log(userFormData)

   
  const queryClient = new QueryClient()
  // const {mutate:postFormData} = useMutation(postUserFormData, {
  //   onSuccess: (data) => {
  //     console.log("sucss")
  //     queryClient.setQueriesData(['userFormData', userFormData.id], data)
  //   }
  // })

  const {mutate:updateForm} = useMutation(updatedUserData, {
    onSuccess: (data) => {
      queryClient.setQueriesData(['userFormData', userFormData.id], data)
    }
  })
  
  const {mutate: updateUserData} = useMutation(postUserFormData, {
    onSuccess: (data) => {
      console.log(data)
    }
  })
 
 

 

  
   
  return (
    <Layout  >
      {/* <Navbar logo={NavbarData?.logo} list={NavbarData?.list} btnText={NavbarData?.btnText}/> */}
      <Banner img={BannerData?.img} firstText={BannerData?.firstText} secondText={BannerData?.secondText} formText={BannerData?.formText} btnText={BannerData?.btnText} />
      <WorkFlow headerText={WorkFlowData?.headerText} boxes={WorkFlowData?.boxes}/>
      {/* <KeyFeature headerText={FeaturesData?.headerText}  boxes={FeaturesData?.boxes}/> */}
      <Pricing boxes={pricingData?.boxes} headerText={pricingData?.headerText}/>
      <Contact headerText={contactData?.headerText} formData={contactData?.formData}  userFormData={userFormData} updateForm={updateForm} updateUserData={updateUserData} />
    </Layout>
  )
}
