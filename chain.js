import FS from "fs";
import Block from "./block.js";

// Klass för blockkedjan
class BlockChain {
    
    get chain() {
      if(FS.existsSync('./chain')){
        return JSON.parse(FS.readFileSync("chain"));
      }
      return [];
      
    }

    set chain(value){
        FS.writeFileSync("chain", JSON.stringify(value), null, 6);
    }
    

    validate() {

        for(let i = 1; i < this.chain.length; i++) {
            let prevBlock = this.chain[i-1];
            let currentBlock = this.chain[i];
            
            if (currentBlock.prevHash != prevBlock.blockHash) {
                return false;
            }
        }
        return true;
    }

    // Metod för att lägga till ett block till kedjan.
    addBlock(data) {
        let blockId = this.chain.length;
        let previousHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].blockHash : "";
        let block = new Block(blockId, previousHash, data, 1);

        
        this.chain = [...this.chain, block];
    }

}

export default BlockChain;