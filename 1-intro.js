const amount = 2;

if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
}

console.log(`hey it's my first node app!!`);

const callBack = () => {
  console.log("hihi");
};

setInterval(callBack, 1000);
