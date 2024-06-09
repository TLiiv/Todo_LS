import { useState } from "react";

const useLocalStorage = <TState>(key: string, newState: TState) => {

    const [state, setState] = useState<TState>(() => {
        //Function inside of state is, so it would run only when state is not yet initialized
        //fetch initial value for this state every other time this function is called it will not run
         //When initialized look if there is already state with the key
        const stateStr = window.localStorage.getItem(key);
        //If statestr excists parse state else use newState
        return stateStr ? JSON.parse(stateStr) as TState : newState;
    });
    const updateState = (state: TState) => {
        //take new state, save that to local storage
        window.localStorage.setItem(key, JSON.stringify(state));
        //return it to hook
        setState(state);
    }

    return [state, updateState];
}

export default useLocalStorage;