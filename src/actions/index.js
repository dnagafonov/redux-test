import peopleConst from "../constants/people-constants"
import carConst from "../constants/cars-constants"

export const addPerson = person => {
    return {
        type: peopleConst.ADD_PERSON,
        value: person
    }
};

export const addPeople = () => {
    return {
        type: peopleConst.ADD_PEOPLE,
    }
}

export const addCar = car => {
    return {
        type: carConst.ADD_CAR,
        value: car
    }
}

export const addCars = () => {
    return {type: carConst.ADD_CARS}
}