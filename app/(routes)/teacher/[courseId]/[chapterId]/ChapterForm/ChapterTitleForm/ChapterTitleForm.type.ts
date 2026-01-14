import { Chapter } from "@/app/generated/prisma/browser";

export type ChapterTitleFormProps = {
    chapter: Chapter;
    courseId: string;
}