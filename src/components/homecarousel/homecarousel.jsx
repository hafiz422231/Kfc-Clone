/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { CardData } from '../../appData/appHomeData';

import {
  Carousel,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap';

const items = CardData;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {

    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
            <Link to={`/${item.routeName}`}>
                <img src={item.src} className="w-100" alt={item.alttext} />  
            </Link>
          
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
          <ol className="carousel-indicators">
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          </ol>
        {slides}

      </Carousel>
    );
  }
}

export default Slider;