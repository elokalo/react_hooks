import React, {useReducer} from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterEffects from './components/ClassCounterEffects';
import ClassMouse from './components/ClassMouse';
import ComplexCounterReducer from './components/ComplexCounterReducer';
import CounterReducer from './components/CounterReducer';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookEffect from './components/HookEffect';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import MultipleReducers from './components/MultipleReducers';
import ComponentC from './components/useReducer with useContext example/ComponentC';
import ComponentA from './components/useReducer with useContext example/ComponentA';
import ComponentB from './components/useReducer with useContext example/ComponentB';
import DataFetchingWithState from './components/DataFetchingWithState';
import DataFetchingReducer from './components/DataFetchingReducer';
import ParentComponent from './components/useCallback example/ParentComponent';
import Counter from './components/useMemo example/Counter';
import FocusInput from './components/useRef example/FocusInput';
import ClassTimer from './components/useRef example/ClassTimer';
import HookTimer from './components/useRef example/HookTimer';
import DocTitleOne from './components/custom Hooks example/DocTitleOne';
import DocTitleTwo from './components/custom Hooks example/DocTitleTwo';
import CounterOne from './components/custom Hooks example/CounterOne';
import CounterTwo from './components/custom Hooks example/CounterTwo';
import UserForm from './components/custom Hooks example/UserForm';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {/*
      <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <ClassCounterEffects/>
      <HookEffect/>
      <ClassMouse/>
      <HookMouse/>
      <MouseContainer/>
      <IntervalClassCounter/>
      <IntervalHookCounter/>
      <DataFetching/>
      <UserContext.Provider value={'Alfredo'}>
        <ChannelContext.Provider value={'Cortes'} >
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterReducer/>
      <ComplexCounterReducer/>
      <MultipleReducers/>
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Count - {count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
      </CountContext.Provider>
      <DataFetchingWithState/>
      <DataFetchingReducer/>
      <ParentComponent/>
      <Counter/>
      <FocusInput/>
      <ClassTimer/>
      <HookTimer/>
      <DocTitleOne/>
      <DocTitleTwo/>
      <CounterOne/>
      <CounterTwo/>
      */}
      <UserForm/>
    </div>
  );
}

export default App;
