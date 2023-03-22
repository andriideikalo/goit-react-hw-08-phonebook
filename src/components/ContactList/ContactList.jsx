import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleList } from '../../redux/contact/selectors';
import { deleteContact } from '../../redux/contact/operations';
import {
  ContactItemStyled,
  ButtonItemStyled,
  ContactNameItemStyled,
} from '../ContactList/ContactItem/ContactItemStyled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleList = useSelector(selectVisibleList);

  return (
    <ol>
      {visibleList.length !== 0 ? (
        visibleList.map(contact => (
          <ContactItemStyled key={contact.id}>
            <ContactNameItemStyled>{contact.name} </ContactNameItemStyled>
            <ContactNameItemStyled> {contact.number}</ContactNameItemStyled>
            <ButtonItemStyled
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </ButtonItemStyled>
          </ContactItemStyled>
        ))
      ) : (
        <h2>The list of contacts is empty</h2>
      )}
    </ol>
  );
};

// export default ContactList;
