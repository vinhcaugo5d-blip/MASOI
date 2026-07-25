export class Suspicion{

    private scores=new Map<string,number>();

    public set(player:string,value:number){

        this.scores.set(player,value);

    }

    public get(player:string){

        return this.scores.get(player)||0;

    }

}
