import React, { useRef } from " react ";
import { render } from " react - dom ";
import { useReactToPrint } from " react - to - print ";

class ComponentToPrint extends React.Component {
  render() {
    return (
      // demo component
      <div>
        <h1> Hello, world! </h1>
        <p> Lorem ipsum, etc. </p>
      </div>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

render(<Example />, document.querySelector("root"));
