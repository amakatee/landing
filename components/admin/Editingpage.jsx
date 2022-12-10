import React, { useEffect, useState } from 'react'
import {GrClose} from 'react-icons/gr'
import { updateNavbarData } from '../../fetchData/fetchingData'
import FormHeader from './FormHeader'
import NavbarForm from './NavbarForm'


const Editingpage = ({
    setShow,
    navbarData,
    updateNavbar, 
    bannerData,
    updateBanner,
    workflowData,
    updateWorkflow,
    featuresData,
    updateFeatures,
    pricingData,
    updatePricing,
    contactData,
    updateContact


    }) => {

    const [ updatdetNavData, setUpdatedNavData] = useState(navbarData)
    const [ updatedBannerData, setUpdatedBannerData] = useState(bannerData)
    const [ updatedWorkflowData, setUpdateWorkflowData] = useState(workflowData)
    const [updatedFeaturesData, setUpdatedFeaturesData] = useState(featuresData)
    const [updatedPricingData, setUpdatedPricingData] = useState(pricingData)
    const [updatedContactData, setUpdatedContactData] = useState(contactData)
    
   
 
   
    // const [list, setList] = useState(updatdetNavData.list)
    const [workflowBoxes, setWorkflowBoxes] = useState(updatedWorkflowData.boxes)
    const [featuresBoxes, setFeaturesBoxes] = useState(updatedFeaturesData.boxes)
    const [pricingBoxes, setPricingBoxes] = useState(updatedPricingData.boxes)
    const [contactBoxes, setContactBoxes] = useState(updatedContactData.formData)


    // const [navbarShow, setNavbarShow ] = useState(false)
    const [bannerShow, setBannerShow ] = useState(false)
    const [workflowShow, setWorkflowShow ] = useState(false)
    const [featuresShow, setFeaturesShow] = useState(false)
    const [pricingShow, setPricingShow] = useState(false)
    const [contactShow, setContactShow] = useState(false)

   //helpers
    const addInputField = (el, elSetter,  updatedArr, updatedArrSetter) => {
        if(updatedArr?.list) {
            const arr =[...el, ""]
            elSetter(arr)
            return
        }
        const arr =  [...el, {}]
        elSetter(arr)
        updatedArrSetter(prev => ({...prev,  boxes:arr}))
    }
    
   const removeInput = (index, el, elSetter, updatedArr, updatedArrSetter) => {
        if(updatedArr?.list) {
           const arr = [...el]
           arr.splice(index, 1)
           elSetter(arr)
           updatedArrSetter(prev => ({...prev,  list:arr}))
           console.log( updatedArr)
           return

        }
        const list = [...el]
        list.splice(index, 1)
        elSetter(list)
        updatedArrSetter(prev => ({...prev,  boxes:list}))
        console.log( featuresBoxes ,updatedArr)
    }

    const handleArrayData = (e, index, el, elSetter) => {
        const {name, value} = e.target
        if(!index) {
            const list = {...el}
            list[name]=value
            console.log(list)
            elSetter(list)
            return
        }
        const list = [...el]
        if(!name ) {
            list[index] = value
            elSetter(list)
            console.log(list)
            return
        }
        list[index][name]=value
        console.log(list, value)
        elSetter(list)
    }

    const handleArrayText =(e, index, el ,elSetter, updatedArr, setUpdatedArr) => {
        const {name, value} = e.target
        const list = [...el]
        if(!name ) {
            list[index] = value
            elSetter(list)
            setUpdatedArr(prev => ({...prev, list}))
            console.log(updatedArr)
            console.log(list)
            return
        }
        list[index][name] = value
        console.log(list)
        elSetter(list)


    }



    //mutating sections
    const mutateData = (e, mutateFunc, updatedData) => {
        e.preventDefault()
        console.log(updatedData)
        mutateFunc(updatedData)
   }

    

  return (
      <section className='editingPage'>
         
            <nav className='click' onClick={() => setShow(false)}><GrClose /></nav>
            <main className='edditing-data'>
          
               {/* //NAVBAR */}
                {/* <form className='edit-navbar edit-section' onSubmit={e => mutateData(e, updateNavbar, updatdetNavData)}>
                     <FormHeader text="navb" show={navbarShow} setShow={setNavbarShow} />
                     {navbarShow &&
                     <>
                     <label className='label-div'><p>Logo:</p>
                    <input
                    className='input-styles'
                    name='logo'
                    type='text'
                    value={updatdetNavData.logo}
                    onChange={(e) => handleArrayData(e, null, updatdetNavData, setUpdatedNavData)}
                     />
                    </label>
                    <label className='label-div'><p>Button Text:</p>
                    <input
                    className='input-styles'
                    name='btnText'
                    type='text'
                    value={updatdetNavData.btnText}
                    onChange={(e) => handleArrayData(e, null, updatdetNavData, setUpdatedNavData)}
                     />
                    </label>
                    <button className='form-btns'
                        onClick={() => addInputField(list, setList, updatdetNavData, setUpdatedNavData)}>add</button>
                     {list?.map((item, index) => {
                         return (
                            <div className='boxes-styles' key={index}>
                                <label className='label-div'><p>List Item:</p>
                                <input
                                className='input-styles'
                                value={item}
                                type="text"
                                onChange={e => handleArrayText(e, index,list, setList, updatdetNavData, setUpdatedNavData )}
                            />
                                </label>
                           
                        <button className='form-btns' onClick={() => removeInput(index ,list, setList, updatdetNavData, setUpdatedNavData)}>delete</button>
                        </div>
                        )
                     })}
                     <button className='form-btns' type="submit">save navbar</button>
                     </>
                     }
                    
                </form> */}

                {/* BUNNER */}
                <form className=' edit-section' onClick={e => mutateData(e, updateBanner, updatedBannerData)}>
                    <FormHeader text="Первая секция(баннер):" show={bannerShow} setShow={setBannerShow} />

                    {bannerShow && 
                    <>
                    <label ><p>Первый текст(большой):</p>
                    <textarea
                    className='input-styles'
                    name='firstText'
                    type='text'
                    onChange={(e) => handleArrayData(e, null, updatedBannerData, setUpdatedBannerData)}
                    value={updatedBannerData.firstText}
                    />
                    </label>
                    <label><p>Второй текст:</p>
                    <textarea
                    className='input-styles'
                    name='secondText'
                    type='text'
                    onChange={(e) => handleArrayData(e, null, updatedBannerData, setUpdatedBannerData)}
                    value={updatedBannerData.secondText}/>
                    </label>
                    <label><p>Текст на кнопке:</p>
                     <input
                     className='input-styles'
                    name='btnText'
                    type='text'
                    onChange={(e) => handleArrayData(e, null, updatedBannerData, setUpdatedBannerData)}
                    value={updatedBannerData.btnText}

                     />
                      </label>
                     <button className='form-btns' type='submit'>Save </button>
                    </>
                    }
                </form>

                {/* WORKFLOW */}
                <form className='edit-workflow edit-section' onClick={(e) =>mutateData(e, updateWorkflow, updatedWorkflowData)}>
                <FormHeader text="Вторая секция(Рабочее пространство):" show={workflowShow} setShow={setWorkflowShow} />
                  {workflowShow && 
                  <>
                   <label><p> Заголовок:</p>
                   <input 
                    className='input-styles'
                    name='headerText'
                    type='text'
                    value={updatedWorkflowData.headerText}
                    onChange={(e) => handleArrayData(e, null, updatedWorkflowData, setUpdateWorkflowData)}
                    />
                   </label>
                   

                    <button className='form-btns' onClick={() => addInputField(workflowBoxes, setWorkflowBoxes,updatedWorkflowData, setUpdateWorkflowData)}>Добавить контейнер</button>
                    {workflowBoxes?.map((box, index) => {
                 
                        return (
                            <div className='box-label' key={index}>
                                <label> <p>Заголовок Контейнера:</p>
                                    <input 
                                    className='input-styles'
                                    name='headerText'
                                    type='text'
                                    value={box.headerText}
                                    onChange={e => handleArrayText(e, index, workflowBoxes, setWorkflowBoxes)}
                                    />

                                </label>
                                <label><p>Основной текст контейнера:</p>
                                <textarea 
                                className='input-styles'
                                name='text'
                                type="text"
                                value={box.text}
                                onChange={e => handleArrayText(e, index,workflowBoxes, setWorkflowBoxes )}
                                />
                                </label>
                                
                                <button className='form-btns' onClick={() => removeInput(index, workflowBoxes, setWorkflowBoxes, updatedWorkflowData, setUpdateWorkflowData)}
                                >Удалить контейнер</button>
                        </div>
                        )
                    })}
                    <button className='form-btns' type='submit'>Сохранить изменения в сеции 2</button>
                  </>
                  }
                </form>


                {/* FEATURES */}
                {/* <form className='edit-features edit-section' onClick={e => mutateData(e, updateFeatures, updatedFeaturesData)}>
                   <FormHeader text="features" show={featuresShow} setShow={setFeaturesShow} />

                    {featuresShow && 
                    <>
                    <label><p>header Text :</p>
                    <input 
                    className='input-styles'
                    name='headerText'
                    type='text'
                    value={updatedFeaturesData.headerText}
                    onChange={e => handleArrayData(e, null, updatedFeaturesData, setUpdatedFeaturesData)}                    
                    />
                    </label>
                    <button className='form-btns' onClick={() => addInputField(featuresBoxes, setFeaturesBoxes, updatedFeaturesData, setUpdatedFeaturesData)}>Add new Feature</button>
                    {featuresBoxes.map((box, index) => {
                        return (
                            <div  key={index} className='boxes-cont'>
                      
                               <label><p>header Text</p>
                               <input
                                className='input-styles'
                                name='headerText'
                                type='text'
                                value={box.headerText}
                                onChange={e => handleArrayText(e, index, featuresBoxes, setFeaturesBoxes)}

                                 />

                               </label>
                                
                                 <label><p>text:</p>
                                 <textarea
                                 className='input-styles'
                                 name='text'
                                 type='text'
                                 value={box.text}
                                 onChange={(e) => handleArrayText(e, index, featuresBoxes, setFeaturesBoxes)}
                                  />

                                 </label>
                                   <button className='form-btns' onClick={() => removeInput(index, featuresBoxes, setFeaturesBoxes, updatedFeaturesData, setUpdatedFeaturesData)}
                                >delete</button>
                            </div>
                           
                        )
                    })}
                    <button className='form-btns' type="submit">Save Features</button>
                    </>
                    }
                </form> */}

                {/* PRICING */}
                <form className='edit-pricing edit-section' onSubmit={(e) => mutateData(e, updatePricing, updatedPricingData)}>
                   <FormHeader text="Третья сейкция:" show={pricingShow} setShow={setPricingShow} />
                   {pricingShow && 
                   <>
                    <label><p>Заголовок:</p>
                    <input
                    className='input-styles'
                    name='headerText'
                    type='text'
                    value={updatedPricingData.headerText}
                    onChange={e => handleArrayData(e, null, updatedPricingData, setUpdatedPricingData)} 
                     />
                    </label>
                     <button className='form-btns' onClick={() => addInputField(pricingBoxes, setPricingBoxes, updatedPricingData, setUpdatedPricingData)}>Добавить контейнер</button>
                     {pricingBoxes.map((box, index) => (
                   
                         <div  className='boxes-cont box-label'>
                             <label> <p>Первый текст:</p>
                             <textarea
                             className='input-styles'
                             name='firstText'
                             type='text'
                             value={box.firstText}
                             onChange={(e) => handleArrayText(e, index ,pricingBoxes, setPricingBoxes )}
                              />
                              </label>
                              <label> <p>Второй текст:</p>
                             <textarea
                             className='input-styles'
                             name='secondText'
                             type='text'
                             value={box.secondText}
                             onChange={(e) => handleArrayText(e, index ,pricingBoxes, setPricingBoxes )}
                              />
                              </label>
                              <label> <p>Третий текст:</p>
                             <textarea
                             className='input-styles'
                             name='thirdText'
                             type='text'
                             value={box.thirdText}
                             onChange={(e) => handleArrayText(e, index ,pricingBoxes, setPricingBoxes )}
                              />
                              </label>
                              <label> <p>Четвертый текст:</p> 
                             <textarea
                             className='input-styles'
                             name='fourthText'
                             type='text'
                             value={box.fourthText}
                             onChange={(e) => handleArrayText(e, index ,pricingBoxes, setPricingBoxes )}
                              />
                              </label>
                              <button className='form-btns' onClick={() => removeInput(index,pricingBoxes, setPricingBoxes, updatedPricingData, setUpdatedPricingData)}>Удалить контейнер</button>
                         </div>
                     ))}

                    <button className='form-btns' type='submit'>Сохранить изменения в 3 сеции</button>
                   </>
                   }

                </form>

                {/* CONTACT */}
                <form  className='edit-contact edit-section' onSubmit={(e) => mutateData(e, updateContact, updatedContactData)}>
                <FormHeader text="Четвертая секция(Форма Связи):" show={contactShow} setShow={setContactShow} />
                {contactShow && 
                <>

                   <label> <p>Заголовок:</p>
                    <input 
                    name='headerText'
                    className='input-styles'
                    type='text'
                    value={updatedContactData.headerText}
                    onChange={e => handleArrayData(e, null, updatedContactData, setUpdatedContactData)} 

                     />
                    </label>
                    {contactBoxes.map((box, index) => (
                        <div className='boxes-cont' key={index} >
                            <label> <p>Первый текст(Имя): </p>
                            <input
                            className='input-styles'
                            name='firstInput'
                            type='text'
                            value={box.firstInput}
                            onChange={(e) => handleArrayText(e, index ,contactBoxes, setContactBoxes )}

                             />
                        </label>
                        <label> <p>Второй текст(мэйл/телефон):</p>
                            <input
                            className='input-styles'
                            name='secondInput'
                            type='text'
                            value={box.secondInput}
                            onChange={(e) => handleArrayText(e, index ,contactBoxes, setContactBoxes )}

                             />
                        </label>
                        <label> <p>Четвертый текст(сообщение):</p>
                            <input
                            name='thirdInput'
                            className='input-styles'
                            type='text'
                            value={box.thirdInput}
                            onChange={(e) => handleArrayText(e, index ,contactBoxes, setContactBoxes )}

                             />
                        </label>
                        <label> <p>Пользовательское соглашение:</p>
                            <input
                            name='credentialsInput'
                            className='input-styles'
                            type='text'
                            value={box.credentialsInput}
                            onChange={(e) => handleArrayText(e, index ,contactBoxes, setContactBoxes )}

                             />
                        </label>
                        <label><p>Текст кнопки:</p>
                            <input
                            className='input-styles'
                            name='btnText'
                            type='text'
                            value={box.btnText}
                            onChange={(e) => handleArrayText(e, index ,contactBoxes, setContactBoxes )}

                             />
                        </label>
                        </div>
                    ))}

                    <button className='form-btns'  type='submit'>Сохранить форму обратной связи</button>
                </>
                }
                    

                </form>
            </main>


      </section>
  )
}

export default Editingpage