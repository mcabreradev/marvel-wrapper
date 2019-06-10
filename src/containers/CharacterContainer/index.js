import { connect } from 'react-redux';
import { fetchRestaurantsAction } from '../../store/actions/restaurantActions';
import { toggleModalAction } from '../../store/actions/appActions';
import { Restaurants } from '../../components';

const mapStateToProps = state => ({
    restaurants: state.restaurant.filteredRestaurants,
    name: state.filter.name,
    selectedSortby: state.filter.selectedSortby ? state.filter.selectedSortby : false,
    isLoading: state.app.isLoading,
    isModalActive: state.app.isModalActive,
    reviewedRestaurant: state.app.reviewedRestaurant,
});

const mapActionToProps = {
    fetchRestaurantsAction,
    toggleModalAction
};

export default connect(mapStateToProps, mapActionToProps)(Restaurants);