import { Chapter, Course } from "@/app/generated/prisma/browser"

export type ListCourseProps = {
    title: string
    courses: (Course & {chapters: Chapter[]})[] | null;
}