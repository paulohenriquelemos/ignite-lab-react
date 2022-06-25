import { useGetLessonsQuery } from "../../graphql/generated";

import { Lesson } from "../Lesson";

// interface GetLessonsQueryResponse {
//   lessons: {
//     id: string;
//     title: string;
//     slug: string;
//     availableAt: Date;
//     lessonType: 'live' | 'class';
//   }[] /* dessa forma é para tipar o retorno como um array de objetos */
// }

export function Sidebar() {
  // const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
  const { data } = useGetLessonsQuery()

  // console.log(data)

  return (
    <aside className="w-[345px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
