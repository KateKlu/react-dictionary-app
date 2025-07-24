import { useState, useEffect } from 'react';
import axios from 'axios';
import Result from './Result';
import Photos from './Photos';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Dictionary.css';

export default function Dictionary(props) {
   const [isLoading, setIsLoading] = useState(false);
   const [word, setWord] = useState(props.defaultWord);
   const [wordData, setWordData] = useState({});
   const [photos, setPhotos] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [modalMsg, setModalMsg] = useState('');

   useEffect(() => {
      search(props.defaultWord);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   function openModal(message) {
      setModalMsg(message);
      setShowModal(true);
   }

   function changeWord(event) {
      setWord(event.target.value);
   }

   function handlePhoto(response) {
      setPhotos(response.data.photos);
   }

   function searchPhoto(term) {
      const apiKey = process.env.REACT_APP_SHECODES_KEY;
      const url = `https://api.shecodes.io/images/v1/search?query=${term}&key=${apiKey}`;
      axios.get(url).then(handlePhoto);
   }

   function handleResponse(response) {
      setIsLoading(false);

      if (!response.data.meanings || response.data.meanings.length === 0) {
         openModal(`Word “${word}” not found. Please try another.`);
         setWordData(null);
         return;
      }

      setWordData(response.data);
      searchPhoto(word);
   }

   function handleError() {
      setIsLoading(false);
      openModal('Network error. Please try again later.');
   }

   function search() {
      setIsLoading(true);
      const apiKey = process.env.REACT_APP_SHECODES_KEY;
      const apiLink = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
      axios.get(apiLink).then(handleResponse).catch(handleError);
   }

   function handleSubmit(event) {
      event.preventDefault();
      if (!word.trim()) {
         openModal('Please enter a word.');
         return;
      }
      search(word);
   }

   return (
      <div className="Dictionary">
         <section>
            <h2>What word would you like to look up?</h2>
            <form onSubmit={handleSubmit}>
               <div className="row">
                  <div className="col-9">
                     <input
                        type="search"
                        autoFocus={true}
                        placeholder="Search for a word"
                        defaultValue={props.defaultWord}
                        className="w-100 h-100"
                        onChange={changeWord}
                     />
                  </div>
                  <div className="col-3 ">
                     <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary w-100 d-none d-sm-block"
                     />

                     <input
                        type="submit"
                        value="🔍"
                        className="btn btn-primary w-100 d-sm-none d-block"
                     />
                  </div>
               </div>
            </form>
         </section>

         {isLoading && (
            <div className="Dictionary">
               <section>
                  <p>Loading...</p>
               </section>
            </div>
         )}

         {!isLoading &&
            wordData &&
            Array.isArray(wordData.meanings) &&
            wordData.meanings.length > 0 && (
               <>
                  <Result wordData={wordData} />
                  <Photos photos={photos} />
               </>
            )}
         <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
               <Modal.Title>Notice</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalMsg}</Modal.Body>
            <Modal.Footer>
               <Button variant="primary" onClick={() => setShowModal(false)}>
                  OK
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
}
