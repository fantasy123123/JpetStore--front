import {Button, Input, Layout, Popover} from "@arco-design/web-react";
import {Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Header = Layout.Header;
const Content = Layout.Content;

const MainPage=()=>{
    const navigate=useNavigate()

    return (
        <Layout>
            <Header style={{position:'absolute',left:0,right:0,top:0,bottom:'90%',backgroundColor:'lightskyblue',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{height:'100%',marginRight:'16%',width:'15%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:30,color:'whitesmoke',cursor:'pointer'}}>
                    <span onClick={()=>{navigate('/main/home')}}>
                        JPETSTORE
                    </span>
                </div>
                <div id={'buttonGroup'} style={{display:'flex',alignItems:'center',fontSize:25,width:'40%',height:'100%',justifyContent:'center'}}>
                    <Input
                        style={{ width: 300,height:'50%',borderRadius:'5px 0px 0px 5px'}}
                    />
                    <Button style={{ height:'50%',borderRadius:'0px 5px 5px 0px'}} type={"primary"}>搜索</Button>
                </div>
                <div style={{width:'30%',paddingRight:'1%',display:"flex",alignItems:'center',justifyContent:'right',fontSize:15}}>
                    <div style={{color:'whitesmoke',cursor:'pointer'}}>
                        <Popover
                            content={
                            <div style={{textAlign:'center',fontSize:15}}>
                                <div style={{cursor:'pointer',margin:5}} onClick={()=>{navigate('/main/product')}}>
                                    猫
                                </div>
                                <div style={{cursor:'pointer',margin:5}} onClick={()=>{navigate('/main/product')}}>
                                    狗
                                </div>
                                <div style={{cursor:'pointer',margin:5}} onClick={()=>{navigate('/main/product')}}>
                                    鸟
                                </div>
                                <div style={{cursor:'pointer',margin:5}} onClick={()=>{navigate('/main/product')}}>
                                    鱼
                                </div>
                                <div style={{cursor:'pointer',margin:5}} onClick={()=>{navigate('/main/product')}}>
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
                        <span onClick={()=>{navigate('/main/information')}}>
                            个人信息
                        </span>
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
                    <div style={{width:2,height:20,backgroundColor:'whitesmoke',margin:10}}/>
                    <div style={{color:'whitesmoke',cursor:'pointer'}}>
                        <span onClick={()=>{navigate('/signIn')}}>
                            退出登录
                        </span>
                    </div>
                </div>
            </Header>
            <Content style={{position:'absolute',left:0,top:'10%',bottom:0,right:0,display:'flex'}}>
                <Outlet />
            </Content>
        </Layout>
    )
}

export default MainPage