import peopleContst from "../constants/people-constants"

const initState = {
    people: ["Maloy"]
};

const peopleReducer = (state = initState, action) => {
    switch (action.type) {
        case peopleContst.ADD_PEOPLE:{
            return {people:["vorobei", "vano", "vajo"]}
        }
        case peopleContst.ADD_PERSON:{
            return {people:[...state.people, action.value]}
        }
        case peopleContst.REMOVE_PERSON:{
            return state;
        }
        default:{
            return state;
        }
    }
};

export default peopleReducer;