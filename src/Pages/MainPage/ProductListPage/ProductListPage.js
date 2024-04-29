import './productList.css'
import {useLocation, useNavigate} from "react-router-dom";
import {Card, Descriptions, Message} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import axios from "axios";
import PubSub from 'pubsub-js'

const ProductListPage=()=>{
    const categoryId=useLocation().state
    const navigate=useNavigate()
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8091/catalog/products/${categoryId}`).then(
            res=>{
                setData(res.data.data.productList)
                setLoading(false)
            },
            error=>{
                Message.error('获取信息失败!')
                setLoading(false)
            }
        )
    },[])

    PubSub.unsubscribe('refresh')
    PubSub.subscribe('refresh',(_,value)=>{
        setData([])
        setLoading(true)
        axios.get(`http://127.0.0.1:8091/catalog/products/${value}`).then(
            res=>{
                setData(res.data.data.productList)
                setLoading(false)
            },
            error=>{
                Message.error('获取信息失败!')
                setLoading(false)
            }
        )
    })

    function ProductList(){
        return <>
            {
               data.length===0?
                   null
                   :
                   data.map(value => {
                       const column=[
                           {
                               label:'种类',
                               value:value.categoryId
                           },
                           {
                               label:'名字',
                               value:value.name
                           },
                           {
                               label:'宠物ID',
                               value:value.productId
                           }
                       ]
                       return <div onClick={()=>{navigate('/main/product/item',{state:value.productId})}} className={'card'} style={{cursor:'pointer',width:'31%',border:'1px solid lightgrey',borderRadius:5,margin:'1.1%'}}>
                           <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                               <img alt={value.name} src={value.descriptionImage} style={{marginTop:'5%'}}/>
                               <div style={{height:'100%',width:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                   <Descriptions
                                       column={1}
                                       data={column}
                                       labelStyle={{fontSize:17}}
                                       valueStyle={{fontSize:17,paddingLeft:20}}
                                       style={{marginTop:'5%'}}
                                   />
                               </div>
                           </div>
                           <div style={{width:'100%',height:'30%'}}>
                               <div style={{margin:'2.5% 3% 1% 3%',fontSize:16}}>
                                   {value.descriptionText}
                               </div>
                           </div>
                       </div>
                   })
            }
        </>
    }

    return <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        {
            loading?
                <Card style={{width:'10%',height:'100%'}} loading={loading} bordered={false}/>
                :
                <>
                    {
                        data.length===0?
                            <div style={{fontSize:30,fontWeight:'bold',textAlign:'center',width:'85%',height:'80%',backgroundColor:"white",borderRadius:20,padding:'2%'}}>
                                很抱歉，未找到您所搜索的商品！
                            </div>
                            :
                            <div style={{width:'85%',backgroundColor:"white",borderRadius:20,overflow:'auto',padding:'2%',display:'flex',flexWrap:'wrap',justifyContent:'flex-start',marginTop:70,marginBottom:70}}>
                                <ProductList />
                            </div>
                    }
                </>
        }
    </div>
}

export default ProductListPage