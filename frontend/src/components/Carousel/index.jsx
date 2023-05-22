import React, { useEffect, useRef, useState } from "react";

const Carousel = (props) => {
  const [containerWidth, setContainerWidth] = useState();
  const [itemWidth, setItemWidth] = useState();
  const divRef = useRef(null);
  const itemRightRef = useRef(1);
  const itemRefs = useRef([]);
  const [dragStartX, setDragStartX] = React.useState(0)
  const [dragEndX, setDragEndX] = React.useState(0)
  useEffect(() => {
    const newWidths = itemRefs.current.map(
      (itemRef) => itemRef?.clientWidth ?? 0
    );

    setContainerWidth(
      (newWidths[0] + props.margin) * props.items - props.margin
    );
    setItemWidth(newWidths[0]);
  }, [props.datas, props.items]);


  const endNext = Math.ceil(props.datas?.length / props.items) + 2;
  const next = () => {

    const nextIndex = itemRightRef.current + 1;

    if (nextIndex <= endNext) {
      itemRightRef.current = nextIndex;
      divRef?.current?.scrollTo({
        behavior: "smooth",
        left:
          (itemRightRef.current - 1) * (itemWidth) +
          (itemRightRef.current - 1) * props.margin,
      });
    } else {
      itemRightRef.current = 1;
      divRef?.current?.scrollTo({
        behavior: "smooth",
        left:
          (itemRightRef.current - 1) * ((itemWidth) + props.margin),
      });
    }
  };

  const prev = () => {
    const endNext = Math.ceil(props.datas.length / props.items) + 2;
    const prevIndex = itemRightRef.current - 1;
    if (prevIndex >= 1) {
      itemRightRef.current = prevIndex;
      divRef?.current?.scrollTo({
        behavior: "smooth",
        left:
          (itemRightRef.current - 1) * ((itemWidth) + props.margin),
      });
    } else {
      itemRightRef.current = endNext;
      divRef?.current?.scrollTo({
        behavior: "smooth",
        left:
          (itemRightRef.current - 1) * (itemWidth) +
          (itemRightRef.current - 1) * props.margin,
      });
    }
  };


  const handleMouseDown = (event) => {
    setDragStartX(event.clientX)
  }

  const handleMouseUp = () => {
    const diff = dragEndX - dragStartX
    const sensitivity = 50 // Adjust this value to control how sensitive the drag should be
    if (diff > sensitivity) {
      prev()
    } else if (diff < -sensitivity) {
      next()
    }
  }

  const handleMouseMove = (event) => {
    setDragEndX(event.clientX)
  }
  return (
    <div
      className={"relative flex-row w-full"}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {!props.hiddenButton && (
        <button
          className={
            (props.btnPositionClass
              ? props.btnPositionClass
              : "-translate-x-1/2") +
            " z-10 w-16 h-16 flex items-center justify-center  absolute rounded-full left-[2%] top-1/2 -translate-y-1/2 bg-white/70 text-[#7B7979] "
          }
          style={{
            boxShadow:
              "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08)",
          }}
          onClick={prev}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </button>
      )}
      <div
        ref={divRef}
        className={
          `flex scroll-smooth  min-w-full` +
          (props.overflow ? "" : " overflow-hidden")
        }
        style={{
          maxWidth: `${containerWidth}px`,
          display: "flex",

          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {props.datas?.map((item, index) => {
          return (
            <div
              ref={(ref) => (itemRefs.current[index] = ref)}
              id={`${index}`}
              className={`flex `}
              key={index}
              style={
                index === props.datas.length - 1
                  ? { flexShrink: 0 }
                  : { marginRight: `${props.margin}px`, flexShrink: 0 }
              }
            >
              {props.renderItem(item, index)}
            </div>
          );
        })}
      </div>

      {!props.hiddenButton && (
        <button
          className={
            (props.btnPositionClass
              ? "-" + props.btnPositionClass
              : "translate-x-1/2") +
            " z-10 w-16 h-16 flex items-center justify-center absolute rounded-full right-[2%] top-1/2 -translate-y-1/2 bg-white/70 text-[#7B7979] "
          }
          style={{
            boxShadow:
              "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08)",
          }}
          onClick={next}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Carousel;
