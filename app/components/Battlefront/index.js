import React from 'react';

import Box from '../Box';
import create from '../Box/box-factory';
import Exception from '../Exception';
import BB8, { HEIGHT, LEFT, WIDTH } from '../BB8';

import './style.css';

const BOX_SIZE = 80;

const initialBoxes = [
  create(BOX_SIZE, HEIGHT, false),
  create(BOX_SIZE, HEIGHT, false),
  create(BOX_SIZE, HEIGHT, false),
  create(BOX_SIZE, HEIGHT, true),
  create(BOX_SIZE, HEIGHT, true),
  create(BOX_SIZE, HEIGHT, false),
];

const BORDER_VALUE = -2 * BOX_SIZE;

export default class Battlefront extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      boxNear: null,
      end: false,
    };
  }

  componentDidMount() {
    this.addNewBox();
    this.addInterval = setInterval(this.addNewBox, 7000);
    this.moveInterval = setInterval(this.updateBoxesPosition, 120);
  }


  componentDidUpdate(_, prevState) {
    if (!prevState.end && this.state.end) {
      clearInterval(this.addInterval);
      clearInterval(this.moveInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
    clearInterval(this.moveInterval);
  }

  addNewBox = () => {
    if (this.state.boxes.length === initialBoxes.length) {
      return clearInterval(this.addInterval);
    }
    const newBox = initialBoxes[this.state.boxes.length];
    const newBoxes = [...this.state.boxes, newBox];
    this.setState({
      boxes: newBoxes,
    });
  };

  updateBoxesPosition = () => {
    this.setState({
      boxes: this.state.boxes.map(
        box => box.left > BORDER_VALUE
          ? { ...box, left: box.left - 30 }
          : box,
      ),
      boxNear: this.state.boxes.find(
        box => box.left >= LEFT && box.left <= LEFT + WIDTH * 2.5,
      ),
    });
  };

  endTheGame = () => {
    this.setState({
      end: true,
    });
  };

  render() {
    const { boxes, boxNear, end } = this.state;
    return (
      <div className="container">
        <Exception>
          <div className="battlefront" />{' '}
          {boxes.ma(b => <Box key={b.id} {...b} />)}
          {end && (
            <div className="end">
              <h1>The End</h1>
            </div>
          )}
          <BB8 box={boxNear} end={end} onCollision={this.endTheGame} />
          <div className="ground" />
        </Exception>
      </div>
    );
  }
}