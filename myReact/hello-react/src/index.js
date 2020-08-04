import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Title extends Component {
  handleClickOnTitle (word,e) {
    console.log('Click on title.');
    console.log(this);
    console.log(word)
    console.log(e);
    console.log(e.currentTarget)
    console.log(e.type)  // change
    e.persist()


  }
  render () {
   
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this,'Hello')} data-type="change">React 小书</h1>
    )
  }
}

class Header extends Component{
  renderGoodWord (goodWord, badWord) {
    console.log('呜呜呜');
    const isGoodWord = true
    return isGoodWord ? goodWord : badWord
  }
  
  render () {
    return (
      <div>
        <Title></Title>
        <h2>This is Header</h2>

      </div>
    )
  }
}

class Main extends Component{
  render(){
    return (
      <div>
        <h2>This is main content</h2>
      </div>
    )
  }
}

class Footer extends Component{
  render(){
    return (
      <div>
        This is footer
      </div>
    )
  }
}

class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }

  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked
          ? this.props.likedText
          : this.props.unlikedText} 👍
      </button>
    )
  }
}

class User extends Component {
  render () {
    console.log('查看组件传递的值');
    console.log(this.props)
    const { user } = this.props
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr />
      </div>
    )
  }
}




const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]



class Index extends Component {
  render () {
    return (
      <div>
        {users.map((user,i) => <User key={i} user={user} />)}
      </div>
    )
  }
}

ReactDOM.render(
  <Index></Index>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
