import {CONSTANTS} from './index'

export const addCard= (text , listId) => {
    return {
        type : CONSTANTS.ADD_CARD,

        payload: { text , listId }
    }
}

export const sort = (
    droppableStartId,
    droppableEndId,
    droppableStartIndex,
    droppableEndIndex,
    draggableId,
    type
) => {
    return {
        type : CONSTANTS.DRAG_HAPPEND,
        payload : {
            droppableStartId,
            droppableEndId,
            droppableStartIndex,
            droppableEndIndex,
            draggableId,
            type
        }
    }

}