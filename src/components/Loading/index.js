import React from 'react';

const Loading = ({text, isActive}) =>  (
  <div className={"pageloader has-background-grey-darker " + ( isActive ? 'is-active' : '')}>
    <span className="title">{ text }</span>
  </div>
);

Loading.defaultProps = {
  text: "Loading..",
  isActive: false
};

export default Loading;