

import { createStore } from 'tinybase/debug';
import { Provider, useCreateStore  } from 'tinybase/debug/ui-react';
import { StoreInspector } from 'tinybase/debug/ui-react-dom';

const store = createStore().setTables({
  todos: {
    0: {text: 'Clean the floor'},
    1: {text: 'Install TinyBase'},
    2: {text: 'Book holiday'},
  },
})

function StoreProvider({children}: { children: React.ReactNode}) {
    
    return (
        <Provider  store={store}> {children} 
          <StoreInspector />
        </Provider>
    )
}

export default StoreProvider