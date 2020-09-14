

export class users {

    public iduser : number ;
    public username : String ; 
    public password : String ;
    public active   : boolean ;
    public dateCreation : Date ;
    public email : string ;
    public telephone : string ;

    constructor(iduser : number,username : String , password : String , active   : boolean , dateCreation : Date ,  email : string , telephone : string    ) {
        this.iduser = iduser;
        this.username = username ;
        this.password = password ;
        this.active = active ;
        this.dateCreation = dateCreation ;
        this.email = email ;
        this.telephone = telephone ;
    }
 

}