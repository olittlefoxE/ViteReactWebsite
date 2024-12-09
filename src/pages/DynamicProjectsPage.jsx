import React, { Suspense, useState } from "react";
import { useParams } from "react-router-dom";

export const DynamicProject = ({ projectName }) => {
  const [Component, setComponent] = useState(null);

  React.useEffect(() => {
    import(`../../external-projects/${projectName}/index.jsx`) // Adjust path based on structure
      .then((module) => {
        setComponent(() => module.default);
      })
      .catch(() => {
        setComponent(() => () => <p>Project not found!</p>);
      });
  }, [projectName]);

  if (!Component) {
    return <p>Loading...</p>;
  }

  return <Component />;
};

export const ProjectPage = () => {
  const { projectname } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">
        {projectname.replace('-', ' ')}
      </h1>
      <Suspense fallback={<p>Loading project...</p>}>
        <DynamicProject projectName={projectname} />
      </Suspense>
    </div>
  );
};
