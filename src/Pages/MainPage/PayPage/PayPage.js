import {Button, Table, Descriptions, Message, Card} from '@arco-design/web-react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const PayPage=()=>{
    const navigate=useNavigate()
    const [data,setData]=useState({
        "orderId": 0,
        "username": null,
        "orderDate": null,
        "totalPrice": 0,
        "shipAddress1": null,
        "shipAddress2": null,
        "shipCity": null,
        "shipState":null,
        "shipZip": null,
        "shipCountry": null,
        "billAddress1": null,
        "billAddress2":null,
        "billCity":null,
        "billState": null,
        "billZip": null,
        "billCountry":null,
        "courier": null,
        "billToFirstName": null,
        "billToLastName": null,
        "shipToFirstName": null,
        "shipToLastName": null,
        "creditCard":null,
        "expiryDate": null,
        "cardType":null,
        "locale": null,
        "status": null,
        "lineItems": []
    })
    const [loading,setLoading]=useState(true)

    const [zip,setZip]=useState(null)
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [country,setCountry]=useState('')
    const [state,setState]=useState('')
    const [city,setCity]=useState('')
    const [address1,setAddress1]=useState('')
    const [address2,setAddress2]=useState('')

    const [get,setGet]=useState(false)

    useEffect(()=>{
        axios.get('http://127.0.0.1:8091/account/account',{
            headers:{
                "token":sessionStorage.getItem("token")
            }
        }).then(
            res=>{
                setZip(res.data.data.zip)
                setFirstName(res.data.data.firstName)
                setLastName(res.data.data.lastName)
                setCountry(res.data.data.country)
                setState(res.data.data.state)
                setCity(res.data.data.city)
                setAddress1(res.data.data.address1)
                setAddress2(res.data.data.address2)
                setGet(true)
            },
            error=>{
                Message.error('获取信息失败!')
                setLoading(false)
            }
        )
    },[])

    useEffect(()=>{
        axios.post('http://127.0.0.1:8091/order/check',{
                "billAddress1": address1,
                "billAddress2": address2,
                "billCity": city,
                "billCountry": country,
                "billState": state,
                "billToFirstName": firstName,
                "billToLastName": lastName,
                "billZip": zip,
                "shipAddress1": address1,
                "shipAddress2": address2,
                "shipCity": city,
                "shipCountry": country,
                "shipState": state,
                "shipToFirstName": firstName,
                "shipToLastName": lastName,
                "shipZip": zip,
                "cardType": "Visa",
                "courier": "UPS",
                "creditCard": "999 9999 9999 9999",
                "expiryDate": "12/03",
                "locale": "CA",
            },
            {
                headers:{
                    "token":sessionStorage.getItem("token")
                }
            }
        ).then(
            res=>{
                setData({...res.data.data})
                setLoading(false)
            },
            error=>{
                Message.error('创建订单失败!')
                setLoading(false)
            }
        )
    },[get])

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
            label:'总价',
            value:data.totalPrice,
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
                        <div style={{fontSize:30,fontWeight:'bold'}}>确认订单</div>
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
                            <div style={{width:'100%',height:'95%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Descriptions column={1} labelStyle={{paddingRight:25,fontSize:15}} data={orderDescription}/>
                            </div>
                        </div>
                        <div style={{width:'33.3%',height:'90%'}}>
                            <div style={{fontSize:20,fontWeight:'bold'}}>支付信息</div>
                            <div style={{width:'100%',height:'95%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Descriptions column={2} layout='inline-vertical' data={billingDescription}/>
                            </div>
                        </div>
                        <div style={{width:'33.3%',height:'90%'}}>
                            <div style={{fontSize:20,fontWeight:'bold'}}>配送信息</div>
                            <div style={{width:'100%',height:'95%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Descriptions column={2} layout='inline-vertical' data={shippingDescription} />
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'right',alignItems:'center',width:'80%',marginLeft:'10%',marginTop:20}}>
                        <Button
                            type={"primary"}
                            onClick={()=>{
                                axios(
                                    {
                                        method:'POST',
                                        url:'http://127.0.0.1:8091/order/order',
                                        data:data,
                                        headers:{
                                            "token":sessionStorage.getItem("token")
                                        }
                                    }
                                ).then(
                                    res=>{
                                        Message.info('支付成功!')
                                        navigate('/main/order')
                                    },
                                    error=>{
                                        Message.error('支付失败!')
                                    }
                                )
                            }}
                        >
                            支付
                        </Button>
                        <Button
                            onClick={()=>{
                                navigate('/main/cart')
                            }}
                            status={"danger"}
                            style={{marginLeft:10}}
                        >
                            返回
                        </Button>
                    </div>
                    <div style={{width:"100%",height:20}}>

                    </div>
                </>
        }
    </div>
}

export default PayPage