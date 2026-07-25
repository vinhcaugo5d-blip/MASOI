export class VoteManager {

    private votes = new Map<string,string>();

    public vote(voter:string,target:string){

        this.votes.set(voter,target);

    }

    public clear(){

        this.votes.clear();

    }

    public getVotes(){

        return this.votes;

    }

}
