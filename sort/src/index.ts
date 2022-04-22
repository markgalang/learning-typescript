import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("zxaDvceAaahbjrerr");
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

numbersCollection.sort();
console.log(numbersCollection.data);

charactersCollection.sort();
console.log(charactersCollection.data);

linkedList.sort();
linkedList.print();
