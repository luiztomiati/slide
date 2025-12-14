export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {
      positionFinal: 0,
      startX: 0,
      move: 0,
    };
    this.start = this.start.bind(this);
    this.move = this.move.bind(this);
    this.end = this.end.bind(this);
  }

  position(clientX) {
    this.dist.move = (this.dist.startX - clientX) * 2;
    return this.dist.positionFinal - this.dist.move;
  }
  slideMovement(event) {
    this.dist.positionAtual = event;
    this.slide.style.transform = `translate3d(${event}px, 0, 0)`;
  }
  start(event) {
    event.preventDefault();
    this.dist.startX = event.clientX;
    this.wrapper.addEventListener('mousemove', this.move);
  }
  move(event) {
    const positionFinal = this.position(event.clientX);
    this.slideMovement(positionFinal);
  }
  end() {
    this.wrapper.removeEventListener('mousemove', this.move);
    this.dist.positionFinal = this.dist.positionAtual;
  }
  addEvent() {
    this.wrapper.addEventListener('mousedown', this.start);
    this.wrapper.addEventListener('mouseup', this.end);
  }

  init() {
    this.addEvent();
  }
}
