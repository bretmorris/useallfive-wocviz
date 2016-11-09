import { Graphics } from 'pixi.js/src';
import { IS_MOBILE } from '../../utils/config';

export default class ColorDot extends Graphics {
  constructor(blockId, blockTitle, indexType, data) {
    super();

    const radius = IS_MOBILE() ? 1.5 : 3;
    const { color, id, colorId } = data;

    this.dotType = id;
    this.color = color;
    this.colorId = colorId;
    this.indexType = indexType;
    this.blockId = blockId;
    this.blockTitle = blockTitle;

    // console.log(data);

    this.beginFill(color);
    this.drawCircle(0, 0, radius);
    this.endFill();
    this.addEvents();
  }

  addEvents() {
    this.buttonMode = true;
    this.interactive = true;
    const events = ['tap', 'click'];
    for (const event of events) {
      this.on(event, this.eventHandler.bind(this));
    }
  }

  eventHandler() {
    this.emit('clickDot', {
      blockTitle: this.blockTitle,
      indexType: this.indexType
    });
  }

  getGlobalPoint() {
    return this.toGlobal({x: 0, y: 0});
  }
}
