const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const {recoverSenderAddress} = require('./crypto')


app.use(cors());
app.use(express.json());

const balances = {
  "0fc9515116b93ec834a9629c6dfc48a18b412db4": 100,
  "61b086dd941670f796ab2695683813e963a387f0": 50,
  "9e6cf8de59b415cb6d971287804e44744e004036": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { signature, recipient, amount } = req.body;

  // Lets construct the message first
  const message = {
    recipient,
    amount
  }

  // Lets recover senderAddress
  const sender = recoverSenderAddress(message,signature)
  console.log(sender)

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
