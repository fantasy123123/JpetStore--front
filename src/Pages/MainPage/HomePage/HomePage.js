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
                        style={{width:'30%', marginBottom:20,marginLeft:'1%',marginRight:'1%'}}
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


    return <>
        <div style={{height:'100%',width:'60%'}}>
            <div style={{width:'100%',height:'50%',marginTop:'1.5%',display:'flex',justifyContent:'space-between'}}>
                <div  style={{ width: '35%',height:'100%'}}>
                    <img alt={'jPetStore'} src={maskLogo} style={{width:'100%',height:'60%'}}/>
                    <div style={{width:'100%',height:'40%',textAlign:'center'}}>
                        <span style={{fontSize:30,color:"lightskyblue"}}>Welcome to</span>
                        <br />
                        <span style={{fontSize:37,color:'darkorange'}}>JpetStroe!</span>
                    </div>
                </div>
                <Carousel
                    style={{ width: '65%',height:'90%'}}
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
            </div>
            <div style={{width:'100%',overflow:'auto',height:'44%',textAlign:'center',paddingTop:4}}>
                <CardList />
            </div>
        </div>
        <div style={{height:'100%',width:'40%'}}>
            <div style={{width:'90%',height:'45%',marginLeft:'5%',marginRight:'5%',marginTop:'5%'}}>
                <img alt={'松鼠'} src={songshu} style={{width:'70%',height:'60%',float:'right',margin:'1%'}}/>
                <div style={{color:'gray' ,fontSize:20,width:'100%',height:'100%'}}>
                    在JpetStore，我们不仅仅是一家普通的宠物商店，我们是一个充满爱心和关怀的家庭。我们相信每只动物都是独一无二的，都值得受到最好的关注和呵护。因此，我们致力于为您提供最高品质的宠物用品和服务，以确保您的毛茸茸朋友健康、快乐地生活。
                </div>
            </div>
            <div style={{width:'90%',height:'45%',marginLeft:'5%',marginRight:'5%',marginTop:'5%'}}>
                <img alt={'cat'} src={cat2} style={{width:'60%',height:'60%',float:'left',margin:'2%'}}/>
                <div style={{color:'grey' ,fontSize:20,width:'100%',height:'100%'}}>
                    无论您是正在寻找新的宠物伙伴，还是想要给现有的宠物朋友带来更多欢乐和舒适，JpetStore都是您的理想选择。我们期待着您的光临，让我们一起为您和您的宠物打造一个幸福美满的生活！
                </div>
            </div>
        </div>
    </>
}
export default HomePage


