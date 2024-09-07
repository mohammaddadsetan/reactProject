const titleBox = {
  height: '100vh',
  color: 'yellow',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'lightblue'
};





export default function MyTitleBox(props) {
  return (
    <div>
      <div style={titleBox}>
        <h1>{props.xyz.cname}</h1>
        {props.children}
      </div>
    </div>
  )

}