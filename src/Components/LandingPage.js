import React, { useState } from 'react';
import * as Api from './Api';
import './assets/css/landing.css';
import Modal from './Modal';
import alert from '../globals/alert';

export default function ({ setIsVisible, isVisible, ...props }) {
  const NO_LINK = 'No link';
  const [repoLink, setRepoLink] = useState(NO_LINK);

  const addRepo = () => {
    Api.saveComparisons({
      comparisonName: 'repoLink',
      cards: { repoLink },
    }).then(({ isSaved }) => {
      if (!isSaved) {
        props.dispatch({ type: alert.SAVE_FAILURE });
      } else {
        props.dispatch({ type: alert.SAVE_SUCCESS });
      }
      hideModal();
      setTimeout(() => {
        props.dispatch({});
      }, 3000);
    });
  };

  const hideModal = () => {
    setIsVisible(false);
  };

  const handleConfirm = (e) => {
    const link = e.target.value.trim();
    if (link === NO_LINK || link === '') {
      props.dispatch({
        message: 'Enter correct link',
        type: alert.SAVE_FAILURE,
      });
      setTimeout(() => {
        props.dispatch({});
      }, 3000);
      return;
    }
    addRepo(link);
  };

  return (
    <div className="page">
      <Modal
        isVisible={isVisible}
        text={`Enter name of repo link`}
        onConfirm={handleConfirm}
        onCancel={hideModal}
        btnClasses={{ cancel: 'btn danger-btn', ok: 'btn theme-btn' }}
      >
        <input
          className="txt-input"
          value={repoLink}
          onChange={(e) => setRepoLink(e.target.value)}
          required
        />
      </Modal>
    </div>
  );
}
