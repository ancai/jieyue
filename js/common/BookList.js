import React, { Component } from 'react';
import {
	View,
	Text,
	ListView,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native';

import {BOOK_IMAGE_URL} from '../config/env';
import routes from '../filter/route';

export default class BookList extends Component {
	constructor(props) {
		super(props);
	}

	showDetail(book) {
		this.props.navigator.push(
			Object.assign(routes['Detail'], {book})
		);
	}

	renderRow(book) {
		return (
			<TouchableOpacity onPress={() => this.showDetail(book)}>
				<View style={styles.row}>
					<Image source={{uri: BOOK_IMAGE_URL + 's500x500_' + book.cover}} style={styles.pic}/>
					<Text style={styles.bookTitle}>{book.title}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		return (
			<ListView
				initialListSize={20}
				dataSource={this.props.dataSource}
				renderRow={this.renderRow.bind(this)}
				style={styles.list}
				removeClippedSubviews={false}
				enableEmptySections={true}
			/>
		);
	}

}

const styles = {
	list: {
		paddingBottom: 1,
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		height: 205,
		alignItems: 'center',
		paddingLeft: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#d1d1d1',
		backgroundColor: '#fffffd'
	},
	pic: {
		height: 190,
		flex: 1,
	},
	bookTitle: {
		color: '#666',
		flex: 1,
		marginLeft: 15,
		fontSize: 20
	},
};