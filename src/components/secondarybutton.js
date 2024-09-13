import './buttons.css'


export default function Button({children , background , width, height }) {
    return (
      <div className="secondary-button  button-flex-center" style={{backgroundColor:background , width:width , height:height}}>{children}</div>

    )
  }