import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Input, Message, Radio, Select} from "@arco-design/web-react";

const EditAddress=()=>{
    const navigate=useNavigate()

    const [billAddress1,setBillAddress1]=useState('')
    const [billAddress2,setBillAddress2]=useState('')
    const [billCity,setBillCity]=useState('')
    const [billCountry,setBillCountry]=useState('')
    const [billState,setBillState]=useState('')
    const [billToFirstName,setBillToFirstName]=useState('')
    const [billToLastName,setBillToLastName]=useState('')
    const [billZip,setBillZip]=useState('')
    const [shipAddress1,setShipAddress1]=useState('')
    const [shipAddress2,setShipAddress2]=useState('')
    const [shipCity,setShipCity]=useState('')
    const [shipCountry,setShipCountry]=useState('')
    const [shipState,setShipState]=useState('')
    const [shipToFirstName,setShipToFirstName]=useState('')
    const [shipToLastName,setShipToLastName]=useState('')
    const [shipZip,setShipZip]=useState('')
    const [cardType,setCardType]=useState('')
    const [creditCard,setCreditCard]=useState('')
    const [expiryDate,setExpiryDate]=useState('')

    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8091/order/orderTemplate`,{
            headers:{
                "token":sessionStorage.getItem("token")
            }
        }).then(
            res=>{
                setBillAddress1(res.data.data.billAddress1)
                setBillAddress2(res.data.data.billAddress2)
                setBillCity(res.data.data.billCity)
                setBillCountry(res.data.data.billCountry)
                setBillState(res.data.data.billState)
                setBillToFirstName(res.data.data.billToFirstName)
                setBillToLastName(res.data.data.billToLastName)
                setBillZip(res.data.data.billZip)
                setShipAddress1(res.data.data.shipAddress1)
                setShipAddress2(res.data.data.shipAddress2)
                setShipCity(res.data.data.shipCity)
                setShipCountry(res.data.data.shipCountry)
                setShipState(res.data.data.shipState)
                setShipToFirstName(res.data.data.shipToFirstName)
                setShipToLastName(res.data.data.shipToLastName)
                setShipZip(res.data.data.shipZip)
                setCardType(res.data.data.cardType)
                setCreditCard(res.data.data.creditCard)
                setExpiryDate(res.data.data.expiryDate)

                setLoading(false)
            },
            error=>{
                Message.error('获取信息失败!')
                setLoading(false)
            }
        )
    },[])

    return   <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:750,height:550,backgroundColor:'white',padding:'30px 100px 30px 100px',margin:50,borderRadius:5}}>
            {
                loading?
                    <Card style={{width:'100%',height:'100%'}} bordered={false} loading={loading}/>
                    :
                    <>
                        <div style={{fontSize:25,fontWeight:'bold'}}>
                            请编辑地址信息
                        </div>
                        <div style={{overflow:"auto",height:'80%',paddingLeft:5,paddingRight:5,marginTop:15}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div style={{width:'45%'}}>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>billAddress1
                                        </div>
                                        <Input defaultValue={billAddress1} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setBillAddress1(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>billAddress2
                                        </div>
                                        <Input defaultValue={billAddress2} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setBillAddress2(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>billCity
                                        </div>
                                        <Input defaultValue={billCity} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setBillCity(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>billCountry
                                        </div>
                                        <Input defaultValue={billCountry} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setBillCountry(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>billState
                                        </div>
                                        <Input defaultValue={billState} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setBillState(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>billToFirstName
                                        </div>
                                        <Input defaultValue={billToFirstName} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setBillToFirstName(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>billToLastName
                                        </div>
                                        <Input defaultValue={billToLastName} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setBillToLastName(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>billZip
                                        </div>
                                        <Input defaultValue={billZip} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setBillZip(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>cardType
                                        </div>
                                        <Input defaultValue={cardType} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setCardType(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>expiryDate
                                        </div>
                                        <Input defaultValue={expiryDate} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setExpiryDate(value)}}/>
                                    </div>
                                </div>

                                <div style={{width:'45%'}}>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>shipAddress1
                                        </div>
                                        <Input defaultValue={shipAddress1} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setShipAddress1(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>shipAddress2
                                        </div>
                                        <Input defaultValue={shipAddress2} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setShipAddress2(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>shipCity
                                        </div>
                                        <Input defaultValue={shipCity} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setShipCity(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>shipCountry
                                        </div>
                                        <Input defaultValue={shipCountry} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setShipCountry(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>shipState
                                        </div>
                                        <Input defaultValue={shipState} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setShipState(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>shipToFirstName
                                        </div>
                                        <Input defaultValue={shipToFirstName} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setShipToFirstName(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>shipToLastName
                                        </div>
                                        <Input defaultValue={shipToLastName} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setShipToLastName(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>shipZip
                                        </div>
                                        <Input defaultValue={shipZip} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setShipZip(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>creditCard
                                        </div>
                                        <Input defaultValue={creditCard} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setCreditCard(value)}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex',margin:15,float:'right'}}>
                            <Button onClick={()=>{navigate('/main/information')}} style={{border:'1px solid lightgrey',color:'rgba(60,192,201,100%)',backgroundColor:'white',width:85,height:35,fontSize:16,borderRadius:3,display:"flex",justifyContent:'center',alignItems:'center'}}>返 回</Button>
                            <Button
                                onClick={()=>{
                                    if(
                                        billAddress1 !== ''  &&
                                        billAddress1 !== null  &&
                                        billAddress1 !== undefined  &&
                                        billAddress2 !== ''  &&
                                        billAddress2  !==  null &&
                                        billAddress2  !==  undefined &&
                                        billCity !== ''  &&
                                        billCity  !==  null &&
                                        billCity  !==  undefined &&
                                        billCountry !== null  &&
                                        billCountry !== undefined &&
                                        billCountry !== ''  &&
                                        billState !== ''  &&
                                        billState !== undefined &&
                                        billState!== null &&
                                        billToFirstName !== ''  &&
                                        billToFirstName !== undefined &&
                                        billToFirstName !== null &&
                                        billToLastName !== ''  &&
                                        billToLastName!== undefined &&
                                        billToLastName !== null &&
                                        billZip!== ''  &&
                                        billZip  !== undefined &&
                                        billZip !== null &&
                                        shipAddress1 !== ''  &&
                                        shipAddress1 !== null  &&
                                        shipAddress1 !== undefined  &&
                                        shipAddress2 !== ''  &&
                                        shipAddress2  !==  null &&
                                        shipAddress2  !==  undefined &&
                                        shipCity !== ''  &&
                                        shipCity  !==  null &&
                                        shipCity  !==  undefined &&
                                        shipCountry !== null  &&
                                        shipCountry !== undefined &&
                                        shipCountry !== ''  &&
                                        shipState !== ''  &&
                                        shipState !== undefined &&
                                        shipState!== null &&
                                        shipToFirstName !== ''  &&
                                        shipToFirstName !== undefined &&
                                        shipToFirstName !== null &&
                                        shipToLastName !== ''  &&
                                        shipToLastName!== undefined &&
                                        shipToLastName !== null &&
                                        shipZip!== ''  &&
                                        shipZip  !== undefined &&
                                        shipZip !== null &&
                                        creditCard!== ''  &&
                                        creditCard  !== undefined &&
                                        creditCard !== null &&
                                        cardType !== ''  &&
                                        cardType !== undefined &&
                                        cardType !== null &&
                                        expiryDate !== ''  &&
                                        expiryDate !== undefined &&
                                        expiryDate !== null
                                    ){
                                        axios.put('http://127.0.0.1:8091/order/orderTemplate',{
                                            "billAddress1":billAddress1,
                                            "billAddress2":billAddress2,
                                            "billCity":billCity,
                                            "billCountry":billCountry,
                                            "billState":billState,
                                            "billToFirstName":billToFirstName,
                                            "billToLastName":billToLastName,
                                            "billZip":billZip,
                                            "cardType":cardType,
                                            "creditCard":creditCard,
                                            "expiryDate":expiryDate,
                                            "shipAddress1":shipAddress1,
                                            "shipAddress2":shipAddress2,
                                            "shipCountry":shipCountry,
                                            "shipCity":shipCity,
                                            "shipState":shipState,
                                            "shipToFirstName":shipToFirstName,
                                            "shipToLastName":shipToLastName,
                                            "shipZip":shipZip,
                                        },{
                                            headers:{
                                                "token":sessionStorage.getItem("token")
                                            }
                                        }).then(
                                            res=>{
                                                Message.info('修改信息成功！')
                                                navigate('/main/information')
                                            },
                                            error=>{
                                                Message.error('修改信息失败！')
                                            }
                                        )
                                    } else {
                                        Message.error('仍有未填写项！')
                                    }
                                }}
                                style={{color:'white',backgroundColor:'rgba(60,192,201,100%)',marginLeft:30,width:85,height:35,fontSize:16,borderRadius:3,display:"flex",justifyContent:'center',alignItems:'center'}}>完 成</Button>
                        </div>
                    </>
            }
        </div>
    </div>
}

export default EditAddress