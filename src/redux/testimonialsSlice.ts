import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

interface Testimonial {
  id: string;
  name: string;
  message: string;
  date: string;
}

interface TestimonialsState {
  list: Testimonial[];
}

const initialState: TestimonialsState = {
  list: [
    {
      id: uuid(),
      name: "Sophie Tremblay",
      message: "Jahswant a fait un travail exceptionnel sur notre site web. Je recommande sans hésiter !",
      date: "2025-03-25",
    },
    {
      id: uuid(),
      name: "Lucas Bernard",
      message: "Très professionnel et réactif. Le projet a été livré en avance et avec qualité.",
      date: "2025-03-27",
    },
    {
      id: uuid(),
      name: "Fatima Diallo",
      message: "Un développeur talentueux et à l'écoute. Le site fonctionne parfaitement sur mobile.",
      date: "2025-03-28",
    },
    {
      id: uuid(),
      name: "David Nkem",
      message: "Son portfolio m'a impressionné ! Travail créatif et très structuré.",
      date: "2025-03-30",
    },
    {
      id: uuid(),
      name: "Marie Lefebvre",
      message: "Merci Jahswant pour ton accompagnement et ta patience. Super boulot !",
      date: "2025-03-31",
    },
  ],
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    addTestimonial: (state, action: PayloadAction<Omit<Testimonial, "id" | "date">>) => {
      state.list.push({
        id: uuid(),
        date: new Date().toLocaleDateString(),
        ...action.payload,
      });
    },
    editTestimonial: (state, action: PayloadAction<Testimonial>) => {
      const index = state.list.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteTestimonial: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTestimonial, editTestimonial, deleteTestimonial } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
