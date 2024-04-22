

import {Table} from "@arco-design/web-react";
import {Link} from "react-router-dom";

const data=[
    {
        orderID:1,
        time:'time',
        price:'22'
    },
    {
        orderID:2,
        time:'time',
        price:'22'
    },
    {
        orderID:3,
        time:'time',
        price:'22'
    },
    {
        orderID:4,
        time:'time',
        price:'22'
    },
    {
        orderID:5,
        time:'time',
        price:'22'
    },
    {
        orderID:6,
        time:'time',
        price:'22'
    }
]

const OrderPage=()=>{

    const columns1 = [
        {
            title: '订单号',
            dataIndex: 'orderID',
            render:(_, record) => (
                <Link to={'/main/order/information'} style={{textDecoration:'none'}}>{record.orderID}</Link>
            ),
        },
        {
            title: '时间',
            dataIndex: 'time'
        },
        {
            title: '总价',
            dataIndex: 'price',
            render:(_, record) => (
                <span>
                    {record.price}元
                </span>
            ),
        },
    ];

    return <>
        <div style={{textAlign:'center',position:'absolute',top:0,bottom:0,left:0,right:0}}>
            <div style={{fontSize:30,fontWeight:'bold',marginTop:20}}>我的订单</div>
            <Table
                stripe
                columns={columns1}
                data={data}
                style={{width:'60%',marginLeft:'20%',marginTop:30}}
            />
        </div>
    </>
}

export default OrderPage