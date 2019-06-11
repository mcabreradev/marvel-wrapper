import { connect } from 'react-redux';
import { fetchCharacterByIdAction } from '../../store/actions';
import { CharacterDetails } from '../../components';

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  character: state.characters.character,
});

const mapActionToProps = {
  fetchCharacterByIdAction,
};

export default connect(mapStateToProps, mapActionToProps)(CharacterDetails);