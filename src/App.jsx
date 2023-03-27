import Spline from '@splinetool/react-spline';
import styled from 'styled-components'

import { TfiTwitter } from 'react-icons/tfi';
import { SlSocialYoutube } from 'react-icons/sl';
import { FaLaptop } from 'react-icons/fa';
import logo from './assets/logo.png'


export default function App() {
  return (
    <Wrapper>
      <Content>
        <h1>Collaborate with people</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, commodi quibusdam, accusantium excepturi non temporibus vel fugit nihil, assumenda vero minus porro. Vel nihil exercitationem fuga praesentium dolorum autem deleniti.</p>
        <button><FaLaptop /> Download for Mac</button>
      </Content>
      <Social>
        <div />
        <span><TfiTwitter /></span>
        <span><SlSocialYoutube /></span>

      </Social>
      <Menu>
        <li><img src={logo} alt='Logo' /></li>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>Download</a></li>
        <li><a href='/'>App</a></li>
        <li><a href='/'>Login</a></li>
        <li><button>Get Started</button></li>
      </Menu>
      <Spline className='spline' scene="https://prod.spline.design/dVs4GIY0i6weZ6qS/scene.splinecode" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
width:100%;
height:100%;
overflow-x:hidden;
font-family: 'Spline Sans', sans-serif;
font-size:16px;
color:white;

.spline{
   transform: scale(0.8);
   position:absolute;
   top:-100px;
   right:-100px;
   z-index:1;

   @media (max-width: 1024px){
    transform: scale(0.6);
    translateX(200px);
   }
   @media (max-width: 800px){
    transform: scale(0.5);
    translateX(600px);
   }
   @media (max-width: 600px){
    transform: scale(0.4);
    translateX(-100px);
    right:auto;
    left:50%;
    margin-left:-400px;
    top:-350px;
   }
   @media (max-width: 375px){
    transform: scale(0.35);
    translateX(-50px);
   }
}
`
const Content = styled.div`
width:100%;
transform: scale(0.7);
position:absolute;
top: 150px;
z-index:2;
display: flex;
flex-direction: column;
gap: 80px;

@media (max-width: 1024px){
gap: 40px;
 }
h1 {
  font-family: 'Spline Sans Mono', monospace;
  font-weight: bold;
  font-size: 70px;
  margin: 0;
  max-width: 500px;

  @media (max-width: 1024px){
    font-size: 60px;
    max-width: 400px;
   }
   @media (max-width: 800px){
    font-size: 40px;
    max-width: 300px;
   }
   @media (max-width: 600px){
    padding-top: 250px;
   }

}

p {
  font-weight: bold;
  line-height: 150%;
  max-width: 380px;
}
h1, p button{
  margin: 0 30px 0 10px;

  @media (max-width: 1024px){
  margin: 0 30px;
   }
}
button{
  color:white;
  background: rgba(0,0,0,0.2);
  font-size:16px;
  padding:12px 30px;
  border-radius:14px;
  border: 1px solid rgba(255,255,255,0.1);
  max-width:280px;
  backdrop-filter: blur(20px);
  display:flex;
  gap: 12px;
  justify-content: center;
  align-items:center;
  transition: 1s;

  :hover {
    border: 1px solid rgba(255,255,255,0.8);
    transform: translateY(-3px);
  }
}
`
const Menu = styled.div`
position:relative;
z-index:2;
display:flex;
gap:15px;
align-items:center;
margin: 0 30px 0 100px;
padding:0;
left:-60px;

img {
  transform: scale(0.5);
  filter:hue-rotate(200deg);
}

li {
  list-style: none;
  margin:0;
}
a {
  text-decoration:none;
  color:white;
  padding:8px 20px;
  border: 1px solid rgba(255,255,255,0);
  transition:0.5s;
  border-radius: 14px;

  :hover {
    border: 1px solid rgba(255,255,255,0.2);}
  }
}
button{
  color:white;
  background: rgba(0,0,0,0.2);
  font-size:16px;
  padding:12px 30px;
  border-radius:14px;
  border: 1px solid rgba(255,255,255,0.1);
  max-width:280px;
  backdrop-filter: blur(20px);
  display:flex;
  gap: 12px;
  justify-content: center;
  align-items:center;
  transition: 1s;

  :hover {
    border: 1px solid rgba(255,255,255,0.8);
    transform: translateY(-3px);
  }
}
   @media (max-width: 1024px){
    margin:0 30px;
    img {
      transform:scale(0.3);
   }

   @media (max-width: 600px){
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display:none;
    }
    img {
      transform:scale(0.2);
    }
}
@media (max-width: 475px){
  img {
    transform:scale(0.1);
  }
 }
`
const Social = styled.div`
  position: absolute;
  top:240px;
  left:30px;
  display:flex;
  flex-direction: column;
  gap:30px;
  align-items:center;

  div {
    width: 2px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
  span {
    transition:1s;
    :hover {
      transform: translateY(-3px);
      transform: scale(1.3);
    }
  }
  @media (max-width: 1024px){
    display:none;
   }
`