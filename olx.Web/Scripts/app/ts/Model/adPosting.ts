export class adPosting_Model {
    title: string = '';  // this field will show in constructor of inhrited clas, bcoz it has initialized
    roomNo: number;      // this field will not show in constructor of inhrited clas
    vehicleInfo: vehicleModel = new vehicleModel();
    realStateInfo: real_stateModel = new real_stateModel();
    price: number;
}

export class vehicleModel {
    model: number;
    year: number;
    kmsDriven: number;
    fuel: number;
}

export class real_stateModel {
    furnished: boolean;
    bhk: number;
    sqrFt: number;
    sqrYard: number;
}

export interface adform_Array {
    price: number[],
    vehicleGroup: number[],      // check to validate group of vehicle would be show or not
    vehicle_model: number[],
    vehicle_year: number[],
    vehicle_kmsDriven: number[],
    vehicle_fuel: number[],
    realStateGroup: number[],    // check to validate group of realstate would be show or not
    realState_furnished: number[],
    realState_bhk: number[],
    realState_sqrFt: number[],
    realState_sqrYard: number[],

}