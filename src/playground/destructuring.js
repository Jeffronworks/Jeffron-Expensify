// objects
const book = {
  name: "ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "penguin"
  }
};

const { name: publisherName = "self-published" } = book.publisher;

console.log(publisherName);

//arrays

const item = ["coffee (ice)", "$2.0", "$2.5", "$2.75"];

const [coffee, , price] = item;

console.log(`A medium ${coffee} costs ${price}`);
