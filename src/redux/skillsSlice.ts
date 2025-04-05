import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Skill {
  id: string;
  label: string;
}

interface SkillsState {
  list: Skill[];
}

const initialState: SkillsState = {
  list: [
    { id: "1", label: "HTML5" },
    { id: "2", label: "CSS3" },
    { id: "3", label: "JavaScript" },
    { id: "4", label: "React" },
    { id: "5", label: "Next.js" },
    { id: "6", label: "TailwindCSS" },
    { id: "7", label: "Redux" },
    { id: "8", label: "Node.js" },
    { id: "9", label: "Git/GitHub" },
  ],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state, action: PayloadAction<string>) => {
      state.list.push({ id: crypto.randomUUID(), label: action.payload });
    },
    editSkill: (state, action: PayloadAction<Skill>) => {
      const index = state.list.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteSkill: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((skill) => skill.id !== action.payload);
    },
  },
});

export const { addSkill, editSkill, deleteSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
