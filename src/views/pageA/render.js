import { View } from 'react-native';
import List from '../../common/List.js';
import listData from './listData.js';

let navBarOpts = {
    // 标题内容，默认空字符串
    title: 'Page A',
};

export default function() {
    return (
        <View style={{
            flex: 1,
        }}>
            <RNPlus.Router.NavBar opts={navBarOpts} />
            <View style={{
                flex: 1,
            }}>
                <List dataSource={listData} view={this} />
            </View>
        </View>
    );
};
