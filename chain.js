import Block from "./block.js";

// Klass för blockkedjan
class BlockChain{
    constructor() {
            this.chain = [];
    }

    // Metod för att lägga till ett block till kedjan.
    addBlock(data) {
        let blockId = this.chain.length;
        let previousHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].blockHash : "";
        let block = new Block(blockId, previousHash, data);

        this.chain.push(block);
    }

    // KOLLA OM ALLT STÄMMER
   isValid() {
    console.log("Testar hash!");

       // if (this.chain.length === 1) return true;

        for (let index = 1; index < this.chain.length; index++) {
            
        const currentBlock = this.chain[index];
        const previousBlock = this.chain[index - 1];
        if (
          currentBlock.hash !== Block.getHash(currentBlock) ||
          previousBlock.hash !== currentBlock.previousHash
        )
          return false;
        }
        return true;
      }
}

export default BlockChain;