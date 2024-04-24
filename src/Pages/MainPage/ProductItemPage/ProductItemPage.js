import {Button, Card, Message, Table} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const ProductItemPage=()=>{
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState([])
    const productId=useLocation().state
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8091/catalog/items/${productId}`).then(
            res=>{
                if(res.data.msg==='success')
                    setData(res.data.data)
                setLoading(false)
            },
            err=>{
                Message.info('请求数据失败！')
                setLoading(false)
            }
        )
    },[])

    const columns = [
        {
            title: 'itemID',
            dataIndex: 'itemId',
            render:(_,record)=>(
                <Link to={'/main/product/item/information'} style={{textDecoration:'none'}}>{record.itemId}</Link>
            )
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
            title: 'attribute1',
            dataIndex: 'attribute1'
        },
    ];

    return <>
        {
            loading?
                <Card style={{width:'100%',height:'100%'}} loading={loading} bordered={false}/>
                :
                <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{width:'80%',backgroundColor:"white",borderRadius:20,padding:'2%'}}>
                        <div style={{display:'flex',justifyContent:'space-around',fontSize:20,fontWeight:'bold',width:'100%'}}>
                            <div>
                                种类: {data.categoryId}
                            </div>
                            <div>
                                商品名称: {data.productName}
                            </div>
                            <div>
                                商品ID: {data.productId}
                            </div>
                        </div>
                        <Table
                            stripe
                            columns={columns}
                            data={data.itemList}
                            style={{width:'80%',marginLeft:'10%',marginTop:30}}
                        />
                        <Button
                            onClick={()=>{navigate('/main/product',{state:data.categoryId})}}
                            type={"primary"}
                            style={{float:'right',marginTop:30,marginRight:'10%'}}
                        >
                            返回
                        </Button>
                    </div>
                </div>
        }
    </>
}

export default ProductItemPage