import {
    Input,
    Select,
    Button,
    Radio, Message, Card
} from '@arco-design/web-react';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Option = Select.Option;
const selectedStyle={width:50,height:31,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(60,192,201,100%)',color:'white'}
const notSelectedStyle={width:50,height:31,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke',color:'#4E5969'}

const EditInformation =()=>{
    const navigate=useNavigate()

    const [name,setName]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [language,setLanguage]=useState('')
    const [country,setCountry]=useState('')
    const [state,setState]=useState('')
    const [city,setCity]=useState('')
    const [address,setAddress]=useState('')
    const [favour,setFavour]=useState('')
    const [listOption,setListOption]=useState('')

    const [loading,setLoading]=useState(false)

    // useEffect(() => {
    //     axios({
    //         method:'get',
    //         url:'http://192.210.174.146:5000/students/get-info/'+user.user_id,
    //         data:{
    //             userId:user.user_id,
    //         }
    //     }).then(
    //         res=>{
    //             setName(res.data.name)
    //             setSex(res.data.sex)
    //             setLowestSalary(parseInt(res.data.lowestSalary)/1000)
    //             setHighestSalary(parseInt(res.data.highestSalary)/1000)
    //             setPhone(res.data.phone)
    //             setEducation(res.data.education)
    //             setYear(parseInt(res.data.year))
    //             setIntention(res.data.intention)
    //             setIntentionCity(res.data.intentionCity)
    //             setInternship(res.data.internship)
    //             setEmail(res.data.email)
    //             setProfession(res.data.profession)
    //             setEducationExperience(res.data.educationExperience)
    //             setProject(res.data.project)
    //             setAdvantage(res.data.advantage)
    //             setLoading(false)
    //             console.log( setYear(parseInt(res.data.year)))
    //         },
    //         error=>{
    //             Message.error('数据请求失败！')
    //             setLoading(false)
    //         }
    //     )
    // }, []);

    return (
    <div style={{position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor:'rgba(0,0,0,0.3)',zIndex:'10',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:750,height:510,backgroundColor:'white',padding:'30px 100px 30px 100px',margin:100,borderRadius:5}}>
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
                                            <span style={{color:'red'}}>* </span>用户名
                                        </div>
                                        <Input defaultValue={name} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setName(value)}}/>
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
                                        <Input defaultValue={language} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setLanguage(value)}}/>
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
                                            {['猫','狗','鱼','鸟','爬行动物'].map((option, index) => (
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
                                        <Radio.Group defaultValue={listOption} onChange={value=>{setListOption(value)}} name='button-radio-group' style={{ marginBottom:15,marginTop:5,display:'flex'}}>
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
                                            <span style={{color:'red'}}>* </span>地址
                                        </div>
                                        <Input defaultValue={address} style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setAddress(value)}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex',margin:15,float:'right'}}>
                            <Button onClick={()=>{navigate('/main/information')}} style={{border:'1px solid lightgrey',color:'rgba(60,192,201,100%)',backgroundColor:'white',width:85,height:35,fontSize:16,borderRadius:3,display:"flex",justifyContent:'center',alignItems:'center'}}>返 回</Button>
                            <Button
                                onClick={()=>{
                                    if( name !== ''  &&
                                        name !== null  &&
                                        name !== undefined  &&
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
                                        country !== ''  &&
                                        country  !== undefined &&
                                        country  !== null &&
                                        state !== ''  &&
                                        state !== undefined &&
                                        state !== null &&
                                        city !== ''  &&
                                        city !== undefined &&
                                        city !== null &&
                                        address !== ''  &&
                                        address !== undefined &&
                                        address !== null &&
                                        favour !== ''  &&
                                        favour !== undefined &&
                                        favour !== null &&
                                        listOption !== ''  &&
                                        listOption !== undefined &&
                                        listOption !== null){
                                        // axios({
                                        //     method:'put',
                                        //     url:'http://192.210.174.146:5000/students/update-info',
                                        //     data:{
                                        //         "userId": user.user_id,
                                        //         "name": name,
                                        //         "sex": sex,
                                        //         "lowestSalary": lowestSalary,
                                        //         "highestSalary": highestSalary,
                                        //         "phone": phone,
                                        //         "education": education,
                                        //         "year": year,
                                        //         "intention": intention,
                                        //         "intentionCity": intentionCity,
                                        //         "email": email,
                                        //         "profession": profession,
                                        //         "educationExperience": educationExperience,
                                        //         "internship": internship,
                                        //         "project": project,
                                        //         "advantage": advantage,
                                        //     }
                                        // }).then(
                                        //     res=>{
                                        //         if(res.status===200){
                                        //             Message.info('完善信息成功！')
                                        //             navigate('/main/information')
                                        //         }
                                        //     },
                                        //     error=>{
                                        //         if(error.response){
                                        //             if(error.response.status===404){
                                        //                 Message.error('请求的资源错误！')
                                        //             }
                                        //             if (error.response.status===500){
                                        //                 Message.error('服务器内部错误！')
                                        //             }
                                        //         } else {
                                        //             Message.error('Network Error!')
                                        //         }
                                        //     }
                                        // )
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