
import {Button, Card, Descriptions, Message} from "@arco-design/web-react";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const ItemInformationPage=()=>{
    const [number,setNumber]=useState(1)
    const [loading,setLoading]=useState(true)
    const itemId=useLocation().state
    const [data,setData]=useState({})

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8091/catalog/item/${itemId}`).then(
            res=>{
                if(res.data.msg==='success')
                    setData(res.data.data)
                setLoading(false)
            },
            err=>{
                Message.error('请求数据失败！')
                setLoading(false)
            }
        )
    },[])

    function getStatus(){
        if(data.status==='P') return '在售'
        else if(data.status==='S') return '停售'
        else return null
    }

    const column=[
        {
            label:'itemId',
            value:data.itemId
        },
        {
            label:'productId',
            value:data.productId
        },
        {
            label:'productName',
            value:data.productName
        },
        {
            label:'descriptionText',
            value:data.descriptionText
        },
        {
            label:'status',
            value:getStatus()
        },
        {
            label:'listPrice',
            value:data.listPrice+'元/只'
        },
        {
            label:'attributes',
            value:data.attributes
        },
        {
            label:'quantity',
            value:data.quantity
        },
    ]

    return <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <>
            {
                loading?
                    <Card style={{width:'100%',height:'100%'}} loading={loading} bordered={false}/>
                    :
                    <>
                        <div style={{width:'70%',backgroundColor:'white',borderRadius:10,marginTop:70,marginBottom:70}}>
                            <div style={{display:'flex',justifyContent:'space-between',width:'90%',marginLeft:'5%',marginTop:'2.5%',height:'95%'}}>
                                <div style={{width:'50%',height:'100%',marginLeft:'10%'}}>
                                    <img alt={data.name} src={data.descriptionImage} style={{width:'50%'}}/>
                                    <div  style={{fontSize:20,marginTop:'10%'}}>
                                        数量：{number} 只
                                    </div>
                                    <div style={{fontSize:20,marginTop:5}}>
                                        价格：{number*data.listPrice} 元
                                    </div>
                                    <div style={{marginTop:10}}>
                                        <Button
                                            onClick={()=>{
                                                axios.post(`http://127.0.0.1:8091/cart/cartItem/${itemId}`,{},{
                                                    headers:{
                                                        token:sessionStorage.getItem('token')
                                                    }
                                                }).then(
                                                    res=>{
                                                        if(res.data.msg==='success'){
                                                            Message.info('添加到购物车成功！')
                                                        }
                                                    },
                                                    err=>{
                                                        Message.error('添加失败，请稍后重试！')
                                                    }
                                                )
                                            }}
                                            type={"primary"}
                                            style={{marginRight:30}}
                                        >
                                            添加至购物车
                                        </Button>
                                        <Button onClick={()=>{
                                            window.history.go(-1)
                                        }}>
                                            返回
                                        </Button>
                                    </div>
                                </div>
                                <div style={{width:'50%',height:'100%'}}>
                                    <div style={{fontSize:25,fontWeight:'bold'}}>商品信息</div>
                                    <div style={{width:'90%',height:'100%'}}>
                                        <Descriptions
                                            column={1}
                                            data={column}
                                            labelStyle={{ paddingRight: 36 ,fontSize:20}}
                                            valueStyle={{fontSize:20}}
                                            style={{marginTop:10}}
                                            size={'large'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    </div>
}

export default ItemInformationPage