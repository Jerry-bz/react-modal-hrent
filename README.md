# react-modal-hrnet

react-modal-hrnet is a library created internally for the company HRnet

### Description

Confirmation message when creating a new employee

### Install the modal

npm install `react-modal-hrnet`

### Use of modal

```html
/**
 * Modal component to show on successful creation of employee
 * @param {closeModal} // function to close modal
 * @returns {JSX.Component}
 */

import Modal from "react-modal-hrnet";

   // Modal is False
  const [modal, setModal] = useState(false);

  // Modal is true
  setModal(true)

  const closeModal = () => {
    setModal(false);
  };

  const employee = () => {
    return (
      <section>
        {modal ? <Modal closeModal={closeModal} /> : null}
      </section>
    )
  }
```



