import Link from "next/link";
import { ListCourseProps } from "./ListCourse.type";
import Image from "next/image";
import { IconBadge } from "../IconBadge";
import { Book, ChartNoAxesColumn } from "lucide-react";
import { ProgressCourse } from "./ProgressCourse";

export default function ListCourse(props: ListCourseProps) {
    const { title, courses } = props;
    return (
        <>
            <div>
                <div className="my-4 mx-6 border rounded-lg bg-white p-6">
                    <h2 className="text-2xl font-normal">{title}</h2>

                    <div className="border border-b-[1px] py-0 mt-4" />

                    {courses && courses.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
                                {courses.map(({ id, imageUrl, title, level, price, slug, category, chapters }) => (
                                    <Link
                                        key={id}
                                        href={`/courses/${slug}`}
                                        className="mt-3 border rounded-lg relative transition-shadow hover:shadow-lg shadow-violet-300/40 shadow-md py-1">
                                        <span className="absolute top-2 right-2 z-10 px-2 py-1 bg-white text-violet-500 font-medium rounded-sm text-xs shadow-md">
                                            {category}
                                        </span>

                                        <div className="w-full h-[180px] relative mt-2 px-2">
                                            <Image
                                                src={imageUrl || "/default-course.webp"}
                                                alt={title}
                                                width={400}
                                                height={200}
                                                className="object-cover object-center rounded-lg"
                                                sizes="(max-width: 500px) 100vw, 120px"
                                            />
                                        </div>
                                        <div className="p-2">
                                            <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>

                                            <div className="flex items-center gap-2 justify-between mt-2">
                                                <IconBadge
                                                    icon={Book}
                                                    text={`${chapters.length} Capítulo(s)`}
                                                />
                                                <IconBadge
                                                    icon={ChartNoAxesColumn}
                                                    text={level || "Nivel N/A"}
                                                />
                                            </div>

                                            <ProgressCourse courseId={id} totalChapters={chapters.length} price={price} />

                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    )
}

