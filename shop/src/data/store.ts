import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name: 'user',
    initialState: 'kim',
    reducers:{
        changeName(state){
            return 'john'+state
        }
    }
});
export let {changeName}=user.actions


let cartItem = createSlice({
    name: 'cartItem',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 },
        { id: 10, name: 'elephant', count: 3 },
    ],
    reducers: {
        addPoint(state, action) {
            let item = state.find((item) => item.id === action.payload);
            if (item) {
                item.count += 1;
            }
        },
        addItem(state, action){
            state.push(action.payload)
        }
    },
});

export let { addPoint,addItem } = cartItem.actions;


export default configureStore({
    reducer: {
        user: user.reducer, 
        cartItem: cartItem.reducer,
    },
});
