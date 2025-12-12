export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.start = this.start.bind(this);
    this.move = this.move.bind(this);
    this.end = this.end.bind(this);
  }
  start(event) {
    event.preventDefault();
    this.wrapper.addEventListener('mousemove', this.move);
  }
  move(event) {}
  end() {
    this.wrapper.removeEventListener('mousemove', this.move);
  }
  addEvent() {
    this.wrapper.addEventListener('mousedown', this.start);
    this.wrapper.addEventListener('mouseup', this.end);
  }

  init() {
    this.addEvent();
  }
}
