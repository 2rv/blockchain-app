import { Block, GenesisBlock } from './Block';

export class Blockchain {
  chain: Block[];

  constructor() {
    this.chain = [];
    this.createGenesisBlock();
  }

  createGenesisBlock() {
    const block = new GenesisBlock('Genesis Block');
    block.timestamp = new Date();
    block.generateHash();

    this.chain.push(block);
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block: Block) {
    block.previuseHash = this.getLatestBlock().hash;
    block.timestamp = new Date();
    block.generateHash();

    this.chain.push(block);
  }
}
