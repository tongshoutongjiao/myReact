
const createDOMFromString = (domString) => {
    const div = document.createElement('div');
    div.innerHTML = domString;
    return div
}

class likeButton {

    constructor() {
        this.state = {
            isLiked: false
        }
    }

    setState(state){
        const oldEl=this.el;
        this.state=state;
        this.el=this.render()

        if(this.onStateChange){
            this.onStateChange(oldEl,this.el)
        }
    }

    changeLikeText() {
        console.log('点击取消')
        this.setState({
            isLiked:!this.state.isLiked
        })
    }
    render() {
        console.log('再次唤起')
        this.el = createDOMFromString(`<button id="like-btn">
        <span class="like-text">${this.state.isLiked?'取消':'点赞'}</span>
        <span>👍</span>
        </button>`);
        console.log(this.el);
        this.el.addEventListener('click', this.changeLikeText.bind(this), false);
        return this.el;
    }
}