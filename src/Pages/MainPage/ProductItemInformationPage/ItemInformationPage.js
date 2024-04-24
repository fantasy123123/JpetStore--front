import cat from "../ProductListPage/images/cat.png";
import {Button, Descriptions, Message} from "@arco-design/web-react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const data={
    productID:1,
    categoryID:'cat',
    name:'猫猫',
    text:'可爱的猫猫',
    image:cat,
    price:100
}

const column=[
    {
        label:'种类',
        value:data.categoryID
    },
    {
        label:'名称',
        value:data.name
    },
    {
        label:'宠物ID',
        value:data.productID
    },
    {
        label:'描述',
        value:data.text
    },
    {
        label:'价格',
        value:data.price+'元/只'
    }
]

const ItemInformationPage=()=>{
    const navigate=useNavigate()
    const [number,setNumber]=useState(1)

    return <div style={{position:'absolute',top:0,bottom:0,left:0,right:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'70%',height:'80%',backgroundColor:'white',borderRadius:10}}>
            <div style={{display:'flex',justifyContent:'space-between',width:'90%',marginLeft:'5%',marginTop:'5%',height:'70%'}}>
                <img alt={data.name} src={data.image} style={{width:'50%',height:'90%'}}/>
                <div style={{width:'40%',height:'90%',marginLeft:'5%'}}>
                    <div style={{fontSize:25,fontWeight:'bold'}}>商品信息</div>
                    <Descriptions
                        column={1}
                        data={column}
                        labelStyle={{ paddingRight: 36 ,fontSize:20}}
                        valueStyle={{fontSize:20}}
                        style={{marginTop:50}}
                        size={'large'}
                    />
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',width:'90%',marginLeft:'5%',height:'20%'}}>
                <div>
                    <div  style={{fontSize:20,display:'flex'}}>
                        <div>
                            数量：{number} 只
                        </div>
                        <div style={{marginLeft:15}}>
                            <Button
                                onClick={()=>{setNumber(number+1)}}
                                shape={"circle"}
                                type={'primary'}
                                status={"success"}
                                style={{marginLeft:10}}
                            >
                                +1
                            </Button>
                            <Button
                                onClick={()=>{
                                    if(number>1){
                                        setNumber(number-1)
                                    }
                                    else {
                                        Message.info('数量最少为1只！')
                                    }
                                }}
                                shape={"circle"}
                                type={'primary'}
                                status={"danger"}
                                style={{marginLeft:10}}
                            >
                                -1
                            </Button>
                        </div>
                    </div>
                    <div style={{fontSize:20,marginTop:5}}>
                        总价：{number*data.price} 元
                    </div>
                </div>
                <div>
                    <Button type={"primary"} style={{marginRight:30}}>
                        添加至购物车
                    </Button>
                    <Button onClick={()=>{
                        window.history.go(-1)
                    }}>
                        返回
                    </Button>
                </div>
            </div>
        </div>
    </div>
}

export default ItemInformationPage