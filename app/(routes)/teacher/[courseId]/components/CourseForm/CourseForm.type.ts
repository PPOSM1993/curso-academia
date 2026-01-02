import { Chapter, Course } from "@/app/generated/prisma/browser"

type CourseWithRelations = Course & {
    chapters: Chapter[]
}

export type CourseFormProps = {
    course: CourseWithRelations
}