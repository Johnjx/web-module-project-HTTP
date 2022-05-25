import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const DeleteMovieModal = (props) => {
    const { deleteMovie, handleDeleteModal } = props

    const { id } = useParams();
    const history = useHistory();

  const routeToMovies = () => {
    history.push("/movies");
  }
    
    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:9000/api/movies/${id}`)
        .then(res => {
            deleteMovie(id)
            handleDeleteModal()
            routeToMovies()
        })
        .catch(err => console.log(err))
    }

    return (<div id="deleteEmployeeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Movie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete this Movie?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-danger" value="Delete" onClick={handleDelete}/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;