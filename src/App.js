import './App.css';
import { MdClear } from 'react-icons/md';
import { useState } from 'react';
import {Button, Buttons, Radio, Checked} from './components/Button'
import DropDownButton, {DropContent, DropList} from './components/DropDownButton';


function App() {
  

  const [ checked, setChecked ] = useState([]);

  const checkedBoxes = [
    { name:'One', value :'1'},
    { name:'Two', value :'2'},
    { name:'Three', value :'3'}
  ]

  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'ONE', value: '1' },
    { name: 'TWO', value: '2' },
    { name: 'THREE', value: '3' },
  ];

  const onCheck = (e) => {
    const checking = e.target.value;
    console.log(checked);
    if(checked.includes(checking)){
      setChecked(checked.filter(check => check!==checking));
    }else{
      setChecked(checked.concat(checking))
    }
  }


  const onClick = (e)=>{setRadioValue(e.target.value)}

  return (
    <div className="App">
      <Buttons>
      <Button color = {'Primary'} block onClick={onClick} active={false} >Primary</Button>
      <Button color = {'Secondary'} close>
        Secondary
        <MdClear></MdClear>
        </Button>
      <Button color = {'Success'}>Success</Button>
      <Button color = {'Danger'}>Danger</Button>
      <Button color = {'Warning'}>Warning</Button>
      <Button color = {'Info'}>Info</Button>
      <Button color = {'Light'}>Light</Button>
      <Button color = {'Dark'} disabled>Dark</Button>
      </Buttons>
      <Buttons>
      <Button color = {'Primary'} outline>Primary</Button>
      <Button color = {'Secondary'} outline>Secondary</Button>
      <Button color = {'Success'} outline>Success</Button>
      <Button color = {'Danger'} outline>Danger</Button>
      <Button color = {'Warning'} outline>Warning</Button>
      <Button color = {'Info'} outline>Info</Button>
      <Button color = {'Light'} outline>Light</Button>
      <Button color = {'Dark'} outline >Dark</Button>
      
      </Buttons>
      <Buttons>
      <Button color = {'Primary'}  size = {'lg'} disabled>Primary</Button>
      <Button color = {'Secondary'}  size = {'lg'}>Secondary</Button>
      <Button color = {'Success'} size = {'lg'}>Success</Button>
      <Button color = {'Danger'}  size = {'lg'}> Danger</Button>
      <Button color = {'Warning'}  size = {'lg'}>Warning</Button>
      <Button color = {'Info'} size = {'lg'}>Info</Button>
      <Button color = {'Light'} size = {'lg'}>Light</Button>
      <Button color = {'Dark'} size = {'lg'}>Dark</Button>
      </Buttons>
      <Buttons>
      <Button color = {'Primary'} size = {'sm'}>Primary</Button>
      <Button color = {'Secondary'} size = {'sm'}>Secondary</Button>
      <Button color = {'Success'} size = {'sm'}>Success</Button>
      <Button color = {'Danger'} size = {'sm'}>Danger</Button>
      <Button color = {'Warning'} size = {'sm'}>Warning</Button>
      <Button color = {'Info'} size = {'sm'}>Info</Button>
      <Button color = {'Light'} size = {'sm'}>Light</Button>
      <Button color = {'Dark'} size = {'sm'}>Dark</Button>
      </Buttons>
      <Buttons>
      <Button color = {'Primary'} >Primary</Button>
      <Button color = {'Secondary'}>Secondary</Button>
      <Button color = {'Success'}>Success</Button>
      <Button color = {'Danger'}>Danger</Button>
      <Button color = {'Warning'}>Warning</Button>
      <Button color = {'Info'}>Info</Button>
      <Button color = {'Light'}>Light</Button>
      <Button color = {'Dark'} >Dark</Button>
      </Buttons>
      <Buttons>
        {radios.map((radio,idx)=>
          <Radio key={idx} value ={radio.value} selected = {radioValue===radio.value} onClick ={onClick}>
          {radio.name}
          </Radio>
        )}
        <div>selected : [{radioValue}]</div>
      </Buttons>
      <Buttons>
        {checkedBoxes.map((box,idx) => 
          <Checked key={idx} value= {box.value} selected = {checked.includes(box.value)} onClick = {onCheck}>{box.name}</Checked>
        )}
        <div>selected : [{checked.map(check=>' ' + check+' ')}]</div>
      </Buttons>
      <DropDownButton>메뉴 선택
        <DropList>
          <DropContent>나주곰탕</DropContent>
          <DropContent>양뼈해장국</DropContent>
          <DropContent>군선생</DropContent>
        </DropList>
      </DropDownButton>

    </div>
  );
}



export default App;
