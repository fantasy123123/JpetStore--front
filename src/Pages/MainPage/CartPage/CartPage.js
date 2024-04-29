
import {Button, Table,  Message, Card} from '@arco-design/web-react';
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const CartPage=()=>{
    const navigate=useNavigate()
    const [data,setData]=useState([])
    const [recommendation,setRecommendation]=useState([])
    const [ifRecommend,setIfRecommend]=useState(false)
    const [loading,setLoading]=useState(true)

    const dogs=['K9-BD-01','K9-CW-01','K9-DL-01','K9-PO-02','K9-RT-01','K9-RT-02']
    const cats=['FL-DLH-02','FL-DSH-01']
    const birds=['AV-CB-01','AV-SB-02']
    const fish=['FI-FW-01','FI-FW-02','FI-SW-01','FI-SW-02']
    const reptiles=['RP-SN-01','RP-LI-02']

    function getRecommendation(value){
        // eslint-disable-next-line default-case
        switch (value){
            case 'DOGS':return dogs[Math.floor(Math.random()*dogs.length)]
            case 'CATS':return cats[Math.floor(Math.random()*cats.length)]
            case 'FISH':return fish[Math.floor(Math.random()*fish.length)]
            case 'BIRDS':return birds[Math.floor(Math.random()*birds.length)]
            case 'REPTILES':return reptiles[Math.floor(Math.random()*reptiles.length)]
        }
    }

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8091/cart/cart`,{
            headers:{
                token:sessionStorage.getItem('token')
            }
        }).then(
            res=>{
                if(res.data.msg==='success') setData(res.data.data.itemList)
                setLoading(false)
            },
            err=>{
                Message.error('请求数据失败！')
                setLoading(false)
            }
        )

        axios.get('http://127.0.0.1:8091/account/account',{
            headers:{
                "token":sessionStorage.getItem("token")
            }
        }).then(
            res=>{
                if (res.data.data.listOption) {
                    setIfRecommend(true)
                    axios.get(`http://127.0.0.1:8091/catalog/items/${getRecommendation(res.data.data.favouriteCategoryId)}`).then(
                        res=>{
                            if(res.data.msg==='success')
                                setRecommendation(res.data.data.itemList)
                        },
                        err=>{
                            Message.error('获取偏好数据失败!')
                        }
                    )
                }
            },
            error=>{
                Message.error('获取偏好信息失败!')
            }
        )
    },[])

    function getTotal(){
        let temp=0
        for (let i = 0; i < data.length; i++) {
            temp+=data[i].total
        }
        return parseFloat(temp.toFixed(2))
    }

    function dataFilter(id){
        let tempData=data.filter(value=>value.itemId!==id)
        setData([...tempData])
    }

    const columns1 = [
        {
            title: 'itemId',
            dataIndex: 'itemId',
            render:(_, record) => {
                return <Link to={'/main/product/item/information'} state={record.itemId} style={{textDecoration:'none'}}>{record.itemId}</Link>
            },
        },
        {
            title: 'quantity',
            dataIndex: 'quantity',
            render:(_,record,index)=>{
                return <div style={{display:'flex',alignItems:'center'}}>
                    <div>{record.quantity}</div>
                    <Button
                        status={"success"}
                        shape={"circle"}
                        style={{marginRight:10,marginLeft:10}}
                        onClick={()=>{
                            if(record.quantity<record.item.quantity) {
                                axios.put(`http://127.0.0.1:8091/cart/cartItem/${record.itemId}/${record.quantity+1}`,{},{
                                    headers:{
                                        token:sessionStorage.getItem('token')
                                    }
                                }).then(
                                    res=>{
                                        if(res.data.msg==='success'){
                                            data[index].quantity++
                                            data[index].total+= data[index].item.listPrice
                                            setData([...data])
                                        }
                                    },
                                    err=>{
                                        Message.error('添加失败！')
                                    }
                                )
                            } else {
                                Message.error('没有更多库存了！')
                            }
                        }}
                    >
                        +1
                    </Button>
                    <Button
                        status={"danger"}
                        shape={"circle"}
                        onClick={()=>{
                            if(record.quantity>1) {
                                axios.put(`http://127.0.0.1:8091/cart/cartItem/${record.itemId}/${record.quantity-1}`,{},{
                                    headers:{
                                        token:sessionStorage.getItem('token')
                                    }
                                }).then(
                                    res=>{
                                        if(res.data.msg==='success'){
                                            data[index].quantity--
                                            data[index].total-= data[index].item.listPrice
                                            setData([...data])
                                        }
                                    },
                                    err=>{
                                        Message.error('删除失败！')
                                    }
                                )
                            } else {
                                Message.error('数量最少为1！若想删除此商品请点击删除按钮。')
                            }
                        }}
                    >
                        -1
                    </Button>
                </div>
            }
        },
        {
            title: 'inStock',
            dataIndex: 'inStock',
            render:(_, record) => {
                if(record.inStock) return '有'
                else return '无'
            },
        },
        {
            title: 'total',
            dataIndex: 'total',
            render:(_, record) => (
                <>
                    {parseFloat(record.total.toFixed(2))}元
                </>
            ),
        },
        {
            title: '操作',
            render:(_, record) => (
                <Button
                    status={"danger"}
                    type={'primary'}
                    onClick={()=>{
                        axios.delete(`http://127.0.0.1:8091/cart/cartItem/${record.itemId}`,{
                            headers:{
                                token:sessionStorage.getItem('token')
                            }
                        }).then(
                            res=>{
                                if(res.data.msg==='success'){
                                    Message.info('删除成功！')
                                    dataFilter(record.itemId)
                                }
                            },
                            err=>{
                                Message.error('删除失败！')
                            }
                        )
                    }}
                >
                    删除
                </Button>
            ),
            fixed:'right',
        },
    ];

    const columns2 = [
        {
            title: 'itemID',
            dataIndex: 'itemId',
        },
        {
            title: 'productId',
            dataIndex: 'productId'
        },
        {
            title: 'listPrice',
            dataIndex: 'listPrice'
        },
        {
            title: 'unitCost',
            dataIndex: 'unitCost'
        },
        {
            title: 'supplierId',
            dataIndex: 'supplierId'
        },
        {
            title: 'status',
            dataIndex: 'status',
            render:(_,record)=>{
                if(record.status==='P') return '在售'
                else return '停售'
            }
        },
        {
            title: 'attribute',
            dataIndex: 'attribute1'
        },
        {
            title: '操作',
            render:(_, record) => (
                <Button onClick={()=>{navigate('/main/product/item/information',{state:record.itemId})}} type='primary'>
                    查看商品
                </Button>
            ),
            fixed:'right',
            width:250
        },
    ];

    return <>
        {
            loading?
                <Card style={{width:'100%',height:'100%'}} loading={loading} bordered={false}/>
                :
                <div style={{textAlign:'center',width:'100%'}}>
                    <div style={{display:'flex',marginTop:'1%',justifyContent:'space-between',width:'80%',marginLeft:'10%',alignItems:'center'}}>
                        <div style={{width:'40%'}}></div>
                        <div style={{fontSize:30,fontWeight:'bold'}}>购物车</div>
                        <div style={{display:'flex',alignItems:'center',width:'40%',justifyContent:'right'}}>
                            <div style={{marginRight:20,fontSize:25}}>
                                共 {getTotal()} 元
                            </div>
                            <Button
                                onClick={()=>{
                                    axios.get(`http://127.0.0.1:8091/order/validation`,{
                                        headers:{
                                            token:sessionStorage.getItem('token')
                                        }
                                    }).then(
                                        res=>{
                                            if(res.data.msg==='success'){
                                                Message.info('创建订单成功！')
                                                navigate('/main/cart/pay')
                                            } else {
                                                Message.error(res.data.data)
                                            }
                                        },
                                        err=>{
                                            Message.error('创建订单失败！')
                                        }
                                    )
                                }}
                                type={"primary"}
                                style={{marginRight:20}}
                            >
                                创建订单
                            </Button>
                            <Button
                                onClick={()=>{
                                    if(data.length>0) {
                                        axios.delete(`http://127.0.0.1:8091/cart/cart`,{
                                            headers:{
                                                token:sessionStorage.getItem('token')
                                            }
                                        }).then(
                                            res=>{
                                                if(res.data.msg==='success'){
                                                    Message.info('清空购物车成功！')
                                                    setData([])
                                                }
                                            },
                                            err=>{
                                                Message.error('清空购物车失败！')
                                            }
                                        )
                                    } else {
                                        Message.info('您的购物车是空的！')
                                    }
                                }}
                                type={"primary"}
                                status={"danger"}
                            >
                                清空购物车
                            </Button>
                        </div>
                    </div>
                    <Table
                        rowKey='productID'
                        stripe
                        columns={columns1}
                        data={data}
                        style={{width:'80%',marginLeft:'10%',marginTop:'1%'}}
                        rowSelection={{type:'checkbox',checkAll:true,checkCrossPage:true}}
                    />
                    {
                        ifRecommend?
                            <div style={{width:'80%',marginTop:'2%',marginLeft:'10%'}}>
                                <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                    <div style={{width:'30%'}} />
                                    <div style={{fontSize:30,fontWeight:'bold'}}>
                                        偏好推荐
                                    </div>
                                    <div style={{width:'30%',display:'flex',justifyContent:'right'}}>
                                        <Button
                                            type={"primary"}
                                            onClick={()=>{
                                                axios.get('http://127.0.0.1:8091/account/account',{
                                                    headers:{
                                                        "token":sessionStorage.getItem("token")
                                                    }
                                                }).then(
                                                    res=>{
                                                        if (res.data.data.listOption) {
                                                            setIfRecommend(true)
                                                            axios.get(`http://127.0.0.1:8091/catalog/items/${getRecommendation(res.data.data.favouriteCategoryId)}`).then(
                                                                res=>{
                                                                    if(res.data.msg==='success')
                                                                        setRecommendation(res.data.data.itemList)
                                                                },
                                                                err=>{
                                                                    Message.error('获取偏好数据失败!')
                                                                }
                                                            )
                                                        }
                                                    },
                                                    error=>{
                                                        Message.error('获取偏好信息失败!')
                                                    }
                                                )
                                            }}
                                        >
                                            重新推荐
                                        </Button>
                                    </div>
                                </div>
                                <Table
                                    stripe
                                    columns={columns2}
                                    data={recommendation}
                                    style={{width:'100%',marginTop:'1%'}}
                                />
                            </div>
                            :
                            null
                    }
                    <div style={{width:'100%',height:30}}/>
                </div>
        }
    </>
}

export default CartPage