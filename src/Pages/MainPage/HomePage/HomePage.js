import bird from '../HomePage/images/bird.png'
import cat from '../HomePage/images/cat.png'
import dog from '../HomePage/images/dog.png'
import fish from '../HomePage/images/fish.png'
import reptile from '../HomePage/images/Reptiles.png'
import maskLogo from './images/maskLogo.png'
import './style.css'

import {Button, Card, Carousel, Input, Message, Radio} from "@arco-design/web-react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const pictures=[
    {
        name:'cat',
        image:cat
    },
    {
        name:'dog',
        image:dog
    },
    {
        name:'bird',
        image:bird
    },
    {
        name:'fish',
        image:fish
    },
    {
        name:'reptile',
        image:reptile
    },
]

const { Meta } = Card;

const HomePage=()=>{
    const navigate=useNavigate()

    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [option,setOption]=useState([])
    const [value,setValue]=useState('')

    useEffect(()=>{
        axios.get('http://127.0.0.1:8091/catalog/categories').then(
            res=>{
                setData(res.data.data)
                setLoading(false)
            },
            error=>{
                Message.error('获取信息失败!')
                setLoading(false)
            }
        )
    },[])

    function CardList(){
        return (<Radio.Group style={{display:'flex',flexWrap:'wrap',justifyContent:'flex-start',width:'100%'}}>
            {
                data.length===0?
                    null
                    :
                    data.map((value)=>{
                        return (
                            <Radio
                                onClick={()=>{navigate('/main/product',{state:value.categoryId})}}
                                key={value} value={value}
                                style={{width:'18%', marginBottom:20,marginRight:'1%'}}
                            >
                                {({checked})=>{
                                    return (
                                        <Card
                                            hoverable
                                            className='card-custom-hover-style'
                                            style={{width: '100%', cursor:'pointer'}}
                                            cover={
                                                <div style={{ height: '100%', overflow: 'hidden' }}>
                                                    <img
                                                        style={{ width: '100%',height:'100%' }}
                                                        alt={value.name}
                                                        src={value.description}
                                                    />
                                                </div>
                                            }
                                        >
                                            <Meta
                                                description={
                                                    <div style={{fontSize:15,fontWeight:'bold'}}>
                                                        cute {value.name}
                                                    </div>
                                                }
                                            />
                                        </Card>
                                    )
                                }}
                            </Radio>
                        )
                    })
            }
        </Radio.Group>)
    }

    function OptionList(){
        return <>
            {
                option.length===0?
                    null
                    :
                    option.map(value=>{
                        return <div
                            id='option'
                            style={{width:'100%',fontSize:18}}
                            onClick={()=>{
                                setValue(value.productId+'——'+value.productName)
                                setOption([])
                            }}
                        >
                            <div style={{width:'98%',marginLeft:'2%',cursor:'pointer'}}>
                                {value.productId}——{value.productName}
                            </div>
                        </div>
                    })
            }
        </>
    }

    return <>
        {
            loading ?
                <Card style={{width:'100%',height:'100%'}} loading={loading} bordered={false}/>
                :
                <div style={{width:'100%',height:'100%'}}>
                    <div style={{height:'51%',width:'100%',marginTop:'2%'}}>
                        <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'space-between'}}>
                            <Carousel
                                style={{ width: '40%',height:'100%',marginLeft:'5%'}}
                            >
                                {pictures.map((value, index) => (
                                    <div key={index}>
                                        <img
                                            alt={value.name}
                                            src={value.image}
                                            style={{ width: '100%',height:'100%' }}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                            <div style={{width:'45%',height:'100%',marginRight:'5%'}}>
                                <div style={{color:'gray' ,fontSize:20,width:'100%',height:'50%',display:'flex',justifyContent:'center'}}>
                                    <div>
                                        <Input
                                            style={{ width: 350,height:40,borderRadius:'5px 0px 0px 5px',border:'solid 1px #165DFF'}}
                                            onChange={value => {
                                                setValue(value)
                                                axios.get(`http://127.0.0.1:8091/catalog/search/${value}`).then(
                                                    res=>{
                                                        setOption(res.data.data)
                                                    },
                                                    error=>{
                                                        setOption([])
                                                    }
                                                )
                                            }}
                                            value={value}
                                        />
                                        <div style={{width:350,maxHeight:'90%',backgroundColor:'white',borderRadius:5,overflow:'auto'}}>
                                            <OptionList />
                                        </div>
                                    </div>
                                    <Button
                                        style={{ height:40,borderRadius:'0px 5px 5px 0px'}}
                                        type={"primary"}
                                        onClick={()=>{
                                            navigate('/main/product/item',{state:value.substring(0,value.indexOf('——'))})
                                        }}
                                    >
                                        搜索
                                    </Button>
                                </div>
                                <div style={{color:'gray' ,fontSize:20,width:'100%',height:'50%',display:'flex',alignItems:'end'}}>
                                    在JpetStore，我们不仅仅是一家普通的宠物商店，我们是一个充满爱心和关怀的家庭。我们相信每只动物都是独一无二的，都值得受到最好的关注和呵护。因此，我们致力于为您提供最高品质的宠物用品和服务，以确保您的毛茸茸朋友健康、快乐地生活。
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{height:'36%',marginTop:'2%',width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <div  style={{ width: '15%',height:'100%'}}>
                            <img alt={'jPetStore'} src={maskLogo} style={{width:'100%',height:'60%'}}/>
                            <div style={{width:'100%',height:'40%',textAlign:'center'}}>
                                <span style={{fontSize:30,color:"lightskyblue"}}>商品列表</span>
                            </div>
                        </div>
                        <div style={{ width: '85%',height:'100%',display:'flex',alignItems:'center'}}>
                            <CardList />
                        </div>
                    </div>
                </div>
        }
    </>
}
export default HomePage


