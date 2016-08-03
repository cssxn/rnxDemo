import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import {
    clearSelect,
} from '../actions';

class Cart extends QComponent {
    static reduxPlugin = {
        mapStateToProps: ['total'],
        mapDispatchToProps: {
            clearSelect,
        },
    };

    onPressClear() {
        this.props.clearSelect();
    };

    styles = {
        cart: {
            borderColor: '#000',
            borderTopWidth: 1,
            height: 40,
            paddingLeft: 10,
            alignItems: 'center',
            backgroundColor: '#fff',
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
        },
            total: {
                flex: 1,
            },
    };

    render() {
        return (
            <View class="cart">
                <Text class="total">Total: {this.props.total}</Text>
                <TouchableOpacity underlayColor="0.6" onPress={this.onPressClear}>
                    <Text>清空</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Cart;
