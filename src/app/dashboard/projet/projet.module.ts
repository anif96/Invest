
export class projet {

    public idProjet : number ;
    public nomProjet : String ; 
    public lieuImplantation : String ;
    public libProjet : string ;
    public estimationCapital  : number ;
    public dateCreation : Date ;
    
constructor( idProjet : number,nomProjet : String, LieuImplantation : String, libProjet : string , estimationCapital  : number, dateCreation : Date){
      this.idProjet = idProjet ;
      this.nomProjet = nomProjet;
      this.lieuImplantation = LieuImplantation;
      this.estimationCapital = estimationCapital;
      this.dateCreation = dateCreation ;

}
    
 

}