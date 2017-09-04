Function.prototype.myBind = function (context, ...args) {
  return () => this.apply(context, args);
};

class Llama {
  constructor() {
    this.name = 'a llama';
  }
}

const turnOn = function() {
  console.log(`Turning on ${this.name}`);
}

turnOn();

let llama = new Llama;

turnOn.bind(llama)();
turnOn.myBind(llama)();
