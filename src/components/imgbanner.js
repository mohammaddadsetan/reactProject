const stylee={
    objectFit:'cover',
    width:'100%' ,
    height:'100%'
    
    }

export default function img({width , height , padding , src  }) {
    return(

<span style={{width:width , height:height , padding:padding }}><img className={{stylee}} src={src} alt="" /></span>


    )
    
}


