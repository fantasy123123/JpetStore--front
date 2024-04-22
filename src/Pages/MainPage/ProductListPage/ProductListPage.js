import cat from './images/cat.png'
import './productList.css'
import {useNavigate} from "react-router-dom";
import {Descriptions} from "@arco-design/web-react";

const data=[
    {
        productID:1,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100
    },
    {
        productID:2,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100
    },
    {
        productID:3,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100
    },
    {
        productID:4,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100
    },
    {
        productID:5,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100
    },
    {
        productID:6,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100
    },
    {
        productID:6,
        categoryID:'cat',
        name:'猫猫',
        text:'可爱的猫猫',
        image:cat,
        price:100
    }
]

const ProductListPage=()=>{
    function ProductList(){
        const navigate=useNavigate()
        return <>
            {
                data.map(value => {
                    const column=[
                        {
                            label:'种类',
                            value:value.categoryID
                        },
                        {
                            label:'名字',
                            value:value.name
                        },
                        {
                            label:'价格',
                            value:value.price+'元/只'
                        }
                    ]
                    return <div onClick={()=>{navigate('/main/product/information')}} className={'card'} style={{cursor:'pointer',width:'31%',height:'42%',border:'1px solid lightgrey',borderRadius:5,margin:'1.1%'}}>
                        <div style={{width:'100%',height:'70%',display:'flex'}}>
                            <img alt={value.name} src={value.image} style={{height:'100%',width:'60%'}}/>
                            <div style={{height:'100%',width:'40%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <Descriptions
                                    column={1}
                                    data={column}
                                    labelStyle={{fontSize:17}}
                                    valueStyle={{fontSize:17,paddingLeft:20}}
                                    style={{marginTop:20}}
                                />
                            </div>
                        </div>
                        <div style={{width:'100%',height:'30%'}}>
                            <div style={{margin:'2.5% 3% 1% 3%',fontSize:16}}>
                                {value.text}
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    }

    return <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        {
            data.length===0?
                <div style={{fontSize:30,fontWeight:'bold',textAlign:'center',width:'85%',height:'80%',backgroundColor:"white",borderRadius:20,padding:'2%'}}>
                    很抱歉，未找到您所搜索的商品！
                </div>
                :
                <div style={{width:'85%',height:'80%',backgroundColor:"white",borderRadius:20,overflow:'auto',padding:'2%',display:'flex',flexWrap:'wrap',justifyContent:'flex-start'}}>
                    <ProductList />
                </div>
        }
    </div>
}

export default ProductListPage