import axios from 'axios'
const BASE_URL='http://localhost:3000/api'

export default axios.create({
   
})
const axiosBase = axios.create({
    baseURL:'http://localhost:3000/api'
  });
//navbar
export const getNavbarData = async () => {
    const res = await axiosBase.get(`/navbar`)
    console.log(res.data[0])
    return res.data[0]
  
  }

  export const updateNavbarData = async (data) => {
    const res = await axiosBase.patch(`/navbar`,data)
    console.log(res.data[0])
    return res.data[0]
  
  }  

//banner  
export const getBannerData = async () => {
    const res = await axiosBase.get(`/banner`)
    console.log(res.data[0])
    return res.data[0]
  
  }
export const updatetBannerData = async (data) => {
    const res = await axiosBase.patch(`/banner`, data)
    console.log(res.data[0])
    return res.data[0]
  
  }
//workflow  
export const getWorkflowData = async () => {
    const res = await axiosBase.get(`/workflow`)
    console.log(res.data[0])
    return res.data[0]
  
  }

  export const updatedWorkflowData = async (data) => {
    const res = await axiosBase.patch(`/workflow`, data)
    console.log(res.data[0])
    return res.data[0]
  
  }

//features
export const getFeaturesData = async () => {
  const res = await axiosBase.get(`/features`)
  console.log(res.data[0])
  return res.data[0]

}
export const updatedFeaturesData = async (data) => {
  const res = await axiosBase.patch(`/features`, data)
  console.log(data)
  console.log(res.data[0])
  return res.data[0]

}
