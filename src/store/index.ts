import create from "zustand";

export const useStore = create((set: any) => ({
  user: null,
  setUser: (user: any) => set((state) => ({ ...state, user })),
  websiteContent: null,
  setWebsiteContent: (content: any) =>
    set((state) => ({ ...state, websiteContent: content })),
}));
