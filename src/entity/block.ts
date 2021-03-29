import { SHA256 } from 'crypto-js';

export class Block {
  timestamp: Date;
  previuseHash: string = null;
  data: any;
  hash: string;

  constructor(data: any) {
    this.data = data;
  }

  generateHash() {
    if (this.previuseHash === null) {
      throw new Error('Block must contain previuse block hash');
    }

    this.hash = SHA256(this.previuseHash + this.timestamp.toJSON() + JSON.stringify(this.data)).toString();
  }
}

export class GenesisBlock extends Block {
  generateHash() {
    this.hash = SHA256(this.timestamp.toJSON() + JSON.stringify(this.data)).toString();
  }
}
