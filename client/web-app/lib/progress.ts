import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface LessonProgress {
  completed: boolean;
  completedAt?: Date;
  timeSpent?: number; // in seconds
}

export interface CourseProgress {
  startedAt: Date;
  lastAccessedAt: Date;
  currentLesson: string;
  completedLessons: string[];
  lessonsProgress: Record<string, LessonProgress>;
}

export interface UserProgress {
  [courseId: string]: CourseProgress;
}

export async function getUserProgress(userId: string): Promise<UserProgress> {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    return userSnap.data().progress || {};
  }
  return {};
}

export async function updateLessonProgress(
  userId: string,
  courseId: string,
  lessonSlug: string,
  completed: boolean = false
): Promise<void> {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) return;

  const userData = userSnap.data();
  const progress = userData.progress || {};
  const courseProgress = progress[courseId] || {
    startedAt: new Date(),
    lastAccessedAt: new Date(),
    currentLesson: lessonSlug,
    completedLessons: [],
    lessonsProgress: {},
  };

  // Update current lesson and last accessed
  courseProgress.lastAccessedAt = new Date();
  courseProgress.currentLesson = lessonSlug;

  // Update lesson progress
  courseProgress.lessonsProgress[lessonSlug] = {
    completed,
    completedAt: completed ? new Date() : undefined,
  };

  // Add to completed lessons if not already there
  if (completed && !courseProgress.completedLessons.includes(lessonSlug)) {
    courseProgress.completedLessons.push(lessonSlug);
  }

  progress[courseId] = courseProgress;

  await updateDoc(userRef, { progress });
}

export async function markLessonComplete(
  userId: string,
  courseId: string,
  lessonSlug: string
): Promise<void> {
  await updateLessonProgress(userId, courseId, lessonSlug, true);
}

export async function getCourseProgress(
  userId: string,
  courseId: string
): Promise<CourseProgress | null> {
  const progress = await getUserProgress(userId);
  return progress[courseId] || null;
}

export function calculateCourseCompletion(
  courseProgress: CourseProgress | null,
  totalLessons: number
): number {
  if (!courseProgress || totalLessons === 0) return 0;
  return Math.round((courseProgress.completedLessons.length / totalLessons) * 100);
}
