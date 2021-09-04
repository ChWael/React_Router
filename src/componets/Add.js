import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '200px 200px 200px 200px',
    background: 'linear-gradient(100deg, #fff, #000)'
  },
};


Modal.setAppElement('#root');

function Add({ addMovieHandler }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

    subtitle.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [title, setTitle] = useState("");
  
  const [rate, setRate] = useState("");
  
  const [img, setImg] = useState("");
  
  const [description, setDescription] = useState("");


  const input = () => {
    addMovieHandler({
      id:Math.random(),
      title: title,
      img: img,
      rate: rate,
      description: description
    })
  };
  const addTitle = (e) => {
    setTitle(e.target.value);
  }
  const addImg = (e) => {
    setImg(e.target.value);
  };
  const addRate = (e) => {
    setRate(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className = 'modal'>
      <button className = 'add_Movie_btn'  onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      > 
        <h2 style = {{display: 'flex', justifyContent: 'center'}} ref={(_subtitle) => (subtitle = _subtitle)}>Add Here</h2>
        <div className = 'add-Movie-info'>
        <button className = 'Modal_Close_btn' onClick={closeModal}>Close</button>
        <form>
          <h5>Title</h5>
          <input type = 'text' placeholder = 'Movie Name' onChange = {addTitle} />
          <h5>Poster Link</h5>
          <input type = 'text' placeholder = 'Image Link' onChange = {addImg} />
          <h5>Description</h5>
          <input type = 'text' placeholder = 'Movie Story' onChange = {addDescription} />
          <h5>Rating</h5>
          <input type = 'number' placeholder = 'Rate This Movie' onChange = {addRate} />
        </form>
        <button className = 'Modal_Add_btn' style = {{marginTop:'1cm'}} onClick = {input}> Add </button>
        </div>
      </Modal>
    </div>
  );
}

export default Add;

