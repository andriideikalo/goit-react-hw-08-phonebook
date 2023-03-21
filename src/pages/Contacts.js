import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from '../redux/contact/operations';
import { ContactForm } from '../components/ContactForms/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { selectError, selectLoadingState } from '../redux/contact/selectors';
import { ContactList } from '../components/ContactList/ContactList';
import { Container } from '../components/Container/Container';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingState);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Container>
  );
}
