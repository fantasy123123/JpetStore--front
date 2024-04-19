import { Outlet,  useNavigate} from "react-router-dom";
import {Button, Descriptions} from '@arco-design/web-react';

const person= {
        "username": "j2ee",
        "password": "j2ee",
        "email": "yourname@yourdomain.com",
        "firstName": "ABC",
        "lastName": "XYX",
        "address1": "901 San Antonio Road",
        "address2": "MS UCUP02-206",
        "city": "Palo Alto",
        "state": "CA",
        "zip": "94303",
        "country": "China",
        "phone": "555-555-5555",
        "favouriteCategoryId": "DOGS",
        "languagePreference": "english",
        "listOption": true,
}

function getListOption(){
    if (person.listOption) return '推荐'
    else return '不推荐'
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
        label:'地址',
        value:person.address1+','+person.address2
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

const PersonalInformationPage=()=>{
    const navigate=useNavigate()

    return (
        <>
            <Outlet />
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '22%',
                right: '22%',
                backgroundColor: 'white',
            }}>
                <div style={{width:'85%',marginLeft:'7.5%',marginTop:'8%'}}>
                    <div style={{border:'1px solid lightgrey',padding:'30px 60px 20px 60px',borderRadius:5}}>
                        <Descriptions column={2} layout='inline-vertical' title='用户信息' data={data} />
                    </div>
                    <Button
                        type={'primary'}
                        style={{float:'right',marginTop:'3%'}}
                        onClick={()=>{navigate('/main/information/edit')}}
                    >修改个人信息</Button>
                </div>
            </div>
        </>
    )
}

export default PersonalInformationPage