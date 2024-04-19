// 登陆界面：通过账号密码登录

import { Button, Form, Input, Message } from '@arco-design/web-react';
import {IconSafe, IconUnlock, IconUser} from '@arco-design/web-react/icon';
import {useEffect, useRef, useState} from 'react';
import { useNavigate} from "react-router-dom";
// import axios from "axios";

const FormItem = Form.Item;

const AccountSignIn = () => {
    let name=''
    let password=''
    let inputCode=''
    let code=''

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate=useNavigate()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formRef = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // @ts-expect-error
    formRef.current.setFieldsValue({
      rate: 5,
    });
  }, []);

    function PicAuthCode() {
        const [config]=useState({
            contentWidth: 100,
            contentHeight: 35,
            backgroundColorMin: 180,
            backgroundColorMax:240,
            fontSizeMin: 25,
            fontSizeMax: 30,
            colorMin: 50,
            colorMax: 160,
            lineColorMin:40,
            lineColorMax: 180,
            dotColorMin: 0,
            dotColorMax: 255,
            textStyle:{fontSize:'12px',color:'gray',marginLeft:'6px',cursor:'pointer',padding:'5px',userSelect:"none"}
        })
        const [identifyCode,setIdentifyCode]=useState('')

        const canvasRef=useRef()

        useEffect(()=>{
            refresh()
        },[])

        useEffect(()=>{
            identifyCode && drawPic()
        })

        PicAuthCode.defaultProps={
            setCode:()=>""      // 更新验证码的函数
        }

        const drawPic=()=>{
            let canvas = canvasRef.current
            let ctx = canvas.getContext('2d')
            ctx.fillStyle = randomColor(config.backgroundColorMin,config.backgroundColorMax)
            ctx.strokeStyle = randomColor(config.backgroundColorMin, config.backgroundColorMax)
            ctx.fillRect(0, 0, config.contentWidth,config.contentHeight)
            ctx.strokeRect(0,0,config.contentWidth,config.contentHeight)
            for (let i = 0; i < identifyCode.length; i++) {
                drawText(ctx,identifyCode[i], i)
            }
            drawLine(ctx)
            drawDot(ctx)
        }
        const randomNum=(min, max)=>{
            return Math.floor(Math.random() * (max - min) + min)
        }
        const randomColor=(min, max)=>{
            let r = randomNum(min, max)
            let g = randomNum(min, max)
            let b = randomNum(min, max)
            return 'rgb(' + r + ',' + g + ',' + b + ')'
        }
        const drawText=(ctx, txt, i)=>{
            ctx.fillStyle = randomColor(config.colorMin,config.colorMax)
            ctx.font = randomNum(config.fontSizeMin,config.fontSizeMax) + 'px SimHei'
            ctx.textBaseline = 'alphabetic'
            let x = (i + 1) * (config.contentWidth / (identifyCode.length + 1))
            let y = randomNum(config.fontSizeMax, config.contentHeight - 12)
            let deg = randomNum(-45, 45)
            ctx.translate(x, y)
            ctx.rotate(deg * Math.PI / 180)
            ctx.fillText(txt, 0, 0)
            ctx.rotate(-deg * Math.PI / 180)
            ctx.translate(-x, -y)
        }
        const drawLine=(ctx)=>{
            for (let i = 0; i < 8; i++) {
                ctx.strokeStyle = randomColor(config.lineColorMin,config.lineColorMax)
                ctx.beginPath()
                ctx.moveTo(randomNum(0, config.contentWidth), randomNum(0, config.contentHeight)) //设置起点x,y
                ctx.lineTo(randomNum(0,config.contentWidth), randomNum(0, config.contentHeight)) //绘制直线 x,y 一条当前位置到x,y点的直线
                ctx.stroke()
            }
        }
        const drawDot=(ctx)=>{
            for (let i = 0; i < 100; i++) {
                ctx.fillStyle = randomColor(0, 255)
                ctx.beginPath()
                ctx.arc(randomNum(0, config.contentWidth), randomNum(0, config.contentHeight), 1, 0, 2 * Math.PI)
                ctx.fill()
            }
        }
        const refresh=()=>{
            const words='AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789'
            let tempCode=''
            for(let i=0;i<4;i++){
                tempCode+=words[Math.floor( Math.random()*52)]
            }
            code=tempCode
            setIdentifyCode(code)
            console.log(code)
        }

        return (
            <canvas
                ref={canvasRef}
                width={config.contentWidth}
                height={config.contentHeight}
                onClick={refresh}
            />
        )
    }

    return (
    <>
      <Form autoComplete="off" ref={formRef}>
        <FormItem field="用户名/邮箱" rules={[{ required: true }]}>
          <Input
              onChange={value=>{name=value}}
            placeholder="请输入用户名/邮箱"
            prefix={<IconUser />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="密码" rules={[{ required: true }]}>
          <Input.Password
              onChange={value=>{password=value}}
            placeholder="请输入密码"
            prefix={<IconUnlock />}
            style={{
              height: '50px',
              width: '125%',
            }}
          />
        </FormItem>

        <FormItem field="验证码" rules={[{ required: true }]}>
          <Input
              onChange={value=>{inputCode=value}}
              placeholder="请输入验证码"
              prefix={<IconSafe />}
              suffix={<PicAuthCode/>}
              style={{
                height: '50px',
                width: '125%',
              }}
          />
        </FormItem>
          <br />
        <FormItem>
          <Button
            type="primary"
            style={{
              fontSize: '20px',
              height: '50px',
              width: '125%',
              borderRadius: '5px',
            }}
            // onClick={async () => {
            //   if(inputCode===code) {
            //       if (formRef.current) {
            //           try {
            //               await formRef.current.validate();
            //               axios({
            //                   method:'post',
            //                   url:'http://192.210.174.146:5000/users/login-with-account',
            //                   data:{
            //                       "login": name,
            //                       "password": password,
            //                   }
            //               }).then(
            //                   res=>{
            //                       if(res.status===200){
            //                           Message.info('登录成功！');
            //                           if(res.data.identity===null){
            //                               navigate('/guide/identity',{state:res.data})
            //                           } else {
            //                               navigate('/main/home',{state:res.data});
            //                           }
            //                       }
            //                   },
            //                   error=>{
            //                       if(error.response){
            //                           if(error.response.status===404){
            //                               Message.error('登录失败！请检查用户名/邮箱与密码是否正确。');
            //                           }
            //                           else {
            //                               Message.error('Network Error!');
            //                           }
            //                       }
            //                       else {
            //                           Message.error('Network Error!');
            //                       }
            //                   }
            //               )
            //           } catch (_) {
            //               console.log(formRef.current.getFieldsError());
            //               Message.error('仍有未填写字段！');
            //           }
            //       }
            //   } else {
            //       Message.error('图片验证码错误！')
            //   }
            // }}
          >
            登 录
          </Button>
        </FormItem>
      </Form>
    </>
  );
};

export default AccountSignIn;
