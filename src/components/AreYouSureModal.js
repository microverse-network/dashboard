import React from 'react'
import PropTypes from 'prop-types'
import { Header, Modal, Icon, Button } from 'semantic-ui-react'

export default function AreYouSureModal({
  onCloseClick,
  isOpen,
  onYesClick,
  onNoClick,
  content,
}) {
  return (
    <Modal basic size="small" open={isOpen} onClose={onCloseClick}>
      <Header icon="exclamation circle" content="Are You Sure?" />
      <Modal.Content>
        <p>{content}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          color="red"
          inverted
          onClick={onNoClick ? onNoClick : onCloseClick}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted onClick={onYesClick}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

AreYouSureModal.propTypes = {
  isOpen: PropTypes.bool,
  content: PropTypes.string,
  onCloseClick: PropTypes.func,
  onYesClick: PropTypes.func,
}

AreYouSureModal.defaultProps = {
  isOpen: false,
  content: 'button-content',
  onCloseClick: () => {},
  onYesClick: () => {},
}
