// 注册界面
import {Button, Checkbox, Form, Input, Message, Radio, Select, Tabs, Typography} from '@arco-design/web-react';
import {IconEmail, IconPhone, IconUnlock, IconUser} from '@arco-design/web-react/icon';
import {useEffect, useRef, useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import './style/RegisterPage.css'
import axios from "axios";

const FormItem = Form.Item;
const Option = Select.Option;
const selectedStyle={width:50,height:31,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(60,192,201,100%)',color:'white'}
const notSelectedStyle={width:50,height:31,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'whitesmoke',color:'#4E5969'}

const { TabPane } = Tabs;
const RegisterPage = () => {
    const navigate=useNavigate()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formRef = useRef();

    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [again,setAgain]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [language,setLanguage]=useState('')
    const [country,setCountry]=useState('')
    const [state,setState]=useState('')
    const [city,setCity]=useState('')
    const [address1,setAddress1]=useState('')
    const [address2,setAddress2]=useState('')
    const [favour,setFavour]=useState('')
    const [listOption,setListOption]=useState(true)
    const [zip,setZip]=useState('')

    useEffect(() => {
        // @ts-expect-error
        formRef.current.setFieldsValue({
            rate: 5,
        });
    }, []);

  return (
    <div className={'RegisterPage'}>
      <div className={'registerCard'}>
        <div className={'registerImage'}>
            <div style={{overflow:"auto",height:'90%',paddingLeft:5,paddingRight:5,marginTop:'4.5%'}}>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <div style={{width:'40%'}}>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>姓
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setLastName(value)}}/>
                        </div>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>名
                            </div>
                            <Input  style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setFirstName(value)}}/>
                        </div>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>邮箱
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setEmail(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>语言偏好
                            </div>
                            <Select
                                style={{ marginBottom:17,marginTop:3,borderRadius:5,width:200}}
                                onChange={value =>{
                                    setLanguage(value)
                                }}
                            >
                                {['中文','English'].map((option, index) => (
                                    <Option key={option} value={option}>
                                        {option}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>最喜爱的小动物
                            </div>
                            <Select
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
                            <Radio.Group onChange={value=>{if(value==='是') setListOption(true);else setListOption(false)}} name='button-radio-group' style={{ marginBottom:15,marginTop:5,display:'flex'}}>
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
                    </div>
                    <div style={{width:'40%'}}>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>邮编
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setZip(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>国家
                            </div>
                            <Input  style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setCountry(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>州
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setState(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>城市
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setCity(value)}}/>
                        </div>

                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>地址1
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setAddress1(value)}}/>
                        </div>
                        <div>
                            <div style={{fontSize:17,color:'grey'}}>
                                <span style={{color:'red'}}>* </span>地址2
                            </div>
                            <Input style={{ marginBottom:17,marginTop:3,borderRadius:5 }} onChange={value=>{setAddress2(value)}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={'registerInformationCard'}>
          <Tabs
            defaultActiveTab="accountRegister"
            size={'large'}
            type={'text'}
            style={{
              position: 'absolute',
              left: '10%',
              top: '8%',
              right: '10%',
              bottom: '5%',
              textAlign: 'center',
            }}
          >
            <TabPane key="accountRegister" title="账号密码信息">
              <Typography.Paragraph
                style={{
                  textAlign: 'center',
                }}
              />

              <hr />

                <div
                    style={{
                        marginTop: '20px',
                    }}
                >
                    <Form autoComplete="off" ref={formRef}>
                        <FormItem field="用户名" rules={[{ required: true }]}>
                            <Input
                                onChange={value=>{setName(value)}}
                                placeholder="请输入用户名"
                                prefix={<IconUser />}
                                style={{
                                    height: '50px',
                                    width: '125%',
                                }}
                            />
                        </FormItem>

                        <FormItem field="联系方式" rules={[{ required: true }]}>
                            <Input
                                onChange={value => {setPhone(value)}}
                                placeholder="请再次输入联系方式"
                                prefix={<IconPhone />}
                                style={{
                                    height: '50px',
                                    width: '125%',
                                }}
                            />
                        </FormItem>

                        <FormItem field="密码" rules={[{ required: true }]}>
                            <Input
                                onChange={value => {setPassword(value)}}
                                placeholder="请输入密码"
                                prefix={<IconUnlock />}
                                style={{
                                    height: '50px',
                                    width: '125%',
                                }}
                            />
                        </FormItem>

                        <FormItem field="确认密码" rules={[{ required: true }]}>
                            <Input
                                onChange={value => {setAgain(value)}}
                                placeholder="请再次输入密码"
                                prefix={<IconUnlock />}
                                style={{
                                    height: '50px',
                                    width: '125%',
                                }}
                            />
                        </FormItem>

                        <FormItem
                            style={{ textAlign: 'left',position:'relative',bottom:10 }}
                            field="readme"
                            triggerPropName="checked"
                            rules={[{ type: 'boolean', true: true }]}
                        >
                            <Checkbox>我已阅读并同意相关协议</Checkbox>
                        </FormItem>

                        <FormItem>
                            <Button
                                type="primary"
                                style={{
                                    fontSize: '20px',
                                    height: '45px',
                                    width: '125%',
                                    borderRadius: '5px',
                                    position: 'relative',
                                    bottom: '25px',
                                }}
                                onClick={async () => {
                                  if (formRef.current) {
                                    try {
                                        if(again===password){
                                            await formRef.current.validate();
                                            axios({
                                                method:'post',
                                                url:'http://127.0.0.1:8091/auth/account',
                                                data:{
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
                                                    "username":name,
                                                    "password":password
                                                }
                                            }).then(
                                                res=>{
                                                    if(res.data.msg==='success'){
                                                        Message.info('注册成功！');
                                                        navigate('/signIn');
                                                    } else {
                                                        Message.error('此账号已注册！')
                                                    }
                                                },
                                                error=>{
                                                    Message.error('Network Error!');
                                                }
                                            )
                                        } else {
                                            Message.error('两次输入的密码不同！')
                                        }
                                    } catch (_) {
                                        console.log(formRef.current.getFieldsError());
                                        Message.error('仍有未填写字段！');
                                    }
                                  }
                                }}
                            >
                                注 册
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </TabPane>
          </Tabs>
          <div
            style={{
              fontSize: '16px',
              position: 'absolute',
              bottom: '2%',
              left: '31%',
            }}
          >
            已有账号？
            <Link to={'/signIn'} style={{ textDecoration: 'none' }}>
              立即登录！
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
