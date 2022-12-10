
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
import { QueryClient , useQueryClient } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/navbar/Navbar'


export async  function getStaticProps() {

  const navbarData = await getNavbarData()
  const bannerData = await getBannerData()
  const workflowData = await getWorkflowData()
  const featuresData = await getFeaturesData()
  const pricingData = await getPricingData()
  const contactData = await getContactData()
  const userFormData = await getUserFormData()

  return {
    props: { 
      bannerData, 
      navbarData, 
      workflowData, 
      featuresData,
      pricingData,
      contactData,
      userFormData,
      
    }
  }
}









export default function Home(props) {

  // const {data:NavbarData} = useQuery({
  //   queryKey:['navbar'],
  //   queryFn: getNavbarData,
  //   initialData:props.navbarData

  // })
  console.log(props)
  const queryClient = new QueryClient();
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
  //  console.log(userFormData)

   
 

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
      <Contact headerText={contactData?.headerText} formData={contactData?.formData}  userFormData={userFormData ? userFormData : null} updateForm={updateForm ? updateForm :null} updateUserData={updateUserData ? updateUserData : null} /> 
    </Layout>
  )
}
