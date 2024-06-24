import React from "react"

class ImageComponent extends React.Component{
   render() {
    return(
        <div className="col my-auto">
            <img className="ms-auto" src={this.props.image} alt={this.props.imageAlt} style={this.props.imageStyle} />
        </div>
    )
}
}


export default ImageComponent