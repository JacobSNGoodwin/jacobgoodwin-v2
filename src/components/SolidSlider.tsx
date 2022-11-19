import { Component, createSignal, JSX } from 'solid-js';
import { createEventListenerMap } from '@solid-primitives/event-listener';

import styles from './SolidSlider.module.css';

type SliderProps = {
  children: Array<JSX.Element>;
};

const SolidSlider: Component<SliderProps> = ({ children = [] }) => {
  const [activeSlide, setActiveSlide] = createSignal(0);
  const [xStart, setXStart] = createSignal(0);

  const handleTouchStart = (event: TouchEvent) => {
    console.log('touchstart', event);
    setXStart(event.touches[0].screenX);
  };

  const handleTouchEnd = (event: TouchEvent) => {
    console.log('touchend', event, xStart());
    const xEnd = event.changedTouches[0].screenX;

    if (xEnd - xStart() > 50) {
      handleDecActiveSlide();
    }

    if (xEnd - xStart() < 50) {
      handleIncActiveSlide();
    }
  };

  const handleMouseDown = (event: MouseEvent) => {
    console.log('mousedown', event);
    setXStart(event.screenX);
  };

  const handleMouseUp = (event: MouseEvent) => {
    console.log('mouseup', event, xStart());
    const xEnd = event.screenX;

    if (xEnd - xStart() > 50) {
      handleDecActiveSlide();
    }

    if (xEnd - xStart() < 50) {
      handleIncActiveSlide();
    }
  };

  let swipable!: HTMLDivElement;
  createEventListenerMap(
    () => swipable,
    {
      touchstart: handleTouchStart,
      touchend: handleTouchEnd,
      mousedown: handleMouseDown,
      mouseup: handleMouseUp,
    },
    { passive: true }
  );

  const handleIncActiveSlide = () => {
    if (activeSlide() === children.length - 1) {
      setActiveSlide(0);
      return;
    }

    setActiveSlide(activeSlide() + 1);
  };

  const handleDecActiveSlide = () => {
    if (activeSlide() === 0) {
      setActiveSlide(children.length - 1);
      return;
    }

    setActiveSlide(activeSlide() - 1);
  };

  console.log('the childrens', children);

  return (
    <>
      <p>The active slide: {activeSlide()}</p>
      <div ref={swipable} class={styles.container}>
        {children}
        {children.map((child, i) => {
          const isActive = i === activeSlide();

          return (
            <div
              classList={{
                [styles.selected]: isActive,
                [styles.unselected]: !isActive,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
      <div class={styles.buttons}>
        <button onClick={handleDecActiveSlide}>Back</button>
        <button onClick={handleIncActiveSlide}>Forward</button>
      </div>
    </>
  );
};

export default SolidSlider;
