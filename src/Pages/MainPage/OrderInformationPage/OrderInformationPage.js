import cat from "../ProductListPage/images/cat.png";
import {Button, Descriptions, Image, Table} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const data={
    orderID:1,
    time:'time',
    price:'22',
    billingAddress:{
        "username": "j2ee",
        "password": "j2ee",
        "email": "yourname@yourdomain.com",
        "firstName": "ABC",
        "lastName": "XYX",
        "address1": "901 San Antonio Road",
        "address2": "MS UCUP02-206",
        "city": "Palo Alto",
        "state": "CA",
        "zip": "94303",
        "country": "China",
        "phone": "555-555-5555",
    },
    shippingAddress:{
        "username": "j2ee",
        "password": "j2ee",
        "email": "yourname@yourdomain.com",
        "firstName": "ABC",
        "lastName": "XYX",
        "address1": "901 San Antonio Road",
        "address2": "MS UCUP02-206",
        "city": "Palo Alto",
        "state": "CA",
        "zip": "94303",
        "country": "China",
        "phone": "555-555-5555",
    },
    products:[
        {
            productID:1,
            categoryID:'cat',
            name:'猫猫',
            text:'可爱的猫猫',
            image:cat,
            price:100,
            number:1
        },
        {
            productID:2,
            categoryID:'cat',
            name:'猫猫',
            text:'可爱的猫猫',
            image:cat,
            price:100,
            number:1
        },
        {
            productID:3,
            categoryID:'cat',
            name:'猫猫',
            text:'可爱的猫猫',
            image:cat,
            price:100,
            number:1
        },
        {
            productID:4,
            categoryID:'cat',
            name:'猫猫',
            text:'可爱的猫猫',
            image:cat,
            price:100,
            number:1
        },
        {
            productID:5,
            categoryID:'cat',
            name:'猫猫',
            text:'可爱的猫猫',
            image:cat,
            price:100,
            number:1
        },
        {
            productID:6,
            categoryID:'cat',
            name:'猫猫',
            text:'可爱的猫猫',
            image:cat,
            price:100,
            number:1
        },
        {
            productID:6,
            categoryID:'cat',
            name:'猫猫',
            text:'可爱的猫猫',
            image:cat,
            price:100,
            number:1
        }
    ]
}

const billingDescription=[
    {
        label:'用户名',
        value:data.billingAddress.username
    },
    {
        label:'国家',
        value:data.billingAddress.country
    },
    {
        label:'姓',
        value:data.billingAddress.lastName
    },
    {
        label:'州',
        value:data.billingAddress.state
    },
    {
        label:'名',
        value:data.billingAddress.firstName
    },
    {
        label:'城市',
        value:data.billingAddress.city
    },
    {
        label:'联系方式',
        value:data.billingAddress.phone
    },
    {
        label:'邮箱',
        value:data.billingAddress.email
    },
    {
        label:'地址1',
        value:data.billingAddress.address1
    },
    {
        label:'地址2',
        value:data.billingAddress.address2
    },
]

const shippingDescription=[
    {
        label:'用户名',
        value:data.shippingAddress.username
    },
    {
        label:'国家',
        value:data.shippingAddress.country
    },
    {
        label:'姓',
        value:data.shippingAddress.lastName
    },
    {
        label:'州',
        value:data.shippingAddress.state
    },
    {
        label:'名',
        value:data.shippingAddress.firstName
    },
    {
        label:'城市',
        value:data.shippingAddress.city
    },
    {
        label:'联系方式',
        value:data.shippingAddress.phone
    },
    {
        label:'邮箱',
        value:data.shippingAddress.email
    },
    {
        label:'地址1',
        value:data.shippingAddress.address1
    },
    {
        label:'地址2',
        value:data.shippingAddress.address2
    },
]

const orderDescription=[
    {
        label:'订单号',
        value:data.orderID
    },
    {
        label:'时间',
        value:data.time
    },
    {
        label:'总价',
        value:data.price,
        render:(_,record)=>(
            <span>{record.price} 元</span>
        )
    },
]

const OrderInformationPage=()=>{
    const [visible, setVisible] = useState(false);
    const navigate=useNavigate()

    const columns1 = [
        {
            title:'宠物ID',
            dataIndex: 'productID',
            render:(_, record) => (
                <Link to={'/main/product/information'} style={{textDecoration:'none'}}>
                    {record.productID}
                </Link>
            ),
        },
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
        },
        {
            title: '总价',
            render:(_, record) => (
                <>
                    {record.number*record.price}元
                </>
            ),
        },
    ];

    return <div style={{width:'100%',height:'100%',textAlign:'center'}}>
        <div style={{fontSize:30,fontWeight:'bold',marginTop:20}}>订单详情</div>
        <div style={{width:'90%',height:500,marginLeft:'5%',marginTop:20,backgroundColor:'white',borderRadius:10}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'90%',height:'100%',marginLeft:'5%'}}>
                <div style={{width:'15%',height:'90%'}}>
                    <div style={{fontSize:20,fontWeight:'bold'}}>订单信息</div>
                    <div style={{width:'100%',height:'95%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Descriptions column={1} valueStyle={{fontSize:15}} labelStyle={{paddingRight:25,fontSize:15}} data={orderDescription}/>
                    </div>
                </div>
                <div style={{width:'42%',height:'90%'}}>
                    <div style={{fontSize:20,fontWeight:'bold'}}>支付信息</div>
                    <div style={{width:'100%',height:'95%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Descriptions column={2} layout='inline-vertical' data={billingDescription} style={{marginLeft:'30%'}}/>
                    </div>
                </div>
                <div style={{width:'42%',height:'90%'}}>
                    <div style={{fontSize:20,fontWeight:'bold'}}>配送信息</div>
                    <div style={{width:'100%',height:'95%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Descriptions column={2} layout='inline-vertical' data={shippingDescription} style={{marginLeft:'30%'}} />
                    </div>
                </div>
            </div>
        </div>
        <div style={{fontSize:30,fontWeight:'bold',marginTop:20}}>购买商品</div>
        <div style={{width:'80%',marginLeft:'10%',marginTop:20}}>
            <Table
                stripe
                columns={columns1}
                data={data.products}
            />
        </div>
        <div style={{display:'flex',justifyContent:'right',alignItems:'center',width:'80%',marginLeft:'10%',marginTop:20}}>
            <Button
                type={"primary"}
                onClick={()=>{
                  navigate('/main/order')
                }}
            >
                确认
            </Button>
        </div>
        <div style={{width:"100%",height:20}}>

        </div>
    </div>
}

export default OrderInformationPage