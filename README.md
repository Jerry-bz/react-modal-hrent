# react-modal-hrnet

react-modal-hrnet is a library created internally for the company HRnet

### Description

Confirmation message when creating a new employee

### Install the modal

npm install `react-modal-hrnet`

### Use of modal

```
/**
 * Modal component to show on successful creation of employee
 * @param {closeModal} // function to close modal
 * @returns
 */

import Modal from "react-modal-hrnet";

   // Modal to display
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const employee = () => {
    return (
        {modal ? <Modal closeModal={closeModal} /> : null}
    )
  }
```



