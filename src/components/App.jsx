import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import PhoneBookList from './PhoneBookList';
import Form from './Form';
import Filter from './Filter';

class App extends Component {
  state = {
    phoneList: [
      { id: 'id-1', name: 'Tony Stark', number: '459-12-56' },
      { id: 'id-2', name: 'Stephen Rogers', number: '443-89-12' },
      { id: 'id-3', name: 'Bruce Banner', number: '645-17-79' },
      { id: 'id-4', name: 'Thor Odinson', number: '227-84-62' },
      { id: 'id-5', name: 'Natasha Romanoff', number: '207-91-27'},
      { id: 'id-6', name: 'Clint Barton', number: '564-92-48' },
    ],
    filter: '',
  };
  formSubmitHendler = data => {
    // console.log(data);
    const { phoneList } = this.state;
    const PhonebookListItem = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    if (phoneList.find(item => item.name === PhonebookListItem.name)) {
      return alert(`${PhonebookListItem.name}  is olrady in contacts`);
    }
    this.setState(prevState => ({
      phoneList: [PhonebookListItem, ...prevState.phoneList],
    }));
  };

  deletePhoneListItem = phoneListId => {
    this.setState(prevState => ({
      phoneList: prevState.phoneList.filter(
        phoneListItem => phoneListItem.id !== phoneListId
      ),
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleFilter = () => {
    const { phoneList, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return phoneList.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const filteredPhonebookList = this.getVisibleFilter();

    return (
      <>
        <Form onSubmit={this.formSubmitHendler} />

        <Filter value={filter} onChange={this.changeFilter} />
        <PhoneBookList
          phoneList={filteredPhonebookList}
          onDeletePhoneListItem={this.deletePhoneListItem}
        />
      </>
    );
  }
}
export default App;