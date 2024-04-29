import { useNavigate} from "react-router-dom";
import {Button, Card, Descriptions, Message} from '@arco-design/web-react';
import {useEffect, useState} from "react";
import axios from "axios";
axios.defaults.withCredentials=true

const PersonalInformationPage=()=>{
    const navigate=useNavigate()
    const [loading,setLoading]=useState(true)
    const [person,setPerson]=useState({
        "username": '',
        "password": '',
        "email": '',
        "firstName": '',
        "lastName": '',
        "address1": '',
        "address2": '',
        "city": '',
        "state": '',
        "zip": '',
        "country": '',
        "phone":'',
        "favouriteCategoryId": '',
        "languagePreference": '',
        "listOption": '',
})
    const [address,setAddress]=useState({
        "billAddress1":'',
        "billAddress2":'',
        "billCity":'',
        "billCountry":'',
        "billState":'',
        "billToFirstName":'',
        "billToLastName":'',
        "billZip":'',
        "cardType":'',
        "creditCard":'',
        "expiryDate":'',
        "shipAddress1":'',
        "shipAddress2":'',
        "shipCity":'',
        "shipCountry":'',
        "shipState":'',
        "shipToFirstName":'',
        "shipToLastName":'',
        "shipZip":'',
    })

    const [get,setGet]=useState(false)

    useEffect(()=>{
        axios.get('http://127.0.0.1:8091/account/account',{
            headers:{
                "token":sessionStorage.getItem("token")
            }
        }).then(
            res=>{
                setPerson(res.data.data)
                setGet(true)
            },
            error=>{
                Message.error('获取信息失败!')
                setLoading(false)
            }
        )
    },[])

    useEffect(()=>{
            axios.get(`http://127.0.0.1:8091/order/orderTemplate`,{
                headers:{
                    "token":sessionStorage.getItem("token")
                }
            }).then(
                res=>{
                   setTimeout(()=>{
                       if(res.data.data.billAddress1!==undefined&&res.data.data.shipAddress1!==undefined){
                           setAddress(res.data.data)
                           setLoading(false)
                       } else {
                           setAddress({
                               "billAddress1":person.address1,
                               "billAddress2":person.address2,
                               "billCity":person.city,
                               "billCountry":person.country,
                               "billState":person.state,
                               "billToFirstName":person.firstName,
                               "billToLastName":person.lastName,
                               "billZip":person.zip,
                               "cardType":"",
                               "creditCard":"",
                               "expiryDate":"",
                               "shipAddress1":person.address1,
                               "shipAddress2":person.address2,
                               "shipCountry":person.country,
                               "shipCity":person.city,
                               "shipState":person.state,
                               "shipToFirstName":person.firstName,
                               "shipToLastName":person.lastName,
                               "shipZip":person.zip,
                           })
                           axios.put('http://127.0.0.1:8091/order/orderTemplate',{
                               "billAddress1":person.address1,
                               "billAddress2":person.address2,
                               "billCity":person.city,
                               "billCountry":person.country,
                               "billState":person.state,
                               "billToFirstName":person.firstName,
                               "billToLastName":person.lastName,
                               "billZip":person.zip,
                               "cardType":"",
                               "creditCard":"",
                               "expiryDate":"",
                               "shipAddress1":person.address1,
                               "shipAddress2":person.address2,
                               "shipCountry":person.country,
                               "shipCity":person.city,
                               "shipState":person.state,
                               "shipToFirstName":person.firstName,
                               "shipToLastName":person.lastName,
                               "shipZip":person.zip,
                           },{
                               headers:{
                                   "token":sessionStorage.getItem("token")
                               }
                           }).then(
                               res=>{
                                   Message.info('地址已设置为默认地址！')
                                   setLoading(false)
                               },
                               error=>{
                                   setLoading(false)
                               }
                           )
                       }
                   },10)
                },
                error=>{
                    setAddress({
                        "billAddress1":person.address1,
                        "billAddress2":person.address2,
                        "billCity":person.city,
                        "billCountry":person.country,
                        "billState":person.state,
                        "billToFirstName":person.firstName,
                        "billToLastName":person.lastName,
                        "billZip":person.zip,
                        "cardType":"",
                        "creditCard":"",
                        "expiryDate":"",
                        "shipAddress1":person.address1,
                        "shipAddress2":person.address2,
                        "shipCountry":person.country,
                        "shipCity":person.city,
                        "shipState":person.state,
                        "shipToFirstName":person.firstName,
                        "shipToLastName":person.lastName,
                        "shipZip":person.zip,
                    })
                    setLoading(false)
                }
            )
    },[get])

    function getListOption(){
        if (person.listOption===true) return '推荐'
        else if(person.listOption===false) return '不推荐'
        else return null
    }

    const data=[
        {
            label:'用户名',
            value:person.username
        },
        {
            label:'国家',
            value:person.country
        },
        {
            label:'姓',
            value:person.lastName
        },
        {
            label:'州',
            value:person.state
        },
        {
            label:'名',
            value:person.firstName
        },
        {
            label:'城市',
            value:person.city
        },
        {
            label:'联系方式',
            value:person.phone
        },
        {
            label:'邮箱',
            value:person.email
        },
        {
            label:'地址1',
            value:person.address1
        },
        {
            label:'地址2',
            value:person.address2
        },
        {
            label:'邮编',
            value:person.zip
        },
        {
            label:'最喜爱的小动物',
            value:person.favouriteCategoryId
        },
        {
            label:'语言偏好',
            value:person.languagePreference
        },
        {
            label: '偏好商品推荐',
            value:getListOption()
        },
    ]

    const data2=[
        {
            label:'billAddress1',
            value:address.billAddress1
        },
        {
            label:'shipAddress1',
            value:address.shipAddress1
        },
        {
            label:'billAddress2',
            value:address.billAddress2
        },
        {
            label:'shipAddress2',
            value:address.shipAddress2
        },
        {
            label:'billCity',
            value:address.billCity
        },
        {
            label:'shipCity',
            value:address.shipCity
        },
        {
            label:'billCountry',
            value:address.billCountry
        },
        {
            label:'shipCountry',
            value:address.shipCountry
        },
        {
            label:'billState',
            value:address.billState
        },
        {
            label:'shipState',
            value:address.shipState
        },
        {
            label:'billToFirstName',
            value:address.billToFirstName
        },
        {
            label:'shipToFirstName',
            value:address.shipToFirstName
        },
        {
            label:'billToLastName',
            value:address.billToLastName
        },
        {
            label: 'shipToLastName',
            value:address.shipToLastName
        },
        {
            label:'billZip',
            value:address.billZip
        },
        {
            label:'shipZip',
            value:address.shipZip
        },
        {
            label:'cardType',
            value:address.cardType
        },
        {
            label:'creditCard',
            value:address.creditCard
        },
        {
            label:'expiryDate',
            value:address.expiryDate
        },
    ]

    return (
            <>
                {
                    loading ?
                        <Card style={{width:'100%',height:'100%'}} loading={loading} bordered={false}/>
                        :
                        <div style={{
                            width:'60%',
                            marginLeft:'20%',
                            backgroundColor: 'white',
                        }}>
                            <Button
                                type={'primary'}
                                style={{float:'right',marginTop:'3%',marginRight:'7.5%'}}
                                onClick={()=>{navigate('/main/information/edit')}}
                            >
                                修改个人信息
                            </Button>
                            <div style={{width:'85%',marginLeft:'7.5%',marginTop:'8%'}}>
                                <div style={{border:'1px solid lightgrey',padding:'20px 60px 20px 60px',borderRadius:5,textAlign:"center"}}>
                                    <div style={{fontSize:20,fontWeight:'bold'}}>用户信息</div>
                                    <Descriptions column={2} layout='inline-vertical' data={data} style={{marginLeft:'15%',marginTop:20}}/>
                                </div>
                            </div>
                            <Button
                                type={'primary'}
                                status={'danger'}
                                onClick={()=>{
                                    axios.delete(`http://127.0.0.1:8091/order/orderTemplate`,{
                                        headers:{
                                            "token":sessionStorage.getItem("token")
                                        }
                                    }).then(
                                        res=>{
                                            Message.info('删除成功！恢复为默认地址。')
                                            setAddress({
                                                "billAddress1":person.address1,
                                                "billAddress2":person.address2,
                                                "billCity":person.city,
                                                "billCountry":person.country,
                                                "billState":person.state,
                                                "billToFirstName":person.firstName,
                                                "billToLastName":person.lastName,
                                                "billZip":person.zip,
                                                "cardType":"",
                                                "creditCard":"",
                                                "expiryDate":"",
                                                "shipAddress1":person.address1,
                                                "shipAddress2":person.address2,
                                                "shipCountry":person.country,
                                                "shipCity":person.city,
                                                "shipState":person.state,
                                                "shipToFirstName":person.firstName,
                                                "shipToLastName":person.lastName,
                                                "shipZip":person.zip,
                                            })
                                        },
                                        error=>{
                                            Message.error('删除失败！')
                                        }
                                    )}
                                }
                                style={{float:'right',marginTop:'3%',marginRight:'7.5%'}}
                            >
                                删除此地址
                            </Button>
                            <Button
                                type={'primary'}
                                style={{float:'right',marginTop:'3%',marginRight:'2%'}}
                                onClick={()=>{navigate('/main/address/edit',{state:person.username})}}
                            >
                                修改地址
                            </Button>
                            <div style={{width:'85%',marginLeft:'7.5%',marginTop:'8%'}}>
                                <div style={{border:'1px solid lightgrey',padding:'20px 60px 20px 60px',borderRadius:5,textAlign:"center"}}>
                                    <div style={{fontSize:20,fontWeight:'bold'}}>shipAddress and BillAddress</div>
                                    <Descriptions column={2} layout='inline-vertical' data={data2} style={{marginLeft:'15%',marginTop:20}}/>
                                </div>

                            </div>
                            <div style={{width:'100%',height:30}}></div>
                        </div>
                }
            </>
    )
}

export default PersonalInformationPage