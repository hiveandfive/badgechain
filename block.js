import crypto from "crypto"

const encrypt = data => crypto.createHash("sha256").update(data).digest("base64")

// Klass för vårat "block" i blockkedjan
class Block {
    constructor(blockId, previousHash, data, difficulty) {
        this.blockId = blockId;
        this.timestamp = Date.now();
        this.pow = 0;
        this.blockHash = this.mine(difficulty);
        this.prevHash = previousHash;
        this.data = data;
    }

    mine(difficulty) {
        console.time("HASH")
        const regex = new RegExp(`^((h|H)5){${difficulty}}.*`);
        let hash = "";
        while (!hash.match(regex)) {
            this.pow++;
            hash = encrypt(String(this.timestamp + hash + this.blockId + this.previousHash + JSON.stringify(this.data)))
            console.log("hash", hash);
        }
        console.timeEnd("HASH")
        console.log("POW:", this.pow);
        return hash;
    }
}

export default Block;