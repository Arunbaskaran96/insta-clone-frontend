import { Modal } from "@mantine/core";
import "@mantine/core/styles.layer.css";

interface ModalProps {
  children: React.ReactNode;
  opened: boolean;
  close: any;
}

function XModal(props: ModalProps) {
  const { children, opened, close } = props;
  return (
    <>
      <Modal opened={opened} onClose={close} centered size="100%">
        {children}
      </Modal>
    </>
  );
}

export default XModal;
