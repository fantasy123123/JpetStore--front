import {Card, Message, Table} from "@arco-design/web-react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

const OrderPage=()=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8091/order/orders`,{
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

    const columns1 = [
        {
            title: '订单号',
            dataIndex: 'orderId',
            render:(_, record) => (
                <Link to={'/main/order/information'} state={record.orderId} style={{textDecoration:'none'}}>{record.orderId}</Link>
            ),
            sorter: (a, b) => a.orderId - b.orderId,
        },
        {
            title: '时间',
            dataIndex: 'orderDate'
        },
        {
            title: '总价',
            dataIndex: 'totalPrice',
            render:(_, record) => (
                <span>
                    {record.totalPrice}元
                </span>
            ),
        },
    ];

    return <>
        <div style={{textAlign:'center',width:'100%'}}>
            {
                loading?
                    <Card style={{width:'100%',height:'100%'}} loading={loading} bordered={false}/>
                    :
                    <>
                        <div style={{fontSize:30,fontWeight:'bold',marginTop:20}}>我的订单</div>
                        <Table
                            stripe
                            columns={columns1}
                            data={data}
                            style={{width:'60%',marginLeft:'20%',marginTop:30}}
                        />
                        <div style={{width:'100%',height:30}}/>
                    </>
            }
        </div>
    </>
}

export default OrderPage