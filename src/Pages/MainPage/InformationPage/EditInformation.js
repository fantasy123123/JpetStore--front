import {
    Input,
    Select,
    Button,
    Radio, Message, Card
} from '@arco-design/web-react';
import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Option = Select.Option;
const selectedStyle={display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(60,192,201,100%)',color:'white'}
const notSelectedStyle={display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke',color:'#4E5969'}

const EditInformation =()=>{
    const navigate=useNavigate()

    const [zip,setZip]=useState(null)
    const [firstName,setFirstName]=useState(null)
    const [lastName,setLastName]=useState(null)
    const [phone,setPhone]=useState(null)
    const [email,setEmail]=useState(null)
    const [language,setLanguage]=useState(null)
    const [country,setCountry]=useState(null)
    const [state,setState]=useState(null)
    const [city,setCity]=useState(null)
    const [address1,setAddress1]=useState(null)
    const [address2,setAddress2]=useState(null)
    const [favour,setFavour]=useState(null)
    const [listOption,setListOption]=useState(null)
    const [pwd,setPwd]=useState(null)

    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get('http://127.0.0.1:8091/account/account',{
            headers:{
                "token":sessionStorage.getItem("token")
            }
        }).then(
            res=>{
                setZip(res.data.data.zip)
                setPwd(res.data.data.password)
                setFirstName(res.data.data.firstName)
                setLastName(res.data.data.lastName)
                setPhone(res.data.data.phone)
                setEmail(res.data.data.email)
                setLanguage(res.data.data.languagePreference)
                setCountry(res.data.data.country)
                setState(res.data.data.state)
                setCity(res.data.data.city)
                setAddress1(res.data.data.address1)
                setAddress2(res.data.data.address2)
                setFavour(res.data.data.favouriteCategoryId)
                setListOption(res.data.data.listOption)
                setLoading(false)
            },
            error=>{
                Message.error('获取信息失败!')
                setLoading(false)
            }
        )
    },[])

    return (
    <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:750,height:510,backgroundColor:'white',padding:'30px 100px 30px 100px',margin:50,borderRadius:5}}>
            {
                loading?
                    <Card style={{width:'100%',height:'100%'}} bordered={false} loading={loading}/>
                    :
                    <>
                        <div style={{fontSize:25,fontWeight:'bold'}}>
                            请编辑您的信息
                        </div>
                        <div style={{overflow:"auto",height:'80%',paddingLeft:5,paddingRight:5,marginTop:15}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div style={{width:'45%'}}>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>密码
                                        </div>
                                        <Input defaultValue={pwd} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setPwd(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>姓
                                        </div>
                                        <Input defaultValue={lastName} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setLastName(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>名
                                        </div>
                                        <Input defaultValue={firstName} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setFirstName(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>联系方式
                                        </div>
                                        <Input defaultValue={phone} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setPhone(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>邮箱
                                        </div>
                                        <Input defaultValue={email} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setEmail(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>语言偏好
                                        </div>
                                        <Radio.Group
                                            defaultValue={language}
                                            onChange={value=>{
                                                setLanguage(value)
                                            }}
                                            name='button-radio-group'
                                            style={{ marginBottom:15,marginTop:5,display:'flex'}}
                                        >
                                            {['english','中文'].map((item) => {
                                                return (
                                                    <Radio key={item} value={item}>
                                                        {({ checked }) => {
                                                            return (
                                                                <Button tabIndex={-1} key={item} style={checked ? selectedStyle : notSelectedStyle}>
                                                                    {item}
                                                                </Button>
                                                            );
                                                        }}
                                                    </Radio>
                                                );
                                            })}
                                        </Radio.Group>
                                        </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>邮编
                                        </div>
                                        <Input defaultValue={zip} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setZip(value)}}/>
                                    </div>
                                </div>
                                <div style={{width:'45%'}}>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>最喜爱的小动物
                                        </div>
                                        <Select
                                            defaultValue={favour}
                                            style={{ marginBottom:17,marginTop:3,borderRadius:5,width:200}}
                                            onChange={value =>{
                                                setFavour(value)
                                            }}
                                        >
                                            {['CATS','DOGS','FISH','BIRDS','REPTILES'].map((option, index) => (
                                                <Option key={option} value={option}>
                                                    {option}
                                                </Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>偏好商品推荐
                                        </div>
                                        <Radio.Group
                                            defaultValue={listOption?'是':'否'}
                                            onChange={value=>{
                                                if(value==='是')
                                                    setListOption(true)
                                                else setListOption(false)
                                            }}
                                            name='button-radio-group'
                                            style={{ marginBottom:15,marginTop:5,display:'flex'}}
                                        >
                                            {['是','否'].map((item) => {
                                                return (
                                                    <Radio key={item} value={item}>
                                                        {({ checked }) => {
                                                            return (
                                                                <Button tabIndex={-1} key={item} style={checked ? selectedStyle : notSelectedStyle}>
                                                                    {item}
                                                                </Button>
                                                            );
                                                        }}
                                                    </Radio>
                                                );
                                            })}
                                        </Radio.Group>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>国家
                                        </div>
                                        <Input defaultValue={country} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setCountry(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>州
                                        </div>
                                        <Input defaultValue={state} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setState(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>城市
                                        </div>
                                        <Input defaultValue={city} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setCity(value)}}/>
                                    </div>

                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>地址1
                                        </div>
                                        <Input defaultValue={address1} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setAddress1(value)}}/>
                                    </div>
                                    <div>
                                        <div style={{fontSize:17,color:'grey'}}>
                                            <span style={{color:'red'}}>* </span>地址2
                                        </div>
                                        <Input defaultValue={address2} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setAddress2(value)}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex',margin:15,float:'right'}}>
                            <Button onClick={()=>{navigate('/main/information')}} style={{border:'1px solid lightgrey',color:'rgba(60,192,201,100%)',backgroundColor:'white',width:85,height:35,fontSize:16,borderRadius:3,display:"flex",justifyContent:'center',alignItems:'center'}}>返 回</Button>
                            <Button
                                onClick={()=>{
                                    if( pwd !== ''  &&
                                        pwd !== null  &&
                                        pwd !== undefined  &&
                                        firstName !== ''  &&
                                        firstName !==  null &&
                                        firstName !==  undefined &&
                                        lastName !== ''  &&
                                        lastName !==  null &&
                                        lastName !==  undefined &&
                                        email !== null  &&
                                        email !== undefined &&
                                        email !== ''  &&
                                        phone !== ''  &&
                                        phone !== undefined &&
                                        phone !== null &&
                                        language !== ''  &&
                                        language !== undefined &&
                                        language !== null &&
                                        zip !== ''  &&
                                        zip !== undefined &&
                                        zip !== null &&
                                        country !== ''  &&
                                        country  !== undefined &&
                                        country  !== null &&
                                        state !== ''  &&
                                        state !== undefined &&
                                        state !== null &&
                                        city !== ''  &&
                                        city !== undefined &&
                                        city !== null &&
                                        address1 !== ''  &&
                                        address1 !== undefined &&
                                        address1 !== null &&
                                        favour !== ''  &&
                                        favour !== undefined &&
                                        favour !== null &&
                                        listOption !== ''  &&
                                        listOption !== undefined &&
                                        listOption !== null){
                                        axios.put('http://127.0.0.1:8091/account/account',{
                                            "address1":address1,
                                            "address2":address2,
                                            "city":city,
                                            "country":country,
                                            "email":email,
                                            "favouriteCategoryId":favour,
                                            "languagePreference":language,
                                            "firstName":firstName,
                                            "lastName":lastName,
                                            "listOption":listOption,
                                            "phone":phone,
                                            "zip":zip,
                                            "state":state,
                                            "password":pwd
                                        },{
                                            headers:{
                                                "token":sessionStorage.getItem("token")
                                            }
                                        }).then(
                                            res=>{
                                                if(res.data.msg==='success'){
                                                    Message.info('修改信息成功！')
                                                    navigate('/main/information')
                                                }
                                            },
                                            error=>{
                                                Message.error('上传失败!请检查字段或稍后重试。')
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
    )
}

export default EditInformation