import { useGetLessonsQuery } from "../../graphql/generated";

import { Lesson } from "../Lesson";

interface SidebarModalProps {
  modal?: boolean;
  onRequestClose?: () => void;
}

export function Sidebar({ modal, onRequestClose }: SidebarModalProps) {
  const { data } = useGetLessonsQuery()

  const genericAside = 'w-[345px] bg-gray-700 p-6 border-l border-gray-600'

  return (
    <aside 
      className={`${genericAside} 
      ${!modal 
        ? 'hidden md:block' 
        : 'z-50 absolute top-[74px] right-0 border w-[100%] sm:w-[345px]'}
      `}
    >
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
              onRequestClose={onRequestClose}
            />
          )
        })}
      </div>
    </aside>
  )
}
