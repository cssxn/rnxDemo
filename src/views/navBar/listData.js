import {ListView} from 'react-native';
import tester from '../../tester.js';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let listData = ds.cloneWithRows([
    {
        text: '改标题 setTitle',
        onPress() {
            this.props.view.refs.navBar.setState({
                title: 'new title very long long long long long long long'
            })
        },
    },
]);

export default listData;
