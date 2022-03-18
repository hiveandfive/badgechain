import bcrypt from "bcrypt";
import { hash } from "bcrypt";

// Klass för vårat "block" i blockkedjan
class Block{
    constructor(blockId, previousHash, data) {
        this.blockId = blockId;
        this.timestamp = Date.now();
        this.blockHash = this.mine(1);
        this.prevHash = previousHash;
        this.data = data;
        this.pow = 0;
        
    }


    mine(difficulty) {

        const regex = new RegExp(`^(0){${difficulty}}.*`);
        hash = "";
        while (!hash.match(regex)) {
            this.pow++;
            
            //this.hash = calculateHash(this);
            hash = bcrypt.hashSync(String(this.blockId + this.timestamp + this.blockHash + this.previousHash + JSON.stringify(this.data)), 10)
            console.log("hash", hash);
        }
        console.log("POW:", pow);
        return hash;
    }

    // // Vi krypterar blocket
    // getHash() {

    //     // POW?

    //     return bcrypt.hashSync(String(this.blockId + this.timestamp + this.blockHash + this.previousHash + JSON.stringify(this.data)), 10)
    
    // };
    
}

export default Block;