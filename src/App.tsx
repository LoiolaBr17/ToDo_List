import {useState} from 'react'
import * as C from './App.styles';
import { Item } from './types/item'
import ListItem from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Jogar o lixo fora', done: false},
    {id: 2, name: 'Comprar massa de bolo', done: true}
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>


        {list.map((item, index) => (
          <ListItem 
            key={index}
            item={item}
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;