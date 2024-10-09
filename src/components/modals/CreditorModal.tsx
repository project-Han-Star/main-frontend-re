import useCreditorModal from "../../lib/store/useCreditorModal";
import Modal from "./Modal";

const CreditorModal = () => {
  const { isOpen, onClose } = useCreditorModal();
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Modal
      titleBig
      isOpen={isOpen}
      onChange={onChange}
      title="채권자란 무엇을 의미하나요?"
    >
      <div>
        <p className="mt-12 text-xl font-bold text-fontlight">
          채권자란 <span className="text-primary">돈을 갚아야 할 대상</span>을
          의미해요. 대출은 받는 횟수와 관계없이{" "}
          <span className="text-primary">빌린 곳의 수</span>를 써주시면 돼요.
        </p>
        <h2 className="mt-8 text-2xl font-bold">예를 들어,</h2>
        <ul className="mt-6 ml-16 text-xl font-bold list-disc">
          <li>XX은행 10건</li>
          <li>YY카드 2건</li>
          <li>ZZ텔레콤 1건</li>
          <li>둘째삼촌 1건</li>
        </ul>
        <p className="mt-10 text-xl font-bold text-fontlight">
          이 경우, 채권자는 <span className="text-primary">4명</span>이 돼요.
        </p>
      </div>
    </Modal>
  );
};

export default CreditorModal;
