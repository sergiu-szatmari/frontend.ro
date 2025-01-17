import { useEffect, useState } from 'react';
import SEOTags from '~/components/SEOTags';
import { NotWroteYet } from '~/components/404';
import NotFoundPage from '~/components/404/NotFound';
import { withSmoothScroll } from '~/services/Hooks';
import { LessonHeading } from '~/components/lessons';
import PageContainer from '~/components/PageContainer';
import TutorialService from '~/services/api/Tutorial.service';
import { TutorialProgressI } from '~/../shared/types/tutorial.types';
import { getLessonById, LessonDescription } from '~/services/DataModel';
import LessonContent from '~/components/lessons/LessonContent/LessonContent';
import LessonExercises from '~/components/lessons/LessonExercises/LessonExercises';
import PageWithAsideMenu from '~/components/layout/PageWithAsideMenu/PageWithAsideMenu';
import TableOfContents, { Chapter, parseChapters } from '~/components/TableOfContents';

// Curriculum components
import ListsContent from '~/curriculum/html/Lists';
import FormsContent from '~/curriculum/html/Forms';
import ImagesContent from '~/curriculum/html/Images';
import TextsContent from '~/curriculum/html/TextElements';
import ContainersContent from '~/curriculum/html/Containers';
import AudioAndVideoContent from '~/curriculum/html/AudioAndVideo';
import AboutHtmlContent from '~/curriculum/html/AboutHtml/AboutHtml';
import HTMLValidationContent from '~/curriculum/html/HTMLValidation';
import LinksAndButtonsContent from '~/curriculum/html/LinksAndButtons';
import HTMLStructureContent from '~/curriculum/html/HTMLStructure/HTMLStructure';

const LESSON_TO_COMPONENT = {
  'audio-video': <AudioAndVideoContent />,
  containere: <ContainersContent />,
  'despre-html': <AboutHtmlContent />,
  formulare: <FormsContent />,
  imagini: <ImagesContent />,
  'linkuri-si-butoane': <LinksAndButtonsContent />,
  liste: <ListsContent />,
  'structura-pagina-html': <HTMLStructureContent />,
  texte: <TextsContent />,
  validare: <HTMLValidationContent />,
};

// Naming this component `Temp` because eventually
// will move this to the /html folder. So right now
// it's just a Temporary solution while we're finishing
// development on the Tutorial functionality.
const HtmlLessonTemp = ({ lessonInfo }: { lessonInfo: LessonDescription | null }) => {
  const TUTORIAL_ID = 'html';
  const [tutorialProgress, setTutorialProgress] = useState<TutorialProgressI>(undefined);

  const getChapters = (lessonDescription: LessonDescription): Chapter[] => {
    if (!lessonDescription.withExercises) {
      return parseChapters(lessonDescription.chapters);
    }

    return [
      {
        title: 'Lectie',
        id: 'lectie',
        href: '#lectie',
        subchapters: parseChapters(lessonInfo.chapters),
      },
      {
        title: 'Exerciții',
        id: 'exercitii',
        href: '#exercitii',
      },
    ];
  };

  useEffect(() => {
    TutorialService
      .getProgress(TUTORIAL_ID)
      .then((progress) => {
        setTutorialProgress(progress);
        console.log(progress);
      });
  }, []);

  withSmoothScroll();

  if (lessonInfo === null) {
    return <NotFoundPage />;
  }

  if (lessonInfo.written === false) {
    return <NotWroteYet lesson={lessonInfo} />;
  }

  const chapters = getChapters(lessonInfo);

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={lessonInfo.ogImage}
      />
      <PageWithAsideMenu menu={{
        title: lessonInfo.title,
        Component: tutorialProgress === undefined
          ? null
          : (
            <TableOfContents
              onChapterClick={() => {
                // FIXME
                // THIS SHOULD CLOSE THE MENU
              }}
              chapters={chapters}
            />
          ),
      }}
      >
        <PageContainer>
          <LessonContent
            title={lessonInfo.title}
            contributors={lessonInfo.contributors}
          >
            {LESSON_TO_COMPONENT[lessonInfo.id]}
            {lessonInfo.withExercises === true && (
              <div>
                <LessonHeading as="h3" id="exercitii">
                  Exerciții
                </LessonHeading>
                <LessonExercises lessonId={lessonInfo.id} />
              </div>
            )}
          </LessonContent>
        </PageContainer>
      </PageWithAsideMenu>
    </>
  );
};

// We tried migrating to staticPaths BUT that conflicts
// with the user fetch inside `_app.tsx` which means that navigating
// directly to lesson pages leads to the website thinking you're logged out.
export function getServerSideProps({ res, params }) {
  const { id } = params;
  const lessonInfo = getLessonById(id);

  if (lessonInfo === null) {
    res.statusCode = 404;
  }

  return {
    props: {
      lessonInfo,
    },
  };
}

export default HtmlLessonTemp;
