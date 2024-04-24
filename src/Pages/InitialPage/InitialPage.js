import jpetStore from './images/jpetstore.jpg'
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const InitialPage=()=>{
    const navigate=useNavigate()

    useEffect(()=>{
        navigate('/signIn')
    })

    return <div style={{position:'absolute',top:0,bottom:0,right:0,left:0,display:'flex',justifyContent:'center',alignItems:'center'}}>
        {/*<div style={{width:'30%',height:'75%',backgroundColor:'white',borderRadius:15,textAlign:'center'}}>*/}
        {/*    <div style={{marginTop:'7%',fontSize:30,fontWeight:'bold'}}>Welcome To JpetStore！</div>*/}
        {/*    <br/>*/}
        {/*    <img src={jpetStore} alt={'jpetStore'} style={{width:'90%',height:'70%'}}/>*/}
        {/*    <br />*/}
        {/*    <br />*/}
        {/*    <Link style={{color:'blue',textDecoration:'none',fontSize:25}} to={'/signIn'}>Click here to go to the website.</Link>*/}
        {/*</div>*/}
    </div>
}

export default InitialPage