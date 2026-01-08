import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCourse, getAllCourses } from "@/lib/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Clock, PlayCircle, User } from "lucide-react";

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}

export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((course) => ({
    courseId: course.course,
  }));
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = await getCourse(courseId);
  
  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: `${course.title} | perfectline`,
    description: course.description,
  };
}

const langColors: Record<string, string> = {
  cpp: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  dart: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  unity: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const langLabels: Record<string, string> = {
  cpp: "C++",
  dart: "Flutter/Dart",
  unity: "Unity",
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = await getCourse(courseId);

  if (!course) {
    notFound();
  }

  const firstLesson = course.lessons[0];

  return (
    <div className="min-h-screen">
      {/* Course Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Course Info */}
            <div className="flex flex-col justify-center">
              <Badge
                variant="outline"
                className={`mb-4 w-fit ${langColors[course.lang] || ""}`}
              >
                {langLabels[course.lang] || course.lang}
              </Badge>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {course.title}
              </h1>
              
              <p className="mt-4 text-lg text-muted-foreground">
                {course.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {course.author}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {course.lessons.length} lessons
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Updated {course.date}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {firstLesson && (
                <div className="mt-8">
                  <Link href={`/courses/${courseId}/${firstLesson.slug}`}>
                    <Button size="lg" className="gap-2">
                      <PlayCircle className="h-5 w-5" />
                      Start Learning
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Course Image */}
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted lg:aspect-[4/3]">
              {course.img ? (
                <Image
                  src={course.img}
                  alt={course.alt}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl font-bold text-muted-foreground/20">
                    {langLabels[course.lang] || course.lang}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold">Course Content</h2>
        <Card className="border-border/50">
          <CardContent className="p-0">
            {course.lessons.map((lesson, index) => (
              <div key={lesson.slug}>
                <Link
                  href={`/courses/${courseId}/${lesson.slug}`}
                  className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{lesson.title}</h3>
                    {lesson.description && (
                      <p className="mt-0.5 text-sm text-muted-foreground truncate">
                        {lesson.description}
                      </p>
                    )}
                  </div>
                  <PlayCircle className="h-5 w-5 shrink-0 text-muted-foreground" />
                </Link>
                {index < course.lessons.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
