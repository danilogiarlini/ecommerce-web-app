import { Product } from "@/model/product";
import clsx from "clsx";
import { ChangeEvent, FormEvent, useState } from "react";

export interface CMSProductsFormProps {
  activeItem: Partial<Product> | null;
  onClose: () => void;
}

const initialState: Partial<Product> = {
  name: "",
  cost: 0,
  description: "",
};

export function CMSProductsForm(props: CMSProductsFormProps) {
  const [formData, setFormData] = useState(initialState);

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const name = event.currentTarget.value;
    setFormData((state) => ({ ...state, name: name }));
  }

  function saveHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  const isNameValid = formData.name?.length;
  const isValid = isNameValid;

  return (
    <div
      className={clsx(
        "fixed bg-slate-200 z-10 text-black top-0 w-96  h-full transition-all",
        { "-right-96": !props.activeItem, "right-0": props.activeItem }
      )}
    >
      <div className="flex justify-around h-16">
        <button
          className="text-white w-1/2 bg-green-500 hover:bg-green-600 disabled:opacity-30"
          disabled={!isValid}
          type="submit"
        >
          SAVE
        </button>
        <button
          className="text-white w-1/2 bg-slate-500 hover:bg-slate-600"
          onClick={props.onClose}
          type="button"
        >
          CLOSE
        </button>
      </div>

      <div className="flex flex-col gap-3 mx-3 mt-16">
        Product Name:
      <form onSubmit={saveHandler}>
        <input className={clsx({ 'error': !isNameValid })} type="text" value={formData?.name} onChange={changeHandler} />
      </form>
      </div>

      {props.activeItem?.name}
    </div>
  );
}
