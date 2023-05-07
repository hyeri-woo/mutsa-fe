import React, {Fragment} from 'react';
import Hello from './Components/Hello';
import Time from './Components/Time';
import Resume from './Components/Resume';
import ColorText from './Components/ColorText';
import Emotion from './Components/Emotion';



function MyComponent1() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];
  return (
    list.map(item => {
      return ( 
        <>
          <h2>{item.area}</h2>
          <p>{item.visited?"true":"false"}</p>
        </>
      );
    })
  );
}

function MyComponent2() {
  const items = [
    { id: 1, name: 'Apple', desc: '빨간건 사과' },
    { id: 2, name: 'Banana', desc: '바나나는 길어' },
    { id: 3, name: 'Cherry', desc: '체리는 비싸' }
  ];
  return (
    items.map(item => {
      return (
        <Fragment key={item.id}>
          <dt>{item.name}</dt>
          <dd>{item.desc}</dd>
        </Fragment>
      )
    })
  )
}

function MyComponent3() {
  return (
    <div>
      <Hello name="개리"/>
      <Time />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <ColorText color="red"/>
      <ColorText color="green"/>
      <ColorText color="blue"/>
    </div>
  );
}

function MyComponent4() {
  return (
    <Fragment>
      <Emotion/>
    </Fragment>
  )
}

function App() {
  return (
    <Fragment>
      {/* <MyComponent1/>
      <dl>
        <MyComponent2/>
      </dl>
      <MyComponent3/> */}
      <MyComponent4/>
    </Fragment>
  );
}
export default App;
