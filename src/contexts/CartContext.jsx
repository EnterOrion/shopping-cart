import { create } from "zustand";

const useItemStore = create((set) => ({
  itemsArray: [],
  addItem: (item) =>
    set((state) => ({ itemsArray: [...state.itemsArray, item] })),
}));

export default useItemStore;
