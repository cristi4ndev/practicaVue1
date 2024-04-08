export interface IloginRequest{
    user: String,
    password: String
}

export interface IRegisterRequest{
    user: String,
    password: String,
    name: String,
    surname: String

}
export interface IRecoveryRequest{
    email: String,
    
}