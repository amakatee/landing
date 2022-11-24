import React, { useState } from 'react'
import Link from 'next/link'
import { 
   getBannerData,
   updatetBannerData ,
   getNavbarData,
   updateNavbarData ,
   getWorkflowData,
   updatedWorkflowData,
   getFeaturesData,
   updatedFeaturesData
} from '../../fetchData/fetchingData'
import { QueryClient } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import Editingpage from '../../components/admin/Editingpage'
import { useMutation } from '@tanstack/react-query'

export async  function getStaticProps() {
  const bannerData = await getBannerData()
  const navbarData = await getNavbarData()
  const workflowData = await getWorkflowData()
  const featuresData = await getFeaturesData()
  return {
    props: { bannerData, navbarData, workflowData, featuresData}
  }
}

const index = (props) => {
  const [editingPage, setEditiongPage] = useState(false)
  const queryClient = new QueryClient()
  const [current, setCurrentPage] = useState('')

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
  const {data: WorkflowData} = useQuery({
    queryKey:['worflow'],
    queryFn: getWorkflowData,
    initialData:props.workflowData

  })

  const {data: FeaturesData} = useQuery({
    queryKey:['features'],
    queryFn: getFeaturesData,
    initialData:props.featuresData

  })

  
  const {mutate:updateBanner} = useMutation(updatetBannerData, {
    onSuccess: (data) => {
      queryClient.setQueriesData(['banner', BannerData.id], data)
    }
  })
  const {mutate:updateNavbar} = useMutation(updateNavbarData, {
    onSuccess: (data) => {
      queryClient.setQueriesData(['navbar', NavbarData.id], data)
    }
  })

  const {mutate:updateWorkflow} = useMutation(updatedWorkflowData, {
    onSuccess: (data) => {
      queryClient.setQueriesData(['workflow', WorkflowData.id], data)
    }
  })
  const {mutate:updateFeatures} = useMutation(updatedFeaturesData, {
    onSuccess: (data) => {
      queryClient.setQueriesData(['features', FeaturesData.id], data)
    }
  })

  return (
    <main className='admin-page'>
        <button className='logout-btn'>log out</button>
        <br />
        <div className='admin-boxes'>
          <Link href="/admin/applications">
          <div className='admin-box'>
                <h3>Application</h3>
                <p>see new emails</p>

            </div>
          </Link>
            
            <div  className='admin-box'>

             
             <p data-page="edit" onClick={() =>  setEditiongPage(prev => !prev)} >edit button</p> 
 
         
            </div>
            
            <div className='admin-box'>
               manage admin

            </div>
        </div>
      
      {editingPage && 
        <section className='admin-window'>
          {editingPage && <Editingpage 
            setEditiongPage={setEditiongPage}
            navbarData={NavbarData}
            updateNavbar={updateNavbar}
            updateBanner={updateBanner}
            bannerData={BannerData}
            workflowData={WorkflowData}
            updateWorkflow={updateWorkflow}
            featuresData={FeaturesData}
            updateFeatures={updateFeatures}
            
         

            />}
          

        </section>
       
        
      }
   
    </main>
  )
}

export default index