import cat from "../ProductListPage/images/cat.png";
import {Button, Table, Image, Descriptions} from '@arco-design/web-react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const person= {
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
    "favouriteCategoryId": "DOGS",
    "languagePreference": "english",
    "listOption": true,
}

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

const description=[
    {
        label:'用户名',
        value:person.username
    },
    {
        label:'国家',
        value:person.country
    },
    {
        label:'姓',
        value:person.lastName
    },
    {
        label:'州',
        value:person.state
    },
    {
        label:'名',
        value:person.firstName
    },
    {
        label:'城市',
        value:person.city
    },
    {
        label:'联系方式',
        value:person.phone
    },
    {
        label:'邮箱',
        value:person.email
    },
    {
        label:'地址1',
        value:person.address1
    },
    {
        label:'地址2',
        value:person.address2
    },
]

const PayPage=()=>{
    const navigate=useNavigate()
    const [visible, setVisible] = useState(false);
    const [total,setTotal]=useState(0)

    useEffect(()=>{
        let tempTotal=0
        data.map(value => {
            tempTotal+=value.number*value.price
        })
        setTotal(tempTotal)
    },[])

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

    return   <div style={{textAlign:'center',position:'absolute',top:0,bottom:0,left:0,right:0}}>
        <div style={{marginTop:'1%',width:'80%',marginLeft:'10%'}}>
            <div style={{fontSize:30,fontWeight:'bold'}}>确认订单</div>
        </div>
        <Table
            stripe
            columns={columns1}
            data={data}
            style={{width:'80%',marginLeft:'10%',marginTop:'1%'}}
        />
        <div style={{marginLeft:'10%',width:'80%',marginTop:'1%',textAlign:'right',fontSize:25}}>
            总价：{total}元
        </div>
        <div style={{width:'90%',height:400,backgroundColor:'white',borderRadius:10,marginLeft:'5%',marginTop:20,display:'flex',justifyContent:'space-around',alignItems:'center'}}>
            <div style={{width:'45%',height:'90%'}}>
                <div style={{fontSize:20,fontWeight:'bold'}}>支付信息</div>
                <div style={{width:'100%',height:'95%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Descriptions column={2} layout='inline-vertical' data={description} style={{marginLeft:'30%'}}/>
                </div>
            </div>
            <div style={{width:'45%',height:'90%'}}>
                <div style={{fontSize:20,fontWeight:'bold'}}>配送信息</div>
                <div style={{width:'100%',height:'95%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Descriptions column={2} layout='inline-vertical' data={description} style={{marginLeft:'30%'}} />
                </div>
            </div>
        </div>
        <div style={{display:'flex',justifyContent:'right',alignItems:'center',width:'80%',marginLeft:'10%',marginTop:20}}>
            <Button
                type={"primary"}
                onClick={()=>{
                    navigate('/main/order/information')
                }}
            >
                确认支付
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
    </div>
}

export default PayPage