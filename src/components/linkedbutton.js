import './buttons.css';

export default function Linkedbutton({value , background , width ,height}) {
  return (
    <a href="./" className="linked-button button-flex-center" style={{backgroundColor:background , width:width , height:height}}>{value}</a>
  )
}

