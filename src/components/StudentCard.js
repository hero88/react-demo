
export default function StudentCard(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://icon-library.com/images/person-png-icon/person-png-icon-29.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Student name: {props.name}</h5>
                            <p>Student code: </p>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <a href="/">Home</a>
                </div>
            </div>
        </div>
    )
}