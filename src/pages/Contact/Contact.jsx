import Title from '../../components/Title/Title.jsx'
import { useSelector } from 'react-redux';
import Card from '../../components/CardAPI/CardUser.jsx';
import Api from '../../service/Api.jsx'

function Contact() {
  
    const contacts = useSelector((state) => state.users.contacts);
  
  return (
    <div>
      <Title text="Contact List" />
      <ul>
        <div className="container-card">
        {contacts.map(user => (
          <ul key={user.id}>
             <Card key={user.id} user={user}/>
          </ul>
        ))}
      </div>
      </ul>
      <Api/>  
    </div>
  );
}

export default Contact;

