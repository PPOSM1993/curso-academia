import { Chapter } from "@/app/generated/prisma/browser"

export type ChapterFormProps = {
    chapter: Chapter | null;
    courseId: string;
}