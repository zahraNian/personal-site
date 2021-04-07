
import './App.css'
import picture1 from './0bc4dae5-e453-4241-a8ab-bf586208fc7b.jpg'
import picture2 from './Capture3.PNG'
import styled from 'styled-components'
import {Animate} from 'react-simple-animate'
import picture3 from './icons8-gitlab-48.png'
import picture4 from './icons8-telegram-app-48.png'
import picture5 from './icons8-linkedin-circled-48.png'

const Row=styled.div({
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'space-around',
    alignItems:'flex-start',
})
const Column=styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
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
        '&>div.containerFirst':{   
            '&>div.first':{
                backgroundImage:`url(${picture2})`,
                backgroundSize:'100% 100%',
                width:'100%',
                borderTopLeftRadius:'25px',
                borderTopRightRadius:'25px',
                '&>div.firstOpaciry':{
               backgroundColor:'rgba(200,200,200,0.7)',
                width:'100%',
                borderTopLeftRadius:'25px',
                borderTopRightRadius:'25px',
            '&>img':{
                height:'250px',
                borderRadius:'20px',
                boxShadow:'0px 0px 15px 5px gray',
                margin:'10px',
                position:'relative',
                top:'40px',
                border:'1px solid rgb(190, 190, 190)',
            },
            '&>div.name':{
                width:'40%',
                minWidth:'250px',
                color:'white',
                '&>p':{
                    fontSize:'50px',
                    fontWeight:'bold',
                    color:'#535061',
                    position:'relative',
                    top:'55px',
                    width:'100%',
                    color:'white',
                },
                '&>div':{
                    width:'115px',
                '&>a':{
                    '&>img':{
                        width:'30px',
                        height:'30px',
                        marginTop:'20px',
                        '&:hover':{
                            transform:'scale(1.1)'
                        }
                    }
                }
            }
            }
        }
        },
            '&>div.second':{
                backgroundColor:'#f1f3f4',
                width:'100%',
                borderBottomLeftRadius:'25px',
                borderBottomRightRadius:'25px',
                justifyContent:'space-around',
                padding:'10px',
            '&>div.about':{
                width:'calc(100% - 20px)',
                maxWidth:'300px',
                alignItems:'flex-start',
                textAlign:'justify',
                justifyContent:'flex-start',
                borderRadius:'15px',
                marginTop:'50px',
                '&>h':{
                    fontSize:'25px'
                }
            },
            '&>div.info':{
                marginTop:'50px',
                width:'calc(100% - 20px)',
                maxWidth:'300px',
                borderRadius:'15px',
                lineHeight:'0.1',
                '&>div.info':{
                justifyContent:'space-between',    
        }
        }
    }
    },
})

export default function Home(){
    return(
        <Animate play start={{opacity:0},{marginTop:-50}} end={{opacity:1},{marginTop:10}}>
        <Column >
            <Container >
                <Row className='containerFirst'>
                    <div className='first'>
                        <Row className='firstOpaciry'>
                              <img src={picture1}/> 
                            <Column className="name">
                                <p>Zahra Esfandiary</p>
                                developer
                                <Row>
                                    <a href='https://gitlab.com/ZahraNian'> <img src={picture3}/></a>
                                    <a href='https://t.me/Zahra_esN'> <img src={picture4}/></a>
                                    <a href='https://www.linkedin.com/in/zahra-esfandiary-bb9545169'><img src={picture5}/></a>
                                </Row>
                            </Column>
                        </Row>
                    </div>
                   <Row className='second'>
                    <Column className='about'>
                        <h>
                            About me
                        </h>
                        <p>
                            Hello I'm Zahra Esfandiary.I'm studying electricity engineering at IKIU since 2017.I develop and design websites using HTML, CSS and JavaScript React.
                            on the other hand,i have programmed some monitoring projects using PLC, interested in coding in this field too.
                        </p>
                    </Column>
                    <div className='info'>
                        <Row className="info"><p>Age</p> <p>22</p></Row>
                        <Row className="info"><p>Residence</p> <p>Iran</p></Row>
                        <Row className="info"><p>Address</p> <p>Alborz, Iran</p></Row>
                        <Row className="info"><p>e-mail </p><p>zahraesfandiaryy1999@gmail.com</p></Row>
                        <Row className="info"><p>Phone</p> <p>+98 9367144313</p></Row>
                        <Row className="info"><p>Freelance</p> <p>Available</p></Row>
                    </div>
                    </Row>
                    </Row>
            </Container>
        </Column>    
        </Animate>
    )
}