import Head from 'next/head';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  background: #022533;
`;

const LineOne = styled.div`
  width: 90vw;
  height: 1.7vw;
  background: #812907;
  position: absolute;
  top: 4%;
  right: -150px;
  transform: rotate(22deg);
`;

const LineTwo = styled.div`
  width: 170vw;
  height: 1.7vw;
  background: #dd582f;
  position: absolute;
  top: 15%;
  left: -250px;
  transform: rotate(-26.7deg);
`;

const TextContainer = styled.div`
  width: 85.9vw;
  height: 8vw;
  background: #F4BD40;
  position: absolute;
  top: 36%;
  right: -2%; 
  transform: rotate(9.71deg);
  display: flex;
  justify-content: center;
  align-items: center;  
  padding: 15px;

  p {
    padding-left: 10px;
  }
`;

const LineThree = styled.div`
  width: 160vw;
  height: 1.7vw;
  background: #812907;
  position: absolute;
  top: 86%;
  left: -150px;
  transform: rotate(-4deg);
`;


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Background>
          <LineOne/>
          <LineTwo/>
          <TextContainer>
            <p>
            In the '80s, Dan Granata ran with the best of them - phone phreakers, social engineers, and the most notorious computer hackers of the era. Then he got a job at designory. 
            </p>
            
          </TextContainer>
          <LineThree />
        </Background>
        

    </>
  )
}
