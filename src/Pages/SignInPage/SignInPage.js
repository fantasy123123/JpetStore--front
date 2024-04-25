// 登录界面

import './style/SignInPage.css';
import { Divider, Tabs, Typography } from '@arco-design/web-react';
import AccountSignIn from './component/AccountSignIn';
import {Link} from "react-router-dom";

const { TabPane } = Tabs;

const SignInPage = () => {
  return (
    <div className={'background'}>
      <div className={'signInCard'}>
        <div className={'signInCardImage'}>
            <div style={{color:'white',fontSize:40,fontWeight:'bold',marginTop:5,marginLeft:20}}>
                JPETSTORE
            </div>
        </div>
        <div
          style={{
            position: 'absolute',
            left: '73%',
            top: '8%',
            right: '3%',
            bottom: '5%',
            textAlign: 'center',
          }}
        >
          <Tabs defaultActiveTab="accountSignIn" size={'large'} type={'text'} style={{height:'90%',width:'100%'}}>
            <TabPane key="accountSignIn" title="账号登录">
              <Typography.Paragraph
                style={{
                  textAlign: 'center',
                }}
              />
              <Divider />
              <AccountSignIn />
            </TabPane>
          </Tabs>
            <div className="accountWrapper">
                <div className="box">
                    <a href="about:blank" style={{ textDecoration: 'none' }}>
                        <div className="item1">忘记密码</div>
                    </a>
                </div>
                <div className="box">
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <div className="item2">注册账号</div>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
