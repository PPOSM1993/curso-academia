import { Button } from "@/components/ui/button";
import { ExploreCourse } from "./components";
import { ListCourse } from "@/components/Shared";
import { getHomeCourses } from "@/actions/getHomeCourse";

export default async function Home() {

  const listCourses = await getHomeCourses();
  console.log(listCourses);

  return (
    <div>
      <ExploreCourse />
      <ListCourse title="Top Cursos" courses={listCourses} />
    </div>
  );
}
