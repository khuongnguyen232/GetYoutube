import React from 'react';
import Modal from 'react-modal';

import ReplyBox from './ReplyBox';
import API from '../../api/youtube';

class SubComment extends React.Component {
  state={showModal:false,list:[],commentCount:100};

  getSubComments = async () => {
    if(this.props.id) {
      try {
        const response = await API.get('./comments',{
          params:{
            part:'snippet',
            maxResults:this.state.commentCount,
            parentId:this.props.id
            }
          }
        )
        this.setState({list:response.data.items,commentCount:response.data.items.length});
        //console.log(response.data.items)
    } catch(err) {
        console.log(err);
      }
    }
  }

  componentDidMount() {
    this.getSubComments();
    Modal.setAppElement('body');
  }

  openModal = () => {
    this.setState({showModal:true});
  }

  closeModal = () => {
    this.setState({showModal:false});
  }

  getListOfReplies = () => {
    return this.state.list.map((comment) => {
      return <ReplyBox comment={comment} key={comment.id}/>
    })
  }

  loadMoreComment = () => {
    let newCount = this.state.commentCount + 10;
    this.setState({commentCount:newCount},() => {
      this.getSubComments()
    });
  }

  render() {
    //console.log(this.state.list);
    if(this.state.list.length) {
      return (
        <div>
          <button className="ui primary button" onClick={this.openModal}>{this.state.list.length} Replies</button>
          <Modal
              isOpen={this.state.showModal}
          >
            <button className="ui button float-right" onClick={this.closeModal}>
              <i id="close-icon" className="x icon"></i>
            </button>

            <div className="ui comments">
              {this.getListOfReplies()}
            </div>
            {/*
              <button className="fluid ui button" onClick={this.loadMoreComment}>Load more replies</button>
            */}

          </Modal>
        </div>
      );
    }
    return <div></div>
  };
};

export default SubComment;
