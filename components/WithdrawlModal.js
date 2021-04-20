import { Modal } from "@geist-ui/react"

const WithdrawlModal = ({modal,setModal,step,setStep}) => {

    return (
          <>
            <Modal onClose={() => setModal(false)} open={modal}>
              <Modal.Title>Withdraw Account</Modal.Title>
              <Modal.Action passive onClick={() => setModal(false)}>Cancel</Modal.Action>
              <Modal.Action onClick={() => {setStep(step +1);setModal(false)}}>Withdraw</Modal.Action>
            </Modal>
          </>
        )
}

export default WithdrawlModal