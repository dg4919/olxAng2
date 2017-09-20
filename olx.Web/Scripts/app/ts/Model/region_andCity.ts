export interface region_cityModel {
    Id: number,
    CityName: string,
    ParentId : number,
    Level: number
    isPopular: boolean
}

export interface stateModel {
    Id: number,
    CityName: string,
    StateId: number
}

export interface CityModel extends stateModel{
    hasCity: boolean;
}

export interface popUpModel {
    popularCity: stateModel[];
    state_UT: CityModel[];
}

export interface selected_cityModel {
    Id: number,
    CityName: string,
    StateName: string
}

