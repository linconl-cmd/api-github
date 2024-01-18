
import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";
import Proptypes from 'prop-types';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

const Profile = ({ user }) =>(
  <Container>
    <Header>
      <Avatar src={user.avatar_url} />
      <Login>{user.login}</Login>
      <Name>{user.name}</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20}/>
        {user.followers}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;
        {user.following}&nbsp;<i>seguindo</i>
        </Data>
      {user.company &&(
        <Data><MdWork size={20}/>{user.company}</Data>)}
      {user.location && (
        <Data><MdLocationCity size={20}/>{user.location}</Data>)}
      <Data><MdLink size={20}/><a href={`\\${user.blog}`}>{user.blog}</a></Data>
    </Inner>
  </Container>

);

Profile.prototypes = {
  user: Proptypes.shape({
    login: Proptypes.string.isRequired,
    name:Proptypes.string.isRequired,
    avatar_url: Proptypes.string.isRequired,
    followers_url: Proptypes.number.isRequired,
    following_url: Proptypes.number.isRequired,
    company: Proptypes.string,
    blog: Proptypes.string,
    location: Proptypes.string,
  }).isRequired,
};

export default Profile;
