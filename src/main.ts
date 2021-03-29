import { Block } from './entity/Block';
import { Blockchain } from './entity/blockchain';

async function main() {
  const blockchain = new Blockchain();

  const block1 = new Block('Hello world');

  blockchain.addBlock(block1);

  const block2 = new Block('Test');

  blockchain.addBlock(block2);

  console.log(blockchain);
}
main();
