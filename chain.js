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
    validate() {
        // Bakåt
        for(let i = 1; i < this.chain.length; i++) {
            let prevBlock = this.chain[i-1];
            let currentBlock = this.chain[i];
            
            if (!currentBlock.prevHash == prevBlock.blockHash) {
                return false;
            }
        }
        return true;
    }

    // Metod för att lägga till ett block till kedjan.
    addBlock(data) {
        let blockId = this.chain.length;
        let previousHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].blockHash : "";
        let block = new Block(blockId, previousHash, data, 2);

        this.chain.push(block);
        FS.writeFileSync("chain", JSON.stringify(this.chain), null, 6);
    }

}

export default BlockChain;