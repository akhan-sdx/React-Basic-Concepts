const initialState = {
    payload : [],
    counter : 8
}

export const MyStore = (state = initialState, action)=> {
    console.log("action", action);
    switch (action.type) {
        case "aamir":
            return{
                ...state,
                payload : [...state.payload, action.payload],

            };

         case "INCREMENT" :
            console.log("redux counter=> ", state.counter + 1);
            return { ...state, counter: state.counter + 5 , payload : [...state.payload, action.payload]};            
         default :
           return state;   

    }

}

