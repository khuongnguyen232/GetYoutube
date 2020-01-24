import React from 'react';
import Modal from 'react-modal';

import ReplyBox from './ReplyBox';
import API from '../../api/youtube';

class SubComment extends React.Component {
  state={showModal:false,list:[],comCount:10};

  getSubComments = async () => {
    if(this.props.id) {
      try {
        const response = await API.get('./comments',{
          params:{
            part:'snippet',
            maxResults:this.state.comCount,
            parentId:this.props.id
            }
          }
        )
        this.setState({list:response.data.items});
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

  render() {
    //console.log(this.state.list);

    if(this.state.list.length) {
      const customStyles = {
        content : {
          width : '30%',
          height: '50%',
          top : '50%',
          left : '50%',
          marginRight : '-50%',
          transform : 'translate(-50%, -50%)',
          padding:0
        }
      };
      return (
        <div>
          <button className="ui primary button" onClick={this.openModal}>{this.state.list.length} Replies</button>
          <Modal
              isOpen={this.state.showModal}
              style={customStyles}
          >
            <button className="ui button float-right" onClick={this.closeModal}>
              <i id="close-icon" className="x icon"></i>
            </button>

            <div className="ui comments">
              {this.getListOfReplies()}
            </div>
          </Modal>
        </div>
      );
    }
    return <div></div>
  };
};

export default SubComment;
