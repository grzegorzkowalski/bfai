import PropTypes from 'prop-types';

const Name = ({name, surname}) => {
    console.log(name, surname);
    return (
        <div>
            <h1>{name} {surname}</h1>
        </div>
    );
};

export default Name;

Name.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
}
