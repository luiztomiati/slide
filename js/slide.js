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
    let typeEvent;
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.dist.startX = event.clientX;
      typeEvent = 'mousemove';
    } else {
      typeEvent = 'touchmove';
      this.dist.startX = event.changedTouches[0].clientX;
    }
    this.wrapper.addEventListener(typeEvent, this.move);
  }
  move(event) {
    const pointer =
      event.type === 'mousemove'
        ? event.clientX
        : event.changedTouches[0].clientX;
    const positionFinal = this.position(pointer);
    this.slideMovement(positionFinal);
  }
  end(event) {
    const moveType = event.type === 'mouseup' ? 'mousemove' : 'touchmove';
    this.wrapper.removeEventListener(moveType, this.move);
    this.dist.positionFinal = this.dist.positionAtual;
  }
  addEvent() {
    this.wrapper.addEventListener('mousedown', this.start);
    this.wrapper.addEventListener('mouseup', this.end);
    this.wrapper.addEventListener('touchstart', this.start);
    this.wrapper.addEventListener('touchend', this.end);
  }

  init() {
    this.addEvent();
  }
}
