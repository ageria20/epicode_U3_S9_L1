import React from "react"


class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="container-fluid navbar navbar-expand-lg">
  <div className="container">
    <img src={this.props.logo} alt={this.props.alt} style={this.props.logoStyle}/>
    <a className="navbar-brand" href="#">My First React APP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <a className="btn btn-outline-tertiary px-3 py-2 me-2"  href="#">Sign up</a>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        )
    }
}

export default HeaderComponent