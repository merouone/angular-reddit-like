export class Article{
    votes : number;
    title : string;
    link  : string;
    constructor(t:string,l:string,v?:number){
        this.votes = v || 0;
        this.title = t;
        this.link = l;
    }

    voteUp(){
        this.votes +=1;
    }

    voteDown(){
        this.votes -= 1;
    }

    domain() : string{
        try{
            let d = this.link.split("//")[1];
            return d.split("/")[0];
        }catch(err){
            return null;
        }
        
    }
}