import Title from '../../components/Title/Title.jsx'
import { useSelector } from 'react-redux';
import Card from '../../components/CardUser/Card.jsx'

function Favorite() {

  const favorites = useSelector((state) => state.users.favorites);

  return (
    <div>
      <Title text="Favorites" />
      <ul>
      <div className="container-card">
        {favorites.map(user => (
          <ul key={user.id}>
             <Card key={user.id} user={user}/>
          </ul>
        ))}
      </div>
      </ul>
    </div>

    
  );
}

export default Favorite;

  