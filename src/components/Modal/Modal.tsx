import { Modal } from "@mantine/core";
import "@mantine/core/styles.layer.css";

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  opened: boolean;
  close: any;
  size?: string;
}

function XModal(props: ModalProps) {
  const { children, opened, close, size, title } = props;
  return (
    <>
      <Modal
        title={title}
        opened={opened}
        onClose={close}
        centered
        size={size ? size : "100%"}
      >
        {children}
      </Modal>
    </>
  );
}

export default XModal;
