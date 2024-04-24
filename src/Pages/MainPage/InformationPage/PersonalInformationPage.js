import { Outlet,  useNavigate} from "react-router-dom";
import {Button, Card, Descriptions, Message} from '@arco-design/web-react';
import {useEffect, useState} from "react";
import axios from "axios";
axios.defaults.withCredentials=true

const PersonalInformationPage=()=>{
    const navigate=useNavigate()
    const [loading,setLoading]=useState(true)
    const [person,setPerson]=useState({
        "username": null,
        "password": null,
        "email": null,
        "firstName": null,
        "lastName": null,
        "address1": null,
        "address2": null,
        "city": null,
        "state": null,
        "zip": null,
        "country": null,
        "phone":null,
        "favouriteCategoryId": null,
        "languagePreference": null,
        "listOption": null,
})

    useEffect(()=>{
        axios.get('http://127.0.0.1:8091/account/account',{
            headers:{
                "token":sessionStorage.getItem("token")
            }
        }).then(
            res=>{
                setPerson(res.data.data)
                setLoading(false)
            },
            error=>{
                Message.error('获取信息失败!')
                setLoading(false)
            }
        )
    },[])

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

    return (
            <>
                {
                    loading ?
                        <Card style={{width:'100%',height:'100%'}} loading={loading} bordered={false}/>
                        :
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '22%',
                            right: '22%',
                            backgroundColor: 'white',
                        }}>
                            <div style={{width:'85%',marginLeft:'7.5%',marginTop:'8%'}}>
                                <div style={{border:'1px solid lightgrey',padding:'20px 60px 20px 60px',borderRadius:5,textAlign:"center"}}>
                                    <div style={{fontSize:20,fontWeight:'bold'}}>用户信息</div>
                                    <Descriptions column={2} layout='inline-vertical' data={data} style={{marginLeft:'15%',marginTop:20}}/>
                                </div>
                                <Button
                                    type={'primary'}
                                    style={{float:'right',marginTop:'3%'}}
                                    onClick={()=>{navigate('/main/information/edit')}}
                                >修改个人信息</Button>
                            </div>
                        </div>
                }
            </>
    )
}

export default PersonalInformationPage