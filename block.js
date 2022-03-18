import crypto from "crypto"

const encrypt = data => crypto.createHash("sha256").update(data).digest("base64")

export const reHash = (block) => encrypt("" + block.timestamp + block.pow + block.blockId + block.previousHash + JSON.stringify(block.data));


export function createBlock(blockId, previousHash, data, difficulty) {
    let block = {}
    block.blockId = blockId;
    block.timestamp = new Date().getTime();
    block.pow = 0;
    block.prevHash = previousHash;
    block.data = data;
    block.blockHash = mine(block, difficulty);
    return block;
}

function mine(block, difficulty) {
    console.time("HASH")
    const regex = new RegExp(`^((h|H)5){${difficulty}}.*`);
    let hash = "";
    while (!hash.match(regex)) {
        block.pow++;
        // console.log("" + block.timestamp + block.blockId + block.previousHash);
        hash = block.reHash();
        console.log("hash", hash);
    }
    console.timeEnd("HASH")
    console.log("POW:", block.pow);
    return hash;
}