import {CONSTANTS} from '../actions'



const initialState = [{
    id : "zwd23r2" ,
    title : "First Title",
    cards : [
        {
            id : "awd42340",
            text :"we created a static list and static card"
        },
        {
            id : "dw234q3d",
            text :"we used material UI React for styling"
        }
    ]
},{
id : "sd23d2",
title : "Second Title",
cards : [
    {
        id : "awd23e2",
        text :"we created a static list and static card"
    },
    {
        id : "qdw23d",
        text :"we used material UI React for styling"
    },
    {
        id : "ed2d223",
        text :"we used material UI React for styling"
    }
]
}]

const listReducer = ( state = initialState,action ) =>{
   switch(action.type){
       case  CONSTANTS.ADD_LIST :{
           let newList = {
               title:action.payload,
               cards:[],
               id : Math.random().toString(36).substr(2, 9)
           }
          
           return [...state,newList]
           
       }
       case  CONSTANTS.ADD_CARD :{
           
        let newCard = {
            id : Math.random().toString(36).substr(2, 9),
            text : action.payload.text,
       
        
        }
       const newState = state.map(list => {
      //  console.log(action.payload.listId)
           if(list.id === action.payload.listId){
               return {
                   ...list,cards :[...list.cards,newCard]
                }
           }else{
               return list
           }
       })
      // console.log(newState)
       return newState
       
        
    }
    case CONSTANTS.DRAG_HAPPEND :{
        const {    
            droppableStartId,
            droppableEndId,
            droppableStartIndex,
            droppableEndIndex,
            draggableId,
            type
            } = action.payload;

        const newState = [...state];
        console.log(type)
        if(type === "list"){
            const list = newState.splice(droppableStartIndex,1)
            newState.splice(droppableEndIndex,0,...list)
            return newState
        }
        if(droppableStartId === droppableEndId){
            const list = state.find(list => droppableStartId === list.id)
            const card = list.cards.splice(droppableStartIndex,1)
            list.cards.splice(droppableEndIndex,0,...card)
        }

        if(droppableStartId !== droppableEndId){
            const startList = state.find(list => droppableStartId === list.id)
            const card = startList.cards.splice(droppableStartIndex,1)
            
            const endList = state.find(list => droppableEndId === list.id)
            endList.cards.splice(droppableEndIndex,0,...card)
        }


        return newState
    }
       default :
        return state;
   }
}

export default listReducer