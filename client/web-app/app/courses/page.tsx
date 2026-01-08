import { getAllCourses } from "@/lib/courses";
import { CourseCard } from "@/components/course-card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Courses | perfectline",
  description: "Master C++, Flutter, and more with our comprehensive courses",
};

export default async function CoursesPage() {
  const courses = await getAllCourses();

  // Group courses by language
  const cppCourses = courses.filter((c) => c.lang === "cpp");
  const dartCourses = courses.filter((c) => c.lang === "dart");
  const otherCourses = courses.filter((c) => !["cpp", "dart"].includes(c.lang));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-linear-to-b from-primary/5 to-background py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            {courses.length} courses available
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Learn to code with <span className="text-primary">confidence</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From C++ fundamentals to Flutter mastery. Build real skills with
            hands-on projects and comprehensive lessons.
          </p>
        </div>
      </section>

      {/* Course Sections */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* C++ Courses */}
        {cppCourses.length > 0 && (
          <section className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div>
                <h2 className="text-2xl font-bold">C++ Courses</h2>
                <p className="text-sm text-muted-foreground">
                  Master systems programming and data structures
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cppCourses.map((course) => (
                <CourseCard key={course.course} course={course} />
              ))}
            </div>
          </section>
        )}

        {/* Flutter/Dart Courses */}
        {dartCourses.length > 0 && (
          <section className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                <span className="text-sm font-bold text-cyan-400">Flutter</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Flutter Courses</h2>
                <p className="text-sm text-muted-foreground">
                  Build beautiful cross-platform applications
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dartCourses.map((course) => (
                <CourseCard key={course.course} course={course} />
              ))}
            </div>
          </section>
        )}

        {/* Other Courses */}
        {otherCourses.length > 0 && (
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">More Courses</h2>
              <p className="text-sm text-muted-foreground">
                Expand your skills with additional topics
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherCourses.map((course) => (
                <CourseCard key={course.course} course={course} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
