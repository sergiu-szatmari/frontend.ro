import React, {
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { LessonMenu } from '~/components/lessons';

import styles from './Lesson.module.scss';
import { withSmoothScroll } from '~/services/Hooks';
import { GITHUB_URL } from '~/services/Constants';
import LessonExercises from './LessonExercises/LessonExercises';
import { Chapter, parseChapters } from '../TableOfContents';
import LessonService from '~/services/api/Lesson.service';
import LessonContent from './LessonContent/LessonContent';
import LessonHeading from './LessonHeading/LessonHeading';
import { getLessonById, LessonDescription } from '~/services/DataModel';

export default function Lesson({
  lessonInfo,
  children,
}: PropsWithChildren<{ lessonInfo: LessonDescription }>) {
  const articleWrapper = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lesson = getLessonById(lessonInfo.id);

  withSmoothScroll(articleWrapper);

  const scrollTop = () => {
    articleWrapper.current.scrollTo(0, 0);
  };

  const chaptersWithHref: Chapter[] = lessonInfo.withExercises
    ? [
      ...parseChapters(lessonInfo.chapters ?? []),
      { title: 'Exerciții', id: 'exercitii', href: '#exercitii' },
    ]
    : parseChapters(lessonInfo.chapters ?? []);

  useEffect(() => {
    LessonService
      .increaseViews(lessonInfo.id)
      .catch((err) => {
        console.error('[Lesson.tsx] got while trying to update view count', err);
      });
  }, []);

  return (
    <div className={styles.lesson}>
      <LessonMenu
        url={lesson.url}
        isOpen={isMenuOpen}
        close={() => setIsMenuOpen(false)}
        onScrollTop={scrollTop}
        title={lessonInfo.title}
        className={styles['lesson-menu']}
        chapters={chaptersWithHref}
      />
      <main>
        <Header href="/lectii" onMenuClick={() => setIsMenuOpen(true)} withNavMenu />
        <div ref={articleWrapper} className={styles['article-wrapper']}>
          <LessonContent title={lessonInfo.title} contributors={lessonInfo.contributors ?? []}>
            {children}
          </LessonContent>
          <div className="my-5 text-right mr-2">
            <p>
              Ai vreo sugestie de îmbunătățire a acestei lecții?
              {' '}
              <a href={`${GITHUB_URL}/tree/master/client/curriculum`} target="_blank" rel="noreferrer">
                Contribuie pe GitHub
              </a>
            </p>
          </div>
          {lessonInfo.withExercises === true && (
            <div className={styles.exercises}>
              <LessonHeading as="h3" id="exercitii">
                Exerciții
              </LessonHeading>
              <LessonExercises lessonId={lessonInfo.id} />
            </div>
          )}
          <Footer />
        </div>
      </main>
    </div>
  );
}
