interface SubtopicListProps {
  subtopics: Array<{
    title: string;
    content: string;
    physics?: string[];
    mathematics?: string[];
    applications?: string[];
    concepts?: string[];
    types?: string[];
    stages?: string[];
    evidence?: string[];
    observations?: string[];
    effects?: string[];
    implications?: string[];
  }>;
}

export function SubtopicList({ subtopics }: SubtopicListProps) {
  return (
    <div className="space-y-4">
      {subtopics.map((subtopic) => (
        <div key={subtopic.title} className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-2">{subtopic.title}</h4>
          <p className="text-gray-400 mb-4">{subtopic.content}</p>
          
          {Object.entries(subtopic).map(([key, value]) => {
            if (Array.isArray(value) && key !== 'content' && key !== 'title') {
              return (
                <div key={key} className="mt-3">
                  <h5 className="text-sm font-medium text-purple-400 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {value.map((item, index) => (
                      <li key={index} className="text-gray-300 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
}