import FS from "fs";
import Block from "./block.js";

// Klass för blockkedjan
class BlockChain {
    constructor() {
        try {
            this.chain = JSON.parse(FS.readFileSync("chain"));
        }
        catch {
            this.chain = [];
        }
    }

    // 

    // Metod för att lägga till ett block till kedjan.
    addBlock(data) {
        let blockId = this.chain.length;
        let previousHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].blockHash : "";
        let block = new Block(blockId, previousHash, data, 4);

        this.chain.push(block);
        FS.writeFileSync("chain", JSON.stringify(this.chain), null, 6);
    }

}

export default BlockChain;