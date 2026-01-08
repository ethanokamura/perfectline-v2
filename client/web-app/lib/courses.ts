import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface CourseMeta {
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  published: boolean;
  lang: string;
  course: string;
  img: string;
  alt: string;
  order: number;
}

export interface LessonMeta {
  title: string;
  description: string;
  tags: string[];
  published: boolean;
  lang: string;
  course: string;
  order: number;
  slug: string;
}

export interface Lesson extends LessonMeta {
  content: string;
}

export interface Course extends CourseMeta {
  lessons: LessonMeta[];
}

// Get all courses from courses.json
export async function getAllCourses(): Promise<CourseMeta[]> {
  const coursesPath = path.join(CONTENT_DIR, "courses.json");
  const coursesData = JSON.parse(fs.readFileSync(coursesPath, "utf-8"));
  return coursesData.courses.filter((course: CourseMeta) => course.published);
}

// Get a specific course with its lessons
export async function getCourse(courseId: string): Promise<Course | null> {
  const courses = await getAllCourses();
  const courseMeta = courses.find((c) => c.course === courseId);

  if (!courseMeta) return null;

  const lessons = await getCourseLessons(courseId);

  return {
    ...courseMeta,
    lessons,
  };
}

// Get all lessons for a course
export async function getCourseLessons(
  courseId: string
): Promise<LessonMeta[]> {
  const coursePath = path.join(CONTENT_DIR, "courses", courseId);

  if (!fs.existsSync(coursePath)) return [];

  const files = fs
    .readdirSync(coursePath)
    .filter((file) => file.endsWith(".md"));

  const lessons: LessonMeta[] = files.map((file) => {
    const filePath = path.join(coursePath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title || file.replace(".md", ""),
      description: data.description || "",
      tags: data.tags || [],
      published: data.published ?? true,
      lang: data.lang || "cpp",
      course: courseId,
      order: data.order ?? 999,
      slug: file.replace(".md", ""),
    };
  });

  return lessons
    .filter((lesson) => lesson.published)
    .sort((a, b) => a.order - b.order);
}

// Get a specific lesson content
export async function getLesson(
  courseId: string,
  lessonSlug: string
): Promise<Lesson | null> {
  const lessonPath = path.join(
    CONTENT_DIR,
    "courses",
    courseId,
    `${lessonSlug}.md`
  );

  if (!fs.existsSync(lessonPath)) return null;

  const fileContent = fs.readFileSync(lessonPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    title: data.title || lessonSlug,
    description: data.description || "",
    tags: data.tags || [],
    published: data.published ?? true,
    lang: data.lang || "cpp",
    course: courseId,
    order: data.order ?? 999,
    slug: lessonSlug,
    content,
  };
}

// Get adjacent lessons (prev/next)
export async function getAdjacentLessons(
  courseId: string,
  currentSlug: string
): Promise<{ prev: LessonMeta | null; next: LessonMeta | null }> {
  const lessons = await getCourseLessons(courseId);
  const currentIndex = lessons.findIndex((l) => l.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? lessons[currentIndex - 1] : null,
    next: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null,
  };
}

// Get courses by language/tag
export async function getCoursesByTag(tag: string): Promise<CourseMeta[]> {
  const courses = await getAllCourses();
  return courses.filter((course) => course.tags.includes(tag));
}

// Get courses by language
export async function getCoursesByLang(lang: string): Promise<CourseMeta[]> {
  const courses = await getAllCourses();
  return courses.filter((course) => course.lang === lang);
}
