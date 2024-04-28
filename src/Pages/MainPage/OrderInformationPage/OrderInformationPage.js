import {Button, Table, Descriptions, Message, Card} from '@arco-design/web-react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

const OrderInformationPage=()=>{
    const navigate=useNavigate()
    const orderId=useLocation().state
    const [data,setData]=useState({})
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8091/order/order/${orderId}`,{
            headers:{
                "token":sessionStorage.getItem("token")
            }
        }).then(
            res=>{
                setData(res.data.data)
                setLoading(false)
            },
            error=>{
                Message.error('获取订单信息失败！')
                setLoading(false)
            }
        )
    },[])

    const billingDescription=[
        {
            label:'国家',
            value:data.billCountry
        },
        {
            label:'姓',
            value:data.billToLastName
        },
        {
            label:'州',
            value:data.billState
        },
        {
            label:'名',
            value:data.billToFirstName
        },
        {
            label:'城市',
            value:data.billCity
        },
        {
            label:'地址1',
            value:data.billAddress1
        },
        {
            label:'地址2',
            value:data.billAddress2
        },
    ]

    const shippingDescription=[
        {
            label:'国家',
            value:data.shipCountry
        },
        {
            label:'姓',
            value:data.shipToLastName
        },
        {
            label:'州',
            value:data.shipState
        },
        {
            label:'名',
            value:data.shipToFirstName
        },
        {
            label:'城市',
            value:data.shipCity
        },
        {
            label:'地址1',
            value:data.shipAddress1
        },
        {
            label:'地址2',
            value:data.shipAddress2
        },
    ]

    const orderDescription=[
        {
            label:'用户名',
            value:data.username
        },
        {
            label:'orderId',
            value:data.orderId
        },
        {
            label:'时间',
            value:data.orderDate
        },
        {
            label:'creditCard',
            value:data.creditCard
        },
        {
            label:'expiryDate',
            value:data.expiryDate
        },
        {
            label:'cardType',
            value:data.cardType
        },
        {
            label:'locale',
            value:data.locale
        },
        {
            label:'totalPrice',
            value:data.totalPrice,
        },
        {
            label:'status',
            value:data.status,
        },
    ]

    const columns1 = [
        {
            title:'productId',
            render:(_,record)=>(
                <>{record.item.productId}</>
            )
        },
        {
            title:'productName',
            render:(_,record)=>(
                <>{record.item.productName}</>
            )
        },
        {
            title:'itemId',
            dataIndex: 'itemId',
        },
        {
            title: 'lineNumber',
            dataIndex: 'lineNumber'
        },
        {
            title: 'quantity',
            dataIndex: 'quantity'
        },
        {
            title: 'attributes',
            render:(_,record)=>(
                <>{record.item.attributes}</>
            )
        },
        {
            title: 'descriptionText',
            render:(_,record)=>(
                <>{record.item.descriptionText}</>
            )
        },
        {
            title: 'listPrice',
            render:(_,record)=>(
                <>{record.item.listPrice} 元</>
            )
        },
        {
            title: 'unitPrice',
            dataIndex: 'unitPrice',
            render:(_, record) => (
                <span>
                    {record.unitPrice} 元
                </span>
            ),
        },
        {
            title: 'total',
            dataIndex: 'total',
            render:(_, record) => (
                <span>
                    {record.total} 元
                </span>
            ),
        },
    ];

    return   <div style={{textAlign:'center',position:'absolute',top:0,bottom:0,left:0,right:0}}>
        {
            loading?
                <Card style={{width:'100%',height:'100%'}} loading={loading} bordered={false}/>
                :
                <>
                    <div style={{marginTop:'1%',width:'95%',marginLeft:'2.5%'}}>
                        <div style={{fontSize:30,fontWeight:'bold'}}>订单信息</div>
                    </div>
                    <Table
                        stripe
                        columns={columns1}
                        data={data.lineItems}
                        style={{width:'90%',marginLeft:'5%',marginTop:'1%'}}
                    />
                    <div style={{width:'90%',height:400,backgroundColor:'white',borderRadius:10,marginLeft:'5%',marginTop:20,display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                        <div style={{width:'33.3%',height:'90%'}}>
                            <div style={{fontSize:20,fontWeight:'bold'}}>订单信息</div>
                            <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Descriptions column={1} labelStyle={{paddingRight:25,fontSize:15}} data={orderDescription}/>
                            </div>
                        </div>
                        <div style={{width:'33.3%',height:'90%'}}>
                            <div style={{fontSize:20,fontWeight:'bold'}}>支付信息</div>
                            <div style={{width:'100%',height:'90%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Descriptions column={2} layout='inline-vertical' data={billingDescription}/>
                            </div>
                        </div>
                        <div style={{width:'33.3%',height:'90%'}}>
                            <div style={{fontSize:20,fontWeight:'bold'}}>配送信息</div>
                            <div style={{width:'100%',height:'90%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Descriptions column={2} layout='inline-vertical' data={shippingDescription} />
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'right',alignItems:'center',width:'80%',marginLeft:'10%',marginTop:20}}>
                        {
                            data.status==='S'?
                                <Button
                                    onClick={()=>{
                                        axios(
                                            {
                                                method:'PUT',
                                                url:`http://127.0.0.1:8091/order/orderStauts/${data.orderId}`,
                                                headers:{
                                                    "token":sessionStorage.getItem("token")
                                                }
                                            }
                                        ).then(
                                            res=>{Message.info('确认收货成功！')},
                                            error=>{Message.error('确认收货失败！')}
                                        )
                                    }}
                                    type={"primary"}
                                    status={"success"}
                                    style={{marginLeft:10}}
                                >
                                    已收货
                                </Button>
                                :
                                null
                        }
                        <Button
                            onClick={()=>{
                                navigate('/main/order')
                            }}
                            type={"primary"}
                            style={{marginLeft:10}}
                        >
                            确认
                        </Button>
                    </div>
                    <div style={{width:"100%",height:20}}></div>
                </>
        }
    </div>
}

export default OrderInformationPage