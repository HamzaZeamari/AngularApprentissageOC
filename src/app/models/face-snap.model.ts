export class FaceSnap{
    constructor(
        public id : number,
        public title: string, 
        public auteur:string, 
        public image : string,
        public datePub: Date,
        public location?:string,
        ){
    }
}