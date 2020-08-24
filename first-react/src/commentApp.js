import React, { Component } from 'react'
import CommentInput from './commentInput'
import CommentList from './commentList.js'
import wrapWithLoadData from './wrapWithLoadData'
import propTypes from 'prop-types'

class CommentApp extends Component {

    static propTypes={
        data:propTypes.any,
        saveData:propTypes.func.isRequired
    }

    constructor (props) {
        super(props)

        console.log('查看传递进来的参数')

        console.log(props)
        this.state = {
          comments: props.data
        }
    }

    handleSubmitComment (comment) {
     
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
       this.props.saveData(comments)
    }

    componentWillMount(){
        // this._loadComments()
    }

    handleDeleteComment (index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this.props.saveComments(comments)

    }
    _loadComments(){
        console.log('嘿，打不着');
        let comments=localStorage.getItem('comments');
        if(comments){
            comments=JSON.parse(comments)
            this.setState({comments})
        }

    }

    _saveComments(comments){
        localStorage.setItem('comments', JSON.stringify(comments))
    }
    

   
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}  />
      </div>
    )
  }
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')

export default CommentApp