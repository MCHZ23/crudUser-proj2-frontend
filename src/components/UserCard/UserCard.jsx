import { useState } from "react";
import Modal from "../Modal/Modal";
import UserDeleteConfirm from "../UserDeleteConfirm/UserDeleteConfirm";

import "./UserCard.css";

const UserCard = ({ user, onEdit, onDelete }) => {
  const [isDeleteWindowVisible, setIsDeleteWindowVisible] = useState(false);

  return (
    <>
      <Modal isVisible={isDeleteWindowVisible}>
        <UserDeleteConfirm
          onDelete={() => onDelete(user.id)}
          onCancel={() => setIsDeleteWindowVisible(false)}
        />
      </Modal>
      <div className="user-card__main-container">
        <div className="user-card__title-container">
          <h2 className="user-card__title">{user.first_name} {user.last_name}</h2>
          
        </div>
        <hr className="hr" />
        <ul className="user-card__ul">
          <li className="user-card__li">
            <b>E-mail:</b> {user.email}
          </li>
          <li className="user-card__li">
            <b>Birthday:</b> {user.birthday}
          </li>
        </ul>
        <hr className="hr" />
        <div className="user-card__btn-container">
          <button
            className="user-card__delete-btn"
            onClick={() => setIsDeleteWindowVisible(true)}
          >
            <i className='bx bx-trash'></i>
          </button>
          <button className="user-card__put-btn"  onClick={() => onEdit(user)}><i className='bx bx-pencil'></i>
        
          </button>
         
        </div>
      </div>
    </>
  );
};

export default UserCard;
