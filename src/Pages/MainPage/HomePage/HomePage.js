import bird from '../HomePage/images/bird.png'
import cat from '../HomePage/images/cat.png'
import dog from '../HomePage/images/dog.png'
import fish from '../HomePage/images/fish.png'
import reptile from '../HomePage/images/Reptiles.png'
import maskLogo from './images/maskLogo.png'
import songshu from './images/songshu.jpg'
import cat2 from './images/cat-signin2.jpg'
import './style.css'

import {Card, Carousel, Radio} from "@arco-design/web-react";
import {useNavigate} from "react-router-dom";


const { Meta } = Card;

const data=[
    {
        name:'cat',
        image:cat
    },
    {
        name:'dog',
        image:dog
    },
    {
        name:'fish',
        image:fish
    },
    {
        name:'bird',
        image:bird
    },
    {
        name:'reptile',
        image:reptile
    },
]

const HomePage=()=>{
    const navigate=useNavigate()

    function CardList(){
        return (<Radio.Group style={{display:'flex',flexWrap:'wrap',justifyContent:'flex-start',width:'100%'}}>
            {data.map((value)=>{
                return (
                    <Radio
                        onClick={()=>{navigate('/main/product')}}
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
                                                src={value.image}
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
            })}
        </Radio.Group>)
    }


    return <div style={{width:'100%',height:'100%'}}>
        <div style={{height:'51%',width:'100%',marginTop:'2%'}}>
            <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'space-between'}}>
                <Carousel
                    style={{ width: '40%',height:'95%',marginLeft:'5%'}}
                >
                    {data.map((value, index) => (
                        <div key={index}>
                            <img
                                alt={value.name}
                                src={value.image}
                                style={{ width: '100%',height:'100%' }}
                            />
                        </div>
                    ))}
                </Carousel>
                <div style={{width:'45%',height:'100%',marginRight:'5%',marginTop:'2%'}}>
                    <img alt={'松鼠'} src={songshu} style={{width:'70%',height:'63%',float:'right',margin:'1%'}}/>
                    <div style={{color:'gray' ,fontSize:20,width:'100%',height:'100%'}}>
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
export default HomePage


