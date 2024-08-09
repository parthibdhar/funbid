import React, { useState } from "react";
import MainModal from "./Main.Modal";
import { Input } from "../Components/UsedInputs";
import { GiConfirmed } from "react-icons/gi";
import { deleteUserProfile } from "../firestore/user";
import { useRouter } from "next/navigation";

type Props = {
  name: any;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  uid: any;
};
const ConfirmDeleteModal: React.FC<Props> = ({
  name,
  modalOpen,
  setModalOpen,
  uid,
}) => {
  const [confirm, setConfirm] = useState("");
  console.log("name", "modalOpen", "setModalOpen");
  console.log(name, modalOpen, setModalOpen);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (e: any) => {
    e.preventDefault();
    if (confirm === name) {
        try {
            await deleteUserProfile(uid);
            alert('User deleted successfully');
            router.push('/signUp');
        } catch (error: any) {
            setError(error.message);
        }
      setModalOpen(false);
    }else{
        alert("type /'"+name+"' to confirm")
        setModalOpen(false);
    }
  }
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="bg-inputBg bg-opacity-100 h-fit px-2 ">
        <form onSubmit={handleDelete}>
          <Input
            type="text"
            label={`type /'${name}' to confirm`}
            placeholder={"Confrm Delete"}
            name={"confirmDelete"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button
            type="submit"
            className="bg-red-700 transitions mx-auto mt-3  hover:bg-main hover:border-2 hover:border-red-700 hover:text-red-700 flex-rows gap-4 text-white p-4 rounded-lg w-fit text-md"
          >
            <GiConfirmed /> Confirm to Delete
          </button>
        </form>
      </div>
    </MainModal>
  );
};

export default ConfirmDeleteModal;
