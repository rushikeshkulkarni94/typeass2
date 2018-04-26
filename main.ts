class facebook{//class creation
    //propery declaration
     public birthday:string;
     public mobile:string;
     public email:string;
     public currentcity:string;
     public hometown:string;
public gender:string;
public languages:string[];
   public interest:string[];
   public relation:string;
   //constructor definition
constructor(birtday:string,mobile:string,email:string,currentcity:string,hometown:string,gender:string,languages:string[],
relation:string,interest:string[])
{
this.birthday=birtday;
this.mobile=mobile;
this.email=email;
this.currentcity=currentcity;
this.hometown=hometown;
this.gender=gender;
this.languages=languages;
this.relation=relation;
this.interest=interest;
}
//Method Impelementation
getAge=()=>{
    console.log("Age Calcualtion Logic");
}

getMobile=()=>{
    return this.mobile;
}
getHometown=()=>{
    return this.hometown;
}
getCurrentCity=()=>{
    return this.currentcity;
}
getRelation=()=>{
    return this.relation;
}
getGender=()=>{
    return this.gender;
}
getEmail=()=>{
    return this.email;
}
getInterest=()=>{
    
    for(let z of this.interest)
    console.log(z);
   
}
getLanguages=()=>{
    for(let v of this.languages)
  console.log(v);
}

}//End of class
//Object Creation
let obj1=new facebook("25-JULY-1994","+919766838941","rushirvk94@gmail.com","Thane","Ambajogai","Male",["Marathi","Hindi","English"],"Single",["Men","Women"]);
//Storing Results
obj1.getAge();
obj1.getLanguages();
obj1.getInterest();
let em=obj1.getEmail();
let ge=obj1.getGender();
let mo=obj1.getMobile();
let ho=obj1.getHometown();
let curre=obj1.getCurrentCity();
let re=obj1.getRelation();
//Printing Results
console.log(em);
console.log(ge);
console.log(mo);
console.log(ho);
console.log(re);
console.log(curre);
