import React from 'react';
import Modal from 'react-modal';
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
  }

  openModal = () => {
    this.setState({showModal:true});
  }

  closeModal = () => {
    this.setState({showModal:false});
  }

  render() {
    //console.log(this.state.list);

    if(this.state.list.length) {
      const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
      return (
        <div>
          <button className="ui primary button" onClick={this.openModal}>Replies</button>
          <Modal
              isOpen={this.state.showModal}
              style={customStyles}
          >
            <p>{this.state.list.length}</p>
            <button onClick={this.closeModal}>Close Modal</button>
          </Modal>
        </div>
      );
    }
    return <div></div>
  };
};

export default SubComment;
