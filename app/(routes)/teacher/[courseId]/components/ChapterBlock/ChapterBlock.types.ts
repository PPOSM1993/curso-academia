import { Chapter } from "@/app/generated/prisma/client";

export type ChapterBlockProps = {
    idCourse: string;
    chapters: Chapter[] | null

}