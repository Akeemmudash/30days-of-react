function Btn() {
  const clickHandler = () => console.log("clicked" );
  return <button onMouseOver={clickHandler}>Click Me</button>;
}
export default Btn;
