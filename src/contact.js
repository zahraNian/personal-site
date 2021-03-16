import './App.css'
import styled from 'styled-components'
import picture2 from './Capture3.PNG'
import email from './icons8-email-64.png'
import phone from './icons8-phone-64.png'
import linkedin from './icons8-linkedin-64.png'
const Row=styled.div({
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'flex-start',
    alignItems:'center',
})
const Column=styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
})
const Image=styled.img({
    width:'25px'
})
const Container=styled.div({
    width:'90%',
    maxWidth:'1000px',
    minWidth:'220px',
    boxShadow:'0px 0px 15px 3px gray',
    borderRadius:'25px',
    marginTop:'60px',
    '&>div':{
        height:'100%',
        '&>div.header':{
            backgroundImage:`url(${picture2})`,
            backgroundSize:'100% 100%',
            width:'100%',
            borderTopLeftRadius:'25px',
            borderTopRightRadius:'25px',
            '&>div.headerOpacity':{
                backgroundColor:'rgba(200,200,200,0.7)',
                width:'100%',
                borderTopLeftRadius:'25px',
                borderTopRightRadius:'25px',
                fontSize:'50px',
                color:'white'
            }
        },
        '&>div.content':{
            width:'100%',
            height:'100%',
            backgroundColor:'#f1f3f4',
            borderBottomLeftRadius:'25px',
            borderBottomRightRadius:'25px',
            fontSize:'16px',
            lineHeight:'3',
            '&>div':{
                width:'90%',
                marginTop:'15px',
                marginBottom:'15px',
                '&>div':{
                    fontWeight:'bold',
                    '&>img':{
                        marginRight:'5px'
                    }
                }        
            }    
        }    
    }
})
    export default function Contact(){
    return(
        <Column>
            <Container>
                <Column>
                    <div className='header'>
                        <Column className='headerOpacity'>
                            <p>contact</p>
                        </Column>
                    </div>
                    <Column className='content'>
                        <Row><Row><Image src={email}/>Email :&nbsp;</Row> zahraesfsndiaryy1999 @gmail.com</Row>
                        <Row><Row><Image src={linkedin}/>Linkedin  :&nbsp;</Row> <a href='https://www.linkedin.com/in/zahra-esfandiary-bb9545169' target='-blank'> Linkedin</a></Row>
                        <Row><Row><Image src={phone}/>Phone Number :&nbsp;</Row> +98 9367144313</Row>
                    </Column>
                </Column>
            </Container>
        </Column>
    )
}