import PropTypes from 'prop-types'

function Student(props) {

    // var toDisplay;
    // if(props.isStudent == true) {
    //     toDisplay = "Yes";
    // } else {
    //     toDisplay = "No";
    // }


    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}


export default Student