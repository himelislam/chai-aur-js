

const makeWithWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance;
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient funds";
      },
    };
  })(balance);

  const one = () => {

  }


// const firstAccount = makeWithWithdraw(30);
// const firstAccount = makeWithWithdraw(50);
// console.log(firstAccount.withdraw(60));

// const selfInvoke = (val) => ((e) => {
//     return 'heelo' + e;
// })(val);

// const hello = 'abcdefgh'
// console.log(hello.substring()
// );
const g = 'hi'
;(function(g){
 console.log('lkasdjfas', g);
})(g);

// console.log(selfInvoke('asd'));