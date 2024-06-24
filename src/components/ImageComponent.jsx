import React from "react"

class ImageComponent extends React.Component{
   render() {
    return(
        <img src={this.props.image} alt={this.props.imageAlt} style={this.props.imageStyle} />
    )
}
}


export default ImageComponent