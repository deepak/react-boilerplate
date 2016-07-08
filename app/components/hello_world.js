class HelloWorld {
  constructor() {
    this.tag = 'h1'
    this.text = 'Hello World';
  }

  element() {
    const element = document.createElement(this.tag);
    element.innerHTML = this.text;

    return element;
  }

  toString() {
    return `(${this.text})`;
  }
}

module.exports = function() {
  const helloWorld = new HelloWorld();
  return helloWorld.element();
};
