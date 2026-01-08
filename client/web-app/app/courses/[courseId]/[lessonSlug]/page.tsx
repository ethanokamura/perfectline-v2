import { notFound } from "next/navigation";
import {
  getLesson,
  getCourseLessons,
  getCourse,
  getAdjacentLessons,
} from "@/lib/courses";
import { markdownToHtml } from "@/lib/markdown";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { MarkdownContent } from "@/components/markdown-content";
import { LessonClient } from "./lesson-client";

interface LessonPageProps {
  params: Promise<{ courseId: string; lessonSlug: string }>;
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { courseId, lessonSlug } = await params;
  const lesson = await getLesson(courseId, lessonSlug);

  if (!lesson) {
    return { title: "Lesson Not Found" };
  }

  return {
    title: `${lesson.title} | perfectline`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { courseId, lessonSlug } = await params;

  const [lesson, course, lessons, adjacent] = await Promise.all([
    getLesson(courseId, lessonSlug),
    getCourse(courseId),
    getCourseLessons(courseId),
    getAdjacentLessons(courseId, lessonSlug),
  ]);

  if (!lesson || !course) {
    notFound();
  }

  const htmlContent = await markdownToHtml(lesson.content);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <LessonSidebar
        courseId={courseId}
        courseTitle={course.title}
        lessons={lessons}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Lesson Header */}
          <header className="mb-8">
            <p className="text-sm font-medium text-primary">{course.title}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {lesson.title}
            </h1>
            {lesson.description && (
              <p className="mt-2 text-lg text-muted-foreground">
                {lesson.description}
              </p>
            )}
          </header>

          {/* Lesson Content */}
          <MarkdownContent content={htmlContent} />

          {/* Client-side navigation with auth check */}
          <LessonClient
            courseId={courseId}
            lessonSlug={lessonSlug}
            prev={adjacent.prev}
            next={adjacent.next}
          />
        </div>
      </main>
    </div>
  );
}
