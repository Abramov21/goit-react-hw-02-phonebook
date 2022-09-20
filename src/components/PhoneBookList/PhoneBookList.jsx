import PropTypes from 'prop-types';

const PhoneBookList = ({ phoneList, onDeletePhoneListItem }) => {
  return (
    <ul>
      {phoneList.map(({ id, name, number }) => (
        <li key={id} >
          <p>{name}</p>
          <p>{number}</p>
          <button
            onClick={() => onDeletePhoneListItem(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhoneBookList;

PhoneBookList.propTypes = {
  phoneList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeletePhoneListItem: PropTypes.func,
};

