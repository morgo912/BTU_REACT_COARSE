import type { questionsTypes } from "../types/questions";
import { question1, question2, question3, question4, question5 } from "./texts";

export const Questions :questionsTypes[] = [
  {
    id:1,
    question:question1,
    answer:"You can invite up to 15 team members"
  },
  {
    id:2,
    question:question2,
    answer:"No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    id:3,
    question:question3,
    answer:"You can reset your password through the account settings page"
  },

  {
    id:4,
    question:question4,
    answer:"Yes, you can cancel your subscription anytime from your dashboard"
  },

  {
    id:5,
    question:question5,
    answer:"Yes, we offer priority support for premium users"
  },
]