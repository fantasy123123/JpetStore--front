import { Layout, Popover} from "@arco-design/web-react";
import {Link, Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import PubSub from 'pubsub-js'

const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

const MainPage=()=>{
    const navigate=useNavigate()

    return (
        <Layout>
            <Header style={{width:'100%',height:70,backgroundColor:'lightskyblue',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{height:'100%',paddingLeft:'2%',width:'30%',display:'flex',alignItems:'center',justifyContent:'left',fontSize:30,color:'whitesmoke',cursor:'pointer'}}>
                    <span onClick={()=>{navigate('/main/home')}}>
                        JPETSTORE
                    </span>
                </div>
                <div style={{display:'flex',alignItems:'center',fontSize:20,width:'35%',height:'100%',justifyContent:'center'}}>
                    <div style={{color:'whitesmoke',cursor:'pointer'}}>
                        <Popover
                            content={
                                <div style={{textAlign:'center',fontSize:15}}>
                                    <div style={{cursor:'pointer',margin:5}} onClick={()=>{
                                        if(window.location.pathname!=='/main/product') {
                                            navigate('/main/product',{state:'CATS'})
                                        } else {
                                            PubSub.publish('refresh','CATS')
                                        }
                                    }}
                                    >
                                        猫
                                    </div>
                                    <div style={{cursor:'pointer',margin:5}}
                                         onClick={()=>{
                                             if(window.location.pathname!=='/main/product') {
                                                 navigate('/main/product',{state:'DOGS'})
                                             } else {
                                                 PubSub.publish('refresh','DOGS')
                                             }
                                         }}
                                    >
                                        狗
                                    </div>
                                    <div style={{cursor:'pointer',margin:5}}
                                         onClick={()=>{
                                             if(window.location.pathname!=='/main/product') {
                                                 navigate('/main/product',{state:'BIRDS'})
                                             } else {
                                                 PubSub.publish('refresh','BIRDS')
                                             }
                                         }}
                                    >
                                        鸟
                                    </div>
                                    <div style={{cursor:'pointer',margin:5}}
                                         onClick={()=>{
                                             if(window.location.pathname!=='/main/product') {
                                                 navigate('/main/product',{state:'FISH'})
                                             } else {
                                                 PubSub.publish('refresh','FISH')
                                             }
                                         }}
                                    >
                                        鱼
                                    </div>
                                    <div style={{cursor:'pointer',margin:5}}
                                         onClick={()=>{
                                             if(window.location.pathname!=='/main/product') {
                                                 navigate('/main/product',{state:'REPTILES'})
                                             } else {
                                                 PubSub.publish('refresh','REPTILES')
                                             }
                                         }}
                                    >
                                        爬行动物
                                    </div>
                                </div>
                            }
                        >
                            种类
                        </Popover>
                    </div>
                    <div style={{width:2,height:20,backgroundColor:'whitesmoke',margin:10}}/>
                    <div style={{color:'whitesmoke',cursor:'pointer'}}>
                        <span onClick={()=>{navigate('/main/cart')}}>
                            购物车
                        </span>
                    </div>
                    <div style={{width:2,height:20,backgroundColor:'whitesmoke',margin:10}}/>
                    <div style={{color:'whitesmoke',cursor:'pointer'}}>
                        <span onClick={()=>{navigate('/main/order')}}>
                            我的订单
                        </span>
                    </div>
                </div>
                <div style={{width:'30%',paddingRight:'2%',display:"flex",alignItems:'center',justifyContent:'right',fontSize:20}}>
                    <div style={{color:'whitesmoke',cursor:'pointer'}}>
                        <span onClick={()=>{navigate('/main/information')}}>
                            个人信息
                        </span>
                    </div>
                    <div style={{width:2,height:20,backgroundColor:'whitesmoke',margin:10}}/>
                    <div style={{color:'whitesmoke',cursor:'pointer'}}>
                        <span onClick={()=>{navigate('/signIn')}}>
                            退出登录
                        </span>
                    </div>
                </div>
            </Header>
            <Content style={{width:'100%',display:'flex'}}>
                <Outlet />
            </Content>
            <Footer style={{height:150,width:'100%',fontSize:18,backgroundColor:'lightskyblue',color:'white',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <div style={{width:'50%',textAlign:'center'}}>
                    <span>前端项目仓库：</span><br/>
                    <span onClick={()=>{window.open('https://github.com/fantasy123123/JpetStore--front')}} style={{color:'blue',cursor:'pointer'}}>https://github.com/fantasy123123/JpetStore--front</span><br/>
                    <span>后端项目仓库：</span><br/>
                    <span onClick={()=>{window.open('https://gitee.com/Adochew/p-pet-store')}} style={{color:'blue',cursor:'pointer'}}>https://gitee.com/Adochew/p-pet-store</span><br/>
                </div>
                <div style={{width:'50%',textAlign:'center'}}>
                    QuickLink:      <br />
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div style={{textAlign:'left',marginRight:20}}>
                            <Link to={'/main/home'} style={{textDecoration:'none',color:'white'}}>Home</Link><br />
                            <div style={{cursor:'pointer'}} onClick={()=>{
                                if(window.location.pathname!=='/main/product') {
                                    navigate('/main/product',{state:'CATS'})
                                } else {
                                    PubSub.publish('refresh','CATS')
                                }
                            }}
                            >
                                Cats
                            </div>
                            <div style={{cursor:'pointer'}}
                                 onClick={()=>{
                                     if(window.location.pathname!=='/main/product') {
                                         navigate('/main/product',{state:'REPTILES'})
                                     } else {
                                         PubSub.publish('refresh','REPTILES')
                                     }
                                 }}
                            >
                                Reptiles
                            </div>
                        </div>
                        <div style={{textAlign:'left',marginLeft:20}}>
                            <div style={{cursor:'pointer'}}
                                 onClick={()=>{
                                     if(window.location.pathname!=='/main/product') {
                                         navigate('/main/product',{state:'DOGS'})
                                     } else {
                                         PubSub.publish('refresh','DOGS')
                                     }
                                 }}
                            >
                                Dogs
                            </div>
                            <div style={{cursor:'pointer'}}
                                 onClick={()=>{
                                     if(window.location.pathname!=='/main/product') {
                                         navigate('/main/product',{state:'FISH'})
                                     } else {
                                         PubSub.publish('refresh','FISH')
                                     }
                                 }}
                            >
                                Fish
                            </div>
                            <div style={{cursor:'pointer'}}
                                 onClick={()=>{
                                     if(window.location.pathname!=='/main/product') {
                                         navigate('/main/product',{state:'BIRDS'})
                                     } else {
                                         PubSub.publish('refresh','BIRDS')
                                     }
                                 }}
                            >
                                Birds
                            </div>
                        </div>
                    </div>
                </div>
            </Footer>
        </Layout>
    )
}

export default MainPage