import { create } from 'zustand';

interface MediaState {
  playing?: string;
  setPlaying?: (playing: string) => void;
}

export const useMediaStore = create<MediaState>((set) => ({
  setPlaying: (playing) => set(() => ({ playing })),
}));
