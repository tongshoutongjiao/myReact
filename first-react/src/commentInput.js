import React, { Component } from 'react'
import PropTypes from 'prop-types'
import wrapWithLoadData from './wrapWithLoadData'

class CommentInput extends Component {

    static propTypes = {
        onSubmit: PropTypes.func,
        data:PropTypes.any,
        saveData:PropTypes.func.isRequired
    }
    

      constructor (props) {
        super(props)
        this.state = {
          username: props.data||'',
          content: ''
        }
      }


      componentDidMount () {
        this.textarea.focus()
      } 

      handleUsernameBlur (event) {
        this.props.saveData(event.target.value)
      }

      handleUsernameChange (event) {
        this.setState({
          username: event.target.value
        })
      }

      handleContentChange (event) {
        this.setState({
          content: event.target.value
        })
      }

      handleSubmit () {
        if (this.props.onSubmit) {
          const { username, content } = this.state
          this.props.onSubmit({
              username, 
              content,
              createTime:+new Date()
            })
        }
        this.setState({ content: '' })
      }

      _loadUsername () {
        const username = localStorage.getItem('username')
        if (username) {
          this.setState({ username })
        }
      }

     

      _saveUsername (username) {
        localStorage.setItem('username', username)
      }
    
    
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                        onBlur={this.handleUsernameBlur.bind(this)}
                        onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} 
                        ref={(textarea) => this.textarea = textarea}
                        onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                    </div>
                    <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
        </div>
        )
    }
}

CommentInput=wrapWithLoadData(CommentInput,'name')

export default CommentInput