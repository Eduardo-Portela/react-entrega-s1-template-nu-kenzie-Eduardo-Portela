export const Button = ({ name, callback }) => {
  return <button onClick={callback}>{name}</button>;
};
