class EventEmitter {
  //first we crate a empty event's array
  constructor() {
    this.events = [];
  }
   
//on call push linstenr to events
  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }
//call the event
  emit(eventName, ...args) {
    const listeners = this.events[eventName];
    if (listeners) {
      for (const listener of listeners) {
        listener(...args);
      }
    }
  }
//remove the clistener from lop
  off(eventName, listener) {
    const listeners = this.events[eventName];
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }
}

const emitter = new EventEmitter();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

emitter.on("sayHello", greet);

emitter.emit("sayHello", "Alice");

emitter.off("sayHello", greet);

emitter.emit("sayHello", "Bob");
