import './Card.css';

function Card(props) {
    // props.className for add class in another js file
  const classes = 'card ' + props.className;
  
  //props.children for add components in anther js file
  return <div className={classes}>{props.children}</div>;
}

export default Card;