import photo from './photo.jpg'

const posts = [
{
	user: 'Tronch',
	photo: {photo},
	likes: 1,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 18,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 5,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 102,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 19,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 5,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 12,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 12,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 15,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 122,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 52,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 2,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 1,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 0,
	phrase: 'What a cool cat!'
},
{
	user: 'Tronch',
	photo: {photo},
	likes: 12,
	phrase: 'What a cool cat!'
},


]


import React, {Component} from 'react';
import Card from './Card'

export default class Body extends Component {
	render() {
		return(
			<div className="body">
				{posts.map(posts => {
					return <Card user={posts.user} photo={photo} likes={posts.likes} phrase={posts.phrase} />
				})}
			</div>
			);
	}
}