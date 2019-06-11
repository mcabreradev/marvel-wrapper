import { connect } from 'react-redux';
import { fetchCharactersAction } from '../../store/actions';
import { Characters } from '../../components';

const mapStateToProps = state => ({
    isLoading: state.app.isLoading,
});

const mapActionToProps = {
    fetchCharactersAction,
};

export default connect(mapStateToProps, mapActionToProps)(Characters);