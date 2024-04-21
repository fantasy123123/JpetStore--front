import cat from "../ProductListPage/images/cat.png";
import {Button, Table,Image} from '@arco-design/web-react';
import {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";

const data=[
    {
        productID:1,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100,
        number:2
    },
    {
        productID:2,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100,
        number:2
    },
    {
        productID:3,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100,
        number:2
    },
    {
        productID:4,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100,
        number:2
    },
    {
        productID:5,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100,
        number:2
    },
    {
        productID:6,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100,
        number:2
    },
    {
        productID:7,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100,
        number:2
    }
]

const CartPage=()=>{
    const navigate=useNavigate()
    const [visible, setVisible] = useState(false);


    const columns1 = [
        {
            title: '种类',
            dataIndex: 'categoryID'
        },
        {
            title: '名字',
            dataIndex: 'name'
        },
        {
            title: '价格',
            dataIndex: 'price',
            render:(_, record) => (
                <span>
                    {record.price}元/只
                </span>
            ),
        },
        {
            title: '图片',
            dataIndex: 'image',
            render:(_, record) => (
                <>
                    <Button onClick={() => setVisible(true)}>
                        点击查看图片
                    </Button>
                    <Image.Preview
                        src={record.image}
                        visible={visible}
                        onVisibleChange={setVisible}
                    />
                </>
            ),
        },
        {
            title: '描述',
            dataIndex: 'text'
        },
        {
            title: '数量',
            dataIndex: 'number',
            render:(_, record) => (
                <div style={{display:'flex',alignItems:'center'}}>
                    {record.number}
                    <Button shape={"circle"} status={"success"} style={{marginLeft:10}}>+1</Button>
                    <Button  shape={"circle"} status={"danger"} style={{marginLeft:10}}>-1</Button>
                </div>
            ),
        },
        {
            title: '价格',
            render:(_, record) => (
                <>
                    {record.number*record.price}元
                </>
            ),
        },
        {
            title: '操作',
            render:(_, record) => (
                <Button status={"danger"} type={'primary'}>
                    删除
                </Button>
            ),
            fixed:'right',
        },
    ];

    const columns2 = [
        {
            title: '种类',
            dataIndex: 'categoryID'
        },
        {
            title: '名字',
            dataIndex: 'name'
        },
        {
            title: '价格',
            dataIndex: 'price',
            render:(_, record) => (
                <span>
                    {record.price}元/只
                </span>
            ),
        },
        {
            title: '图片',
            dataIndex: 'image',
            render:(_, record) => (
                <>
                    <Button onClick={() => setVisible(true)}>
                        点击查看图片
                    </Button>
                    <Image.Preview
                        src={record.image}
                        visible={visible}
                        onVisibleChange={setVisible}
                    />
                </>
            ),
        },
        {
            title: '描述',
            dataIndex: 'text'
        },
        {
            title: '操作',
            render:(_, record) => (
                <>
                    <Button type='primary'>
                        添加至购物车
                    </Button>
                    <Button status={"warning"} style={{marginLeft:10}}>
                        不感兴趣
                    </Button>
                </>
            ),
            fixed:'right',
            width:250
        },
    ];

    return <>
        <div style={{textAlign:'center',position:'absolute',top:0,bottom:0,left:0,right:0}}>
            <div style={{display:'flex',marginTop:'1%',justifyContent:'space-between',width:'80%',marginLeft:'10%',alignItems:'center'}}>
                <div style={{width:65,height:38}}></div>
                <div style={{fontSize:30,fontWeight:'bold'}}>购物车</div>
                <Button
                    onClick={()=>{
                        navigate('/main/cart/pay')
                    }}
                    type={"primary"}
                    style={{width:65}}
                >
                    支付
                </Button>
            </div>
            <Table
                rowKey='productID'
                stripe
                columns={columns1}
                data={data}
                style={{width:'80%',marginLeft:'10%',marginTop:'1%'}}
                rowSelection={{type:'checkbox',checkAll:true,checkCrossPage:true}}
            />
            <div style={{fontSize:30,fontWeight:'bold',marginTop:'2%'}}>
                偏好推荐
            </div>
            <Table
                stripe
                columns={columns2}
                data={data}
                style={{width:'80%',marginLeft:'10%',marginTop:'1%'}}
            />
        </div>
    </>
}

export default CartPage