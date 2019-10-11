import carsConst from "../constants/cars-constants"

const initCars = {
    cars:[]
};

const carsReducer = (state = initCars, action) => {
    switch (action.type) {
        case carsConst.ADD_CAR:{
            return {car:[...state, action.value]}
        }
        case carsConst.ADD_CARS:{
            return {car:["Audi","Ferrari","LADA"]}
        }
        case carsConst.REMOVE_CAR:{
            return state
        }
        default:{
            return state
        }
    }
}

export default carsReducer;