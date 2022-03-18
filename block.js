import crypto from "crypto"

const encrypt = data => crypto.createHash("sha256").update(data).digest("base64")

// Klass för vårat "block" i blockkedjan
class Block {
    constructor(blockId, previousHash, data, difficulty) {
        this.blockId = blockId;
        this.timestamp = new Date().getTime();
        this.pow = 0;
        this.blockHash = this.mine(difficulty);
        this.prevHash = previousHash;
        this.data = data;
    }

    reHash = () => encrypt(String(this.timestamp + this.blockId + this.previousHash + JSON.stringify(this.data)));

    mine(difficulty) {
        console.time("HASH")
        const regex = new RegExp(`^((h|H)5){${difficulty}}.*`);
        
        while (!hash.match(regex)) {
            this.pow++;
            // console.log("" + this.timestamp + this.blockId + this.previousHash);
            let hash = encrypt("" + this.timestamp + this.pow + this.blockId + this.previousHash + JSON.stringify(this.data));
            console.log("hash", hash);
        }
        console.timeEnd("HASH")
        console.log("POW:", this.pow);
        return hash;
    }

}

export default Block;