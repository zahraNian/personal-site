
import styled from 'styled-components'
import picture2 from './Capture3.PNG'
import {Animate} from 'react-simple-animate'
const Row=styled.div({
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'flex-start',
    alignItems:'flex-start',
})
const Column=styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
})
const Container=styled.div({
    width:'90%',
    maxWidth:'1000px',
    minWidth:'220px',
    boxShadow:'0px 0px 15px 3px gray',
    borderRadius:'25px',
    marginBottom:'20px',
    marginTop:'60px',
    '&>div':{
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
        } ,
        '&>div.content':{
            width:'100%',
            justifyContent:'space-between',
            backgroundColor:'#f1f3f4',
            borderBottomLeftRadius:'25px',
            borderBottomRightRadius:'25px',
            '&>div.education':{
                alignItems:'flex-start',
                margin:'40px',
                fontSize:'20px'
            },
            '&>div.skill':{
                alignItems:'flex-start',
                margin:'40px',
                '&>p':{
                    '&>h2':{
                        
                    }
                }
            }
        }   
    }
})
    export default function Resume(){
    return(
        <Animate play start={{opacity:0}} end={{opacity:1}}>
        <Column>
            <Container>
                <Column>
                    <div className='header'>
                        <Column className='headerOpacity'>
                            <Animate play start={{marginTop:-50}} end={{marginTop:10}}>
                                <p>Resume</p>
                            </Animate>    
                        </Column>
                    </div>
                    <Row className='content'>
                        <Column className='education'>
                            <h1>Education</h1>
                            <p>Imam Khomeini International University ,<br/> Qazvin, BSc’s (1396-1400)</p>
                            <p>Electrical Engineering</p>
                            <p>GPA: 15.5</p>
                        </Column>
                        <Column className='skill'>
                            <h1>Skill & Abilities</h1>
                            <p><h2>HTML</h2>(Upper-intermediate)</p>
                            <p><h2>CSS</h2>(Upper-intermediate)</p>
                            <p><h2>JS</h2>(Upper-intermediate)</p>
                            <p><h2>REACT JS</h2>(intermediate)</p>
                            <p><h2>git</h2>(Upper-intermediate)</p>
                            <p><h2>styled-components</h2>(Upper-intermediate)</p>
                            <p><h2>reST-API</h2>(Upper-intermediate)</p>
                            <p><h2>PLC Siemens S7-200, S7-300:<br/> SIMATIC MANAGER, programming-Digital</h2>(Upper-intermediate)</p>
                            <p><h2> Microsoft Office: Powerpoint, Word, Excel</h2>(Upper-intermediate)</p>
                        </Column>
                    </Row>
                </Column>
            </Container>
        </Column>
        </Animate>
    )
}